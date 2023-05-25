import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Button } from '@/shared/ui/redesigned/button';
import { ArticleBlockType, ArticleImageBlock } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <VStack className={classNames('', {}, [className])} gap="16">
                    <Input
                        value={title}
                        label={t('Заголовок блока')}
                        onChange={onTitleChange}
                        readonly={readonly}
                        data-testid="ArticleEditImageBlockForm.Title"
                    />
                    <Input
                        value={imageUrl}
                        label={t('Ссылка на изображение')}
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
            }
            off={
                <VStack className={classNames('', {}, [className])} gap="16">
                    <InputDeprecated
                        value={title}
                        placeholder={t('Заголовок блока')}
                        onChange={onTitleChange}
                        readonly={readonly}
                        data-testid="ArticleEditImageBlockForm.Title"
                    />
                    <InputDeprecated
                        value={imageUrl}
                        placeholder={t('Ссылка на изображение')}
                        onChange={onImageUrlChange}
                        readonly={readonly}
                        data-testid="ArticleEditImageBlockForm.ImgLink"
                    />
                    <ButtonDeprecated
                        onClick={onSaveHandle}
                        disabled={readonly}
                        data-testid="ArticleEditImageBlockForm.SaveButton"
                    >
                        {t('Сохранить')}
                    </ButtonDeprecated>
                </VStack>
            }
        />
    );
};
