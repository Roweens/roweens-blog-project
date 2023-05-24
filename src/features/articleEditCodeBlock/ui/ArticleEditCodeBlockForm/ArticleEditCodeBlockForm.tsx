import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TextField } from '@/shared/ui/deprecated/TextField';
import { Button } from '@/shared/ui/deprecated/button';
import { ArticleBlockType, ArticleCodeBlock } from '@/entities/Article';

interface ArticleEditCodeBlockFormProps {
    className?: string;
    onSave?: (block: ArticleCodeBlock) => void;
    readonly?: boolean;
    setReadOnly?: (readonly: boolean) => void;
    codeBlock?: ArticleCodeBlock;
}

export const ArticleEditCodeBlockForm: FC<ArticleEditCodeBlockFormProps> = (
    props,
) => {
    const { className, onSave, readonly, setReadOnly, codeBlock } = props;
    const { t } = useTranslation();

    const [code, setCode] = useState(codeBlock?.code || '');

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
        <VStack className={classNames('', {}, [className])} gap="16">
            <TextField
                value={code}
                onChange={onCodeChange}
                cols={160}
                rows={16}
                readonly={readonly}
                data-testid="ArticleEditCodeBlockForm.CodeField"
            />
            <Button
                onClick={onSaveHandle}
                disabled={readonly}
                data-testid="ArticleEditCodeBlockForm.SaveButton"
            >
                {t('Сохранить')}
            </Button>
        </VStack>
    );
};
