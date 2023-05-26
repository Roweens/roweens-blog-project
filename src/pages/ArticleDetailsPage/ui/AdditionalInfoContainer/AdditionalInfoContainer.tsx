import { useSelector } from 'react-redux';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { selectArticleDetailsData } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

export const AdditionalInfoContainer = () => {
    const article = useSelector(selectArticleDetailsData);

    if (!article) {
        return (
            <Card padding="8" border="intermediate">
                <Skeleton height={208} width={264} border="16px" />
            </Card>
        );
    }

    return (
        <Card className={cls.card} padding="24" border="intermediate">
            <ArticleAdditionalInfo
                author={article.user}
                createdAt={article.createdAt}
                views={article.views}
                articleId={article.id}
            />
        </Card>
    );
};
