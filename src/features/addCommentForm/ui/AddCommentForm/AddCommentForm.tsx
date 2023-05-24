import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { Input as InputDeprecated } from '@/shared/ui/deprecated/Input';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/redesigned/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { selectAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { Button } from '@/shared/ui/redesigned/button';
import { Input } from '@/shared/ui/redesigned/Input';
import { Card } from '@/shared/ui/redesigned/Card';

export interface addCommentFormProps {
    className?: string;
    onSendComment?: (text: string) => void;
}

const reducers: ReducersList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm: FC<addCommentFormProps> = (props) => {
    const { className, onSendComment } = props;
    const { t } = useTranslation();
    const text = useSelector(selectAddCommentFormText);

    const dispatch = useAppDispatch();

    const onCommentTextChange = useCallback(
        (value: string) => {
            dispatch(addCommentFormActions.setText(value));
        },
        [dispatch],
    );

    const onSendHandler = useCallback(() => {
        if (text) {
            onSendComment?.(text);
            onCommentTextChange('');
        }
    }, [text, onSendComment, onCommentTextChange]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Card padding="24" border="round" fullWidth>
                        <HStack
                            className={classNames(
                                cls.addCommentFormRedesigned,
                                {},
                                [className],
                            )}
                            justify="between"
                            max
                            gap="16"
                            data-testid="AddCommentForm"
                        >
                            <Input
                                placeholder={t('Введите текст комментария')}
                                value={text || ''}
                                onChange={onCommentTextChange}
                                className={cls.input}
                                data-testid="AddCommentForm.Input"
                            />
                            <Button
                                onClick={onSendHandler}
                                data-testid="AddCommentForm.Button"
                            >
                                {t('Отправить')}
                            </Button>
                        </HStack>
                    </Card>
                }
                off={
                    <HStack
                        className={classNames(cls.addCommentForm, {}, [
                            className,
                        ])}
                        justify="between"
                        max
                        data-testid="AddCommentForm"
                    >
                        <InputDeprecated
                            placeholder={t('Введите текст комментария')}
                            value={text || ''}
                            onChange={onCommentTextChange}
                            className={cls.input}
                            data-testid="AddCommentForm.Input"
                        />
                        <ButtonDeprecated
                            onClick={onSendHandler}
                            data-testid="AddCommentForm.Button"
                        >
                            {t('Отправить')}
                        </ButtonDeprecated>
                    </HStack>
                }
            />
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
