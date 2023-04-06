import { FC, HTMLAttributeAnchorTarget } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    List, ListRowProps, WindowScroller,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/ui/Page';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
   className?: string;
   articles: Article[]
   isLoading?: boolean;
   view?: ArticleView;
   target?: HTMLAttributeAnchorTarget
}

const getSkeletons = (view: ArticleView) => new Array(view === 'Block' ? 9 : 3)
    .fill(0)
    .map((item, index) => <ArticleListItemSkeleton view={view} className={cls.card} key={index} />);

export const ArticleList: FC<ArticleListProps> = (props) => {
    const {
        className, articles, view = 'Block', isLoading, target,
    } = props;
    const { t } = useTranslation();

    const isBig = view === 'List';

    const itemsPerRow = isBig ? 1 : 5;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRender = ({ index, key, style }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(
                <ArticleListItem
                    article={articles[i]}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={articles[i].id}

                />,
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                <Text title={t('Статьи не найдены')} size={TextSize.L} />
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => console.log('scroll')}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height, width, registerChild, scrollTop, onChildScroll, isScrolling,
            }) => (
                <div className={classNames(cls.articleList, {}, [className, cls[view]])} ref={registerChild}>
                    <List
                        autoHeight
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isBig ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 700}
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}

        </WindowScroller>

    // {articles.length > 0 ? articles.map(renderArticle) : null}

    );
};
