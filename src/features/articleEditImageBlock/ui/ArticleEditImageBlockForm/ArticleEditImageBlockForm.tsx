import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/button';
import { ArticleBlockType, ArticleImageBlock } from '@/entities/Article';

interface ArticleEditImageBlockFormProps {
    className?: string;
    onSave?: (block: ArticleImageBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
    imageBlock?: ArticleImageBlock;
}

export const ArticleEditImageBlockForm: FC<ArticleEditImageBlockFormProps> = (
    props,
) => {
    const { className, onSave, readonly, setReadOnly, imageBlock } = props;

    const [title, setTitle] = useState(imageBlock?.title || '');
    const [imageUrl, setImageUrl] = useState(imageBlock?.src || '');

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
        <VStack className={classNames('', {}, [className])} gap="16">
            <Input
                value={title}
                placeholder={t('Заголовок блока')}
                onChange={onTitleChange}
                readonly={readonly}
                data-testid="ArticleEditImageBlockForm.Title"
            />
            <Input
                value={imageUrl}
                placeholder={t('Ссылка на изображение')}
                onChange={onImageUrlChange}
                readonly={readonly}
                data-testid="ArticleEditImageBlockForm.ImgLink"
            />
            <Button
                onClick={onSaveHandle}
                disabled={readonly}
                data-testid="ArticleEditImageBlockForm.SaveButton"
            >
                {t('Сохранить')}
            </Button>
        </VStack>
    );
};
