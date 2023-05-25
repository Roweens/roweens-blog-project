import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { Input } from '@/shared/ui/redesigned/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/redesigned/button';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ArticleBlock, ArticleType } from '@/entities/Article';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import { Text } from '@/shared/ui/redesigned/Text';
import {
    articleCreateActions,
    articleCreateReducer,
} from '../../../model/slice/articleCreateSlice';
import { selectArticleCreateData } from '../../../model/selectors/selectArticleCreateData/selectArticleCreateData';
import { selectArticleCreateBlockCount } from '../../../model/selectors/selectArticleCreateBlockCount';
import { selectArticleCreateValidateErrors } from '../../../model/selectors/selectArticleCreateValidateErrors';
import { selectArticleCreateIsLoading } from '../../../model/selectors/selectArticleCreateIsLoading';
import { fetchEditArticleById } from '../../../model/services/fetchEditArticleById/fetchEditArticleById';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { ValidateNewArticleError } from '../../../model/consts/consts';
import { updateArticle } from '../../../model/services/updateArticle/updateArticle';
import { createNewArticle } from '../../../model/services/createNewArticle/createNewArticle';
import { ArticleCreateSelectType } from '../../ArticleCreateSelectType/ArticleCreateSelectType';
import { ArticleCreateBlock } from '../../ArticleCreateBlock/ArticleCreateBlock';

interface ArticleCreateFormProps {
    className?: string;
    articleId?: number;
}

const reducers: ReducersList = {
    articleCreateForm: articleCreateReducer,
};

export const ArticleCreateFormRedesigned: FC<ArticleCreateFormProps> = (
    props,
) => {
    const { className, articleId } = props;
    const { t } = useTranslation('article-edit');
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        if (articleId) {
            dispatch(fetchEditArticleById(articleId));
        }
    });

    const newArticle = useSelector(selectArticleCreateData);
    const blockCount = useSelector(selectArticleCreateBlockCount);
    const validateErrors = useSelector(selectArticleCreateValidateErrors);
    const isLoading = useSelector(selectArticleCreateIsLoading);

    const validateErrorTranslates = {
        [ValidateNewArticleError.SERVER_ERROR]: t('Серверная ошибка'),
        [ValidateNewArticleError.NO_DATA]: t('Данные отсутствуют'),
        [ValidateNewArticleError.INCORRECT_BLOCKS]: t(
            'Статья должна содержать хотя бы один блок',
        ),
        [ValidateNewArticleError.INCORRECT_IMAGE]: t(
            'Пожалуйста, добавьте ссылку на изображение',
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
        if (articleId) {
            dispatch(updateArticle());
        } else {
            dispatch(createNewArticle());
        }
    }, [articleId, dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <VStack
                className={classNames('', {}, [className])}
                gap="16"
                max
                data-testid="ArticleCreateForm"
            >
                {validateErrors?.length &&
                    validateErrors.map((err: string) => (
                        <Text
                            variant="error"
                            text={
                                validateErrorTranslates[
                                    err as keyof typeof validateErrorTranslates
                                ]
                            }
                            key={err}
                            data-testid="ArticleCreateForm.Error"
                        />
                    ))}

                {isLoading ? (
                    <>
                        <Skeleton width={280} height={50} border="8px" />
                        <Skeleton width={280} height={50} border="8px" />
                        <Skeleton width={280} height={50} border="8px" />
                        <Skeleton width={280} height={50} border="8px" />
                        <Skeleton width="100%" height={300} border="8px" />
                        <Skeleton width="100%" height={300} border="8px" />
                        <Skeleton width="100%" height={300} border="8px" />
                        <Skeleton width={180} height={50} border="8px" />
                    </>
                ) : (
                    <>
                        <Input
                            value={newArticle?.title}
                            onChange={onChangeTitle}
                            label={t('Заголовок статьи')}
                            data-testid="ArticleCreateForm.Title"
                        />
                        <Input
                            value={newArticle?.subtitle}
                            onChange={onChangeSubTitle}
                            label={t('Подзаголовок статьи')}
                            data-testid="ArticleCreateForm.Subtitle"
                        />
                        <Input
                            value={newArticle?.img}
                            onChange={onChangeImage}
                            label={t('Изображение для статьи')}
                            data-testid="ArticleCreateForm.Image"
                        />
                        <ArticleCreateSelectType
                            onTypeSelect={onTypeSelect}
                            types={newArticle?.type}
                        />
                        {new Array(blockCount)
                            .fill(0)
                            .map((_, i) => i)
                            .map((count) => (
                                <ArticleCreateBlock
                                    onBlockSave={onBlockChange}
                                    block={newArticle.blocks[count]}
                                    isLoading={isLoading}
                                    key={count}
                                />
                            ))}
                        <Button
                            onClick={() => {
                                dispatch(
                                    articleCreateActions.increaseBlockCount(),
                                );
                            }}
                            data-testid="ArticleCreateForm.AddBlockButton"
                        >
                            {t('Добавить блок')}
                        </Button>
                        <Button
                            onClick={onArticleCreate}
                            data-testid="ArticleCreateForm.SaveButton"
                        >
                            {t('Создать статью')}
                        </Button>
                    </>
                )}
            </VStack>
        </DynamicModuleLoader>
    );
};
