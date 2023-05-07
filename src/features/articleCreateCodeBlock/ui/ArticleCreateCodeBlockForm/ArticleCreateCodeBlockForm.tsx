import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateCodeBlockForm.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { TextField } from '@/shared/ui/TextField';
import { Button } from '@/shared/ui/Button';
import { ArticleBlockType, ArticleCodeBlock } from '@/entities/Article';

interface ArticleCreateCodeBlockFormProps {
    className?: string;
    onSave?: (block: ArticleCodeBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
}

export const ArticleCreateCodeBlockForm: FC<ArticleCreateCodeBlockFormProps> = (
    props,
) => {
    const { className, onSave, readonly, setReadOnly } = props;
    const { t } = useTranslation();

    const [code, setCode] = useState('');

    const onCodeChange = useCallback((code: string) => {
        setCode(code);
    }, []);

    const onSaveHandle = useCallback(() => {
        onSave?.({
            code,
            type: ArticleBlockType.CODE,
        });
        setReadOnly?.(true);
    }, [code, onSave, setReadOnly]);

    return (
        <VStack
            className={classNames(cls.articleCreateTextBlockForm, {}, [
                className,
            ])}
            gap="16"
        >
            <TextField
                value={code}
                onChange={onCodeChange}
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
