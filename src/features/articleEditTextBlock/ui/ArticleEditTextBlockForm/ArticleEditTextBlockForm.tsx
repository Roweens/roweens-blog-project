import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/deprecated/Input';
import { TextField } from '@/shared/ui/deprecated/TextField';
import { Button } from '@/shared/ui/deprecated/button';
import { ArticleBlockType, ArticleTextBlock } from '@/entities/Article';

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
        <VStack className={classNames('', {}, [className])} gap="16">
            <Input
                value={title}
                placeholder={t('Заголовок блока')}
                onChange={onTitleChange}
                readonly={readonly}
                data-testid="ArticleEditTextBlockForm.Title"
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
    );
};
