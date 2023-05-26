import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import { Input } from '@/shared/ui/redesigned/Input';
import { TextField as TextFieldDeprecated } from '@/shared/ui/deprecated/TextField';
import { TextField } from '@/shared/ui/redesigned/TextField';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { Button } from '@/shared/ui/redesigned/button';
import { ArticleBlockType, ArticleTextBlock } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';

interface ArticleEditTextBlockFormProps {
    className?: string;
    onSave?: (block: ArticleTextBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
    textBlock?: ArticleTextBlock;
}

export const ArticleEditTextBlockForm: FC<ArticleEditTextBlockFormProps> = (
    props,
) => {
    const { className, onSave, readonly, setReadOnly, textBlock } = props;

    const [title, setTitle] = useState(textBlock?.title || '');
    const [paragraphs, setParagraphs] = useState(
        textBlock?.paragraphs?.join(' ') || '',
    );

    const { t } = useTranslation('article-edit');

    const onTitleChange = useCallback((title: string) => {
        setTitle(title);
    }, []);

    const onParagraphsChange = useCallback((title: string) => {
        setParagraphs(title);
    }, []);

    const onSaveHandle = useCallback(() => {
        onSave?.({
            type: ArticleBlockType.TEXT,
            title,
            paragraphs: paragraphs.split('\n\n'),
        });
        setReadOnly?.(true);
    }, [onSave, paragraphs, setReadOnly, title]);

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
                        data-testid="ArticleEditTextBlockForm.Title"
                        fullWidth
                    />
                    <TextField
                        value={paragraphs}
                        onChange={onParagraphsChange}
                        cols={160}
                        rows={16}
                        readonly={readonly}
                        data-testid="ArticleEditTextBlockForm.Paragraphs"
                    />
                    <Button
                        onClick={onSaveHandle}
                        disabled={readonly}
                        data-testid="ArticleEditTextBlockForm.SaveButton"
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
                        data-testid="ArticleEditTextBlockForm.Title"
                    />
                    <TextFieldDeprecated
                        value={paragraphs}
                        onChange={onParagraphsChange}
                        cols={160}
                        rows={16}
                        readonly={readonly}
                        data-testid="ArticleEditTextBlockForm.Paragraphs"
                    />
                    <ButtonDeprecated
                        onClick={onSaveHandle}
                        disabled={readonly}
                        data-testid="ArticleEditTextBlockForm.SaveButton"
                    >
                        {t('Сохранить')}
                    </ButtonDeprecated>
                </VStack>
            }
        />
    );
};
