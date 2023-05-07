import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';
import cls from './ArticleEditPage.module.scss';
import { ArticleCreateForm } from '@/widgets/ArticleCreateForm';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage: FC<ArticleEditPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            {isEdit ? (
                'Редактирование'
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
