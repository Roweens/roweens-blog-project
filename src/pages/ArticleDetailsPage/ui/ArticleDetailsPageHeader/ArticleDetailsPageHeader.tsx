import { selectArticleDetailsData } from 'entities/Article';
import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/button/Button';
import { HStack } from 'shared/ui/Stack';
import { selectUserIsAuthor } from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
   className?: string;
}

export const ArticleDetailsPageHeader: FC<ArticleDetailsPageHeaderProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();
    const isAuthor = useSelector(selectUserIsAuthor);
    const article = useSelector(selectArticleDetailsData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditList = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`);
    }, [navigate, article]);

    return (
        <HStack className={classNames('', {}, [className])} max justify="between">
            <Button onClick={onBackToList}>{t('Назад к списку')}</Button>
            {isAuthor && <Button onClick={onEditList}>{t('Редактировать')}</Button>}
        </HStack>
    );
};
