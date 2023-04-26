import {
    FC, HTMLAttributeAnchorTarget, MutableRefObject, memo, useCallback, useEffect, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { Virtuoso, VirtuosoGrid, VirtuosoGridHandle } from 'react-virtuoso';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[]
   isLoading?: boolean;
   view?: ArticleView;
   target?: HTMLAttributeAnchorTarget;
   virtualized?: boolean;
    scrollRef?: MutableRefObject<HTMLDivElement>;
    onViewArticle?: (articleIndex: number) => void;
    articleViewIndex?: number
}

const getSkeletons = (view: ArticleView) => new Array(view === 'Block' ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} className={cls.card} key={index} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className, articles, view = 'Block', isLoading, target, virtualized = true, scrollRef, onViewArticle, articleViewIndex = 0,
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

    const rowRender = useCallback((article: Article, index: number) => (
        <ArticleListItem
            article={articles[index]}
            view={view}
            className={cls.card}
            target={target}
            key={articles[index].id}
            index={index}
            onViewArticle={onViewArticle}
        />
    ), [articles, onViewArticle, target, view]);

    const Footer = memo(() => {
        if (isLoading) {
            return (
                <div className={classNames('', {}, [view === 'Block' ? cls.Block : cls.List])}>
                    {getSkeletons(view)}
                </div>
            );
        }
        return null;
    });

    // eslint-disable-next-line react/no-unstable-nested-components
    const ItemContainerComp: FC<{height: number, width: number, index: number}> = ({ height, width, index }) => (
        <div className={cls.itemContainer}>
            <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
        </div>
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
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
        <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
            {virtualized ? (
                virtualizedList
            )
                : (
                    articles.map((article) => (
                        <ArticleListItem
                            article={article}
                            view={view}
                            target={target}
                            key={article.id}
                            className={cls.card}
                        />
                    ))
                )}
        </div>

    );
};
