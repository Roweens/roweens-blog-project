import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/button';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { getRouteArticleEdit } from '@/shared/const/router';

interface ArticleEditButtonProps {
    className?: string;
    articleId?: number;
}

export const ArticleEditButton: FC<ArticleEditButtonProps> = (props) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();

    const onEditList = useCallback(() => {
        if (articleId) {
            navigate(getRouteArticleEdit(articleId));
        }
    }, [navigate, articleId]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button onClick={onEditList} className={className}>
                    {t('Редактировать')}
                </Button>
            }
            off={
                <ButtonDeprecated onClick={onEditList} className={className}>
                    {t('Редактировать')}
                </ButtonDeprecated>
            }
        />
    );
};
