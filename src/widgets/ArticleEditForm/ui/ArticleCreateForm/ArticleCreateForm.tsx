import { FC } from 'react';
import { ToggleFeatures } from '@/shared/features';
import { ArticleCreateFormRedesigned } from './ArticleCreateFormRedesigned/ArticleCreateFormRedesigned';
import { ArticleCreateFormDeprecated } from './ArticleCreateFormDeprecated/ArticleCreateFormDeprecated';

interface ArticleCreateFormProps {
    className?: string;
    articleId?: number;
}

export const ArticleCreateForm: FC<ArticleCreateFormProps> = (props) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ArticleCreateFormRedesigned {...props} />}
            off={<ArticleCreateFormDeprecated {...props} />}
        />
    );
};
