import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateTextBlockForm.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { TextField } from '@/shared/ui/TextField';
import { Button } from '@/shared/ui/Button';
import { ArticleBlockType, ArticleTextBlock } from '@/entities/Article';

interface ArticleCreateTextBlockFormProps {
    className?: string;
    onSave?: (block: ArticleTextBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
}

export const ArticleCreateTextBlockForm: FC<ArticleCreateTextBlockFormProps> = (
    props,
) => {
    const { className, onSave, readonly, setReadOnly } = props;

    const [title, setTitle] = useState('');
    const [paragraphs, setParagraphs] = useState('');

    const { t } = useTranslation();

    const onTitleChange = useCallback((title: string) => {
        setTitle(title);
    }, []);

    const onParagraphsChange = useCallback((title: string) => {
        setParagraphs(title);
    }, []);

    const onSaveHandle = useCallback(() => {
        onSave?.({
            title,
            paragraphs: [paragraphs],
            type: ArticleBlockType.TEXT,
        });
        setReadOnly?.(true);
    }, [onSave, paragraphs, setReadOnly, title]);

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
            <TextField
                value={paragraphs}
                onChange={onParagraphsChange}
                cols={160}
                rows={16}
                readonly={readonly}
            />
            <Button onClick={onSaveHandle} disabled={readonly}>
                {t('Сохранить')}
            </Button>
        </VStack>
    );
};
