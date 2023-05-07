import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateImageBlockForm.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { ArticleBlockType, ArticleImageBlock } from '@/entities/Article';

interface ArticleCreateImageBlockFormProps {
    className?: string;
    onSave?: (block: ArticleImageBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
}

export const ArticleCreateImageBlockForm: FC<
    ArticleCreateImageBlockFormProps
> = (props) => {
    const { className, onSave, readonly, setReadOnly } = props;

    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { t } = useTranslation();

    const onTitleChange = useCallback((title: string) => {
        setTitle(title);
    }, []);

    const onImageUrlChange = useCallback((imageUrl: string) => {
        setImageUrl(imageUrl);
    }, []);

    const onSaveHandle = useCallback(() => {
        onSave?.({
            title,
            src: imageUrl,
            type: ArticleBlockType.IMAGE,
        });
        setReadOnly?.(true);
    }, [imageUrl, onSave, setReadOnly, title]);

    return (
        <VStack
            className={classNames(cls.articleCreateTextBlockForm, {}, [
                className,
            ])}
            gap="16"
        >
            <Input
                value={title}
                placeholder={t('Заголовок блока')}
                onChange={onTitleChange}
                readonly={readonly}
            />
            <Input
                value={imageUrl}
                placeholder={t('Ссылка на изображение')}
                onChange={onImageUrlChange}
                readonly={readonly}
            />
            <Button onClick={onSaveHandle} disabled={readonly}>
                {t('Сохранить')}
            </Button>
        </VStack>
    );
};
