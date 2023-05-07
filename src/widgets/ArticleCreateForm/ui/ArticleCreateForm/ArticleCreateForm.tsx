import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateForm.module.scss';
import { VStack } from '@/shared/ui/Stack';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    articleCreateActions,
    articleCreateReducer,
} from '../../model/slice/articleCreateSlice';
import { selectArticleCreateData } from '../../model/selectors/selectArticleCreateData';
import { selectArticleCreateBlockCount } from '../../model/selectors/selectArticleCreateBlockCount';
import { Button } from '@/shared/ui/Button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleCreateBlock } from '../ArticleCreateBlock/ArticleCreateBlock';
import { ArticleBlock, ArticleType } from '@/entities/Article';
import { createNewArticle } from '../../model/services/createNewArticle/createNewArticle';
import { ArticleCreateSelectType } from '../ArticleCreateSelectType/ArticleCreateSelectType';
import { ValidateNewArticleError } from '../../model/consts/consts';
import { selectArticleCreateValidateErrors } from '../../model/selectors/selectArticleCreateValidateErrors';
import { Text, TextTheme } from '@/shared/ui/Text';

interface ArticleCreateFormProps {
    className?: string;
}

const reducers: ReducersList = {
    articleCreateForm: articleCreateReducer,
};

export const ArticleCreateForm: FC<ArticleCreateFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const newArticle = useSelector(selectArticleCreateData);
    const blockCount = useSelector(selectArticleCreateBlockCount);
    const validateErrors = useSelector(selectArticleCreateValidateErrors);

    const validateErrorTranslates = {
        [ValidateNewArticleError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateNewArticleError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateNewArticleError.INCORRECT_BLOCKS]: t(
            'Количество блоков должно быть больше 3',
        ),
        [ValidateNewArticleError.INCORRECT_IMAGE]: t(
            'Пожалуйста, добавьте ссылку на изображение',
        ),
        [ValidateNewArticleError.INCORRECT_IMAGE_URL]: t(
            'Строка с изображением должна содержать ссылку',
        ),
        [ValidateNewArticleError.INCORRECT_SUBTITLE]: t(
            'Подзаголовок для статьи обязателен, минимум 30 символов',
        ),
        [ValidateNewArticleError.INCORRECT_TITLE]: t(
            'Заголовок для статьи обязателен, минимум 10 символов',
        ),
        [ValidateNewArticleError.INCORRECT_TYPE]: t(
            'Выберите хотя бы одну категорию для статьи',
        ),
        [ValidateNewArticleError.NO_USER]: t('Пользователь не определен'),
    };

    const onChangeTitle = useCallback(
        (value?: string) => {
            dispatch(
                articleCreateActions.setNewArticle({
                    ...newArticle,
                    title: value || '',
                }),
            );
        },
        [dispatch, newArticle],
    );

    const onChangeSubTitle = useCallback(
        (value?: string) => {
            dispatch(
                articleCreateActions.setNewArticle({
                    ...newArticle,
                    subtitle: value || '',
                }),
            );
        },
        [dispatch, newArticle],
    );

    const onChangeImage = useCallback(
        (value?: string) => {
            dispatch(
                articleCreateActions.setNewArticle({
                    ...newArticle,
                    img: value || '',
                }),
            );
        },
        [dispatch, newArticle],
    );

    const onBlockChange = useCallback(
        (block: ArticleBlock) => {
            dispatch(
                articleCreateActions.setNewArticleBlock({
                    id: !newArticle?.blocks?.length
                        ? 1
                        : newArticle?.blocks?.length + 1,
                    ...block,
                }),
            );
        },
        [dispatch, newArticle?.blocks],
    );

    const onTypeSelect = useCallback(
        (type: ArticleType[]) => {
            dispatch(articleCreateActions.setNewType(type));
        },
        [dispatch],
    );

    const onArticleCreate = useCallback(() => {
        dispatch(createNewArticle());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                className={classNames(cls.articleCreateForm, {}, [className])}
                gap="16"
                max
            >
                {validateErrors?.length &&
                    validateErrors.map((err: string) => (
                        <Text
                            theme={TextTheme.ERROR}
                            text={
                                validateErrorTranslates[
                                    err as keyof typeof validateErrorTranslates
                                ]
                            }
                            key={err}
                            data-testid="ArticleCreateForm.Error"
                        />
                    ))}
                <Input
                    value={newArticle?.title}
                    onChange={onChangeTitle}
                    placeholder={t('Заголовок статьи')}
                />
                <Input
                    value={newArticle?.subtitle}
                    onChange={onChangeSubTitle}
                    placeholder={t('Подзаголовок статьи')}
                />
                <Input
                    value={newArticle?.img}
                    onChange={onChangeImage}
                    placeholder={t('Изображение для статьи')}
                />
                <ArticleCreateSelectType
                    onTypeSelect={onTypeSelect}
                    types={newArticle?.type}
                />
                {new Array(blockCount).fill(0).map(() => (
                    <ArticleCreateBlock onBlockSave={onBlockChange} />
                ))}
                <Button
                    onClick={() => {
                        dispatch(articleCreateActions.increaseBlockCount());
                    }}
                >
                    {t('Добавить блок')}
                </Button>
                <Button onClick={onArticleCreate}>{t('Создать статью')}</Button>
            </VStack>
        </DynamicModuleLoader>
    );
};
