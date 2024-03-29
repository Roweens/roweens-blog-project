import {
    FC,
    HTMLAttributeAnchorTarget,
    MutableRefObject,
    memo,
    useCallback,
    useEffect,
    useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
    scrollRef?: MutableRefObject<HTMLDivElement>;
    onViewArticle?: (articleIndex: number) => void;
    articleViewIndex?: number;
}

const getSkeletons = (view: ArticleView) =>
    new Array(view === 'Block' ? 9 : 3)
        .fill(0)
        .map((item, index) => (
            <ArticleListItemSkeleton
                view={view}
                className={cls.card}
                key={index}
            />
        ));

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className,
        articles,
        view = 'Block',
        isLoading,
        target,
        virtualized = false,
        scrollRef,
        onViewArticle,
        articleViewIndex = 0,
    } = props;

    const { t } = useTranslation();

    const virtualizedGridRef = useRef<VirtuosoGridHandle>(null);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        if (view === 'Block') {
            timeoutId = setTimeout(() => {
                if (virtualizedGridRef.current) {
                    virtualizedGridRef.current.scrollToIndex(articleViewIndex);
                }
            }, 100);
        }

        return () => clearTimeout(timeoutId);
    }, [articleViewIndex, view]);

    const rowRender = useCallback(
        (article: Article, index: number) => (
            <ArticleListItem
                article={articles[index]}
                view={view}
                className={cls.card}
                target={target}
                key={articles[index].id}
                index={index}
                onViewArticle={onViewArticle}
            />
        ),
        [articles, onViewArticle, target, view],
    );

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div
                    className={classNames('', {}, [
                        view === 'Block' ? cls.Block : cls.List,
                    ])}
                >
                    {getSkeletons(view)}
                </div>
            );
        }
        return null;
    });

    const ItemContainerComp: FC<{
        height: number;
        width: number;
        index: number;
        // eslint-disable-next-line react/no-unstable-nested-components
    }> = ({ height, width, index }) => (
        <div className={cls.itemContainer}>
            <ArticleListItemSkeleton
                key={index}
                view={view}
                className={cls.card}
            />
        </div>
    );

    if (!isLoading && !articles.length) {
        return (
            <div
                className={classNames(cls.articleList, {}, [
                    className,
                    cls[view],
                ])}
                data-testid="ArticleList.NotFound"
            >
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    let virtualizedList;

    if (virtualized && view === 'List') {
        virtualizedList = (
            <Virtuoso
                style={{ height: '100vh', width: '100%' }}
                data={articles}
                itemContent={(index, article) => rowRender(article, index)}
                components={{
                    Footer,
                }}
                customScrollParent={scrollRef?.current}
                initialTopMostItemIndex={articleViewIndex}
            />
        );
    }

    if (virtualized && view === 'Block') {
        virtualizedList = (
            <VirtuosoGrid
                ref={virtualizedGridRef}
                style={{ height: '100vh', width: '100%' }}
                data={articles}
                itemContent={(index, article) => rowRender(article, index)}
                components={{
                    Footer,
                    ScrollSeekPlaceholder: ItemContainerComp,
                }}
                listClassName={cls.Block}
                customScrollParent={scrollRef?.current}
                scrollSeekConfiguration={{
                    enter: (velocity) => Math.abs(velocity) > 200,
                    exit: (velocity) => Math.abs(velocity) < 30,
                }}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <HStack
                    wrap="wrap"
                    className={classNames(cls.articleListRedesigned, {}, [])}
                    data-testid="ArticleList"
                    gap="16"
                >
                    {virtualized ? (
                        virtualizedList
                    ) : (
                        <>
                            {articles.map((article) => (
                                <ArticleListItem
                                    article={article}
                                    view={view}
                                    target={target}
                                    key={article.id}
                                    className={cls.card}
                                />
                            ))}
                            {isLoading && getSkeletons(view)}
                        </>
                    )}
                </HStack>
            }
            off={
                <div
                    className={classNames(cls.articleList, {}, [
                        className,
                        cls[view],
                    ])}
                    data-testid="ArticleList"
                >
                    {virtualized ? (
                        virtualizedList
                    ) : (
                        <>
                            {articles.map((article) => (
                                <ArticleListItem
                                    article={article}
                                    view={view}
                                    target={target}
                                    key={article.id}
                                    className={cls.card}
                                />
                            ))}
                            {isLoading && getSkeletons(view)}
                        </>
                    )}
                </div>
            }
        />
    );
};
