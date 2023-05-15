import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/Input';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import {
    addCommentFormActions,
    addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';
import { selectAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import cls from './AddCommentForm.module.scss';

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
            <HStack
                className={classNames(cls.addCommentForm, {}, [className])}
                justify="between"
                max
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
        </DynamicModuleLoader>
    );
};

export default AddCommentForm;
