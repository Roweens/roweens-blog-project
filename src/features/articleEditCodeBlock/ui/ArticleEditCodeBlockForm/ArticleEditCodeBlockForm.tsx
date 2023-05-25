import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { TextField as TextFieldDeprecated } from '@/shared/ui/deprecated/TextField';
import { TextField } from '@/shared/ui/redesigned/TextField';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { Button } from '@/shared/ui/redesigned/button';
import { ArticleBlockType, ArticleCodeBlock } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';

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
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
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
            }
            off={
                <VStack className={classNames('', {}, [className])} gap="16">
                    <TextFieldDeprecated
                        value={code}
                        onChange={onCodeChange}
                        cols={160}
                        rows={16}
                        readonly={readonly}
                        data-testid="ArticleEditCodeBlockForm.CodeField"
                    />
                    <ButtonDeprecated
                        onClick={onSaveHandle}
                        disabled={readonly}
                        data-testid="ArticleEditCodeBlockForm.SaveButton"
                    >
                        {t('Сохранить')}
                    </ButtonDeprecated>
                </VStack>
            }
        />
    );
};
