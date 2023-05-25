import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MainPageItemType } from '../types/mainPageItem';
import { selectUserAuthData } from '@/entities/User';
import WriteIcon from '@/shared/assets/icons/write.svg';
import ArticleIcon from '@/shared/assets/icons/article.svg';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import {
    getRouteArticleCreate,
    getRouteProfile,
    getRouteArticles,
} from '@/shared/const/router';

export const useMainPageItems = () => {
    const [isAuthOpen, setIsAuthOpen] = useState(false);
    const authData = useSelector(selectUserAuthData);
    const navigate = useNavigate();
    const { t } = useTranslation('main');

    const onArticleCreate = useCallback(() => {
        navigate(getRouteArticleCreate());
    }, [navigate]);

    const onProfileEdit = useCallback(() => {
        if (authData) {
            navigate(getRouteProfile(authData?.id));
        }
    }, [authData, navigate]);

    const onBrowseArticles = useCallback(() => {
        navigate(getRouteArticles());
    }, [navigate]);

    const mainPageItemsList: MainPageItemType[] = [
        {
            Icon: WriteIcon,
            text: t('Создать статью'),
            onClick: onArticleCreate,
            authOnly: true,
        },
        {
            Icon: ArticleIcon,
            text: t('Читать статьи'),
            onClick: onBrowseArticles,
            authOnly: true,
        },
        {
            Icon: ProfileIcon,
            text: t('Редактировать профиль'),
            onClick: onProfileEdit,
            authOnly: true,
        },
    ];

    return { mainPageItemsList, isAuthOpen, setIsAuthOpen };
};
