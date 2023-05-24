import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
    Text as TextDeprecated,
    TextAlign,
    TextSize,
} from '@/shared/ui/deprecated/Text';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Avatar as AvatarDeprecated } from '@/shared/ui/deprecated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import {
    selectArticleDetailsData,
    selectArticleDetailsError,
    selectArticleDetailsIsLoading,
} from '../../model/selectors/articleDetailsSelector';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { renderArticleDetailsBlock } from './renderArticleDetailsBlock';
import { ToggleFeatures, toggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';

interface ArticleDetailsProps {
    className?: string;
    id?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetailsSkeleton = () => {
    const Skeleton = toggleFeatures({
        name: 'isAppRedesigned',
        on: () => SkeletonRedesigned,
        off: () => SkeletonDeprecated,
    });

    return (
        <VStack gap="16" max>
            <Skeleton
                width={200}
                height={200}
                border="50%"
                className={cls.avatar}
            />
            <Skeleton width={300} height={32} className={cls.title} />
            <Skeleton width={600} height={24} className={cls.skeleton} />
            <Skeleton width="100%" height={200} className={cls.skeleton} />
            <Skeleton width="100%" height={200} className={cls.skeleton} />
        </VStack>
    );
};

const ArticleDetailsDeprecated = () => {
    const article = useSelector(selectArticleDetailsData);

    return (
        <>
            <HStack justify="center" max>
                <AvatarDeprecated
                    size={200}
                    src={article?.img}
                    className={cls.avatar}
                />
            </HStack>
            <VStack gap="4" max data-testid="ArticleDetails.Info">
                <TextDeprecated
                    title={article?.title}
                    text={article?.subtitle}
                    className={cls.title}
                    size={TextSize.L}
                />
                <HStack gap="8">
                    <IconDeprecated Svg={EyeIcon} />
                    <TextDeprecated text={String(article?.views)} />
                </HStack>
                <HStack gap="8">
                    <IconDeprecated Svg={CalendarIcon} />
                    <TextDeprecated text={article?.createdAt} />
                </HStack>
            </VStack>
            {article?.blocks.map(renderArticleDetailsBlock)}
        </>
    );
};

const ArticleDetailsRedesigned = () => {
    const article = useSelector(selectArticleDetailsData);

    return (
        <>
            <Text title={article?.title} size="l" bold />
            <Text text={article?.subtitle} />
            <AppImage
                fallback={
                    <SkeletonRedesigned
                        width="100%"
                        height={420}
                        border="16px"
                    />
                }
                src={article?.img}
                className={cls.img}
            />
            {article?.blocks.map(renderArticleDetailsBlock)}
        </>
    );
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const isLoading = useSelector(selectArticleDetailsIsLoading);
    const error = useSelector(selectArticleDetailsError);
    const article = useSelector(selectArticleDetailsData);

    useInitialEffect(() => {
        dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
        content = <ArticleDetailsSkeleton />;
    } else if (error) {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <Text
                        title={t('Произошла ошибка при загрузке статьи')}
                        align={TextAlign.CENTER}
                    />
                }
                off={
                    <TextDeprecated
                        title={t('Произошла ошибка при загрузке статьи')}
                        align={TextAlign.CENTER}
                    />
                }
            />
        );
    } else {
        content = (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<ArticleDetailsRedesigned />}
                off={<ArticleDetailsDeprecated />}
            />
        );
    }

    return (
        <DynamicModuleLoader removeAfterUnmount reducers={reducers}>
            <VStack
                className={classNames(cls.articleDetails, {}, [className])}
                gap="16"
            >
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});
