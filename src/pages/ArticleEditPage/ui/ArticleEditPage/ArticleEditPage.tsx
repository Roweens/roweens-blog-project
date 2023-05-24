import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';
import { ArticleCreateForm } from '@/widgets/ArticleEditForm';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/deprecated/Text';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-edit');
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page
            className={classNames(cls.articleEditPage, {}, [className])}
            data-testid="ArticleEditPage"
        >
            {isEdit ? (
                <VStack gap="32">
                    <Text title={t('Редактор статьи')} />
                    <ArticleCreateForm articleId={Number(id)} />
                </VStack>
            ) : (
                <VStack gap="32">
                    <Text title={t('Создание статьи')} />
                    <ArticleCreateForm />
                </VStack>
            )}
        </Page>
    );
};

export default ArticleEditPage;
