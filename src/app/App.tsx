import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar, MobileNavbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { selectUserMounted, initAuthData } from '@/entities/User';
import { AppRouter } from './providers/router';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppToolbar } from './lib/useAppToolbar';
import { withTheme } from './providers/themeProvider';
import { MobileLayout } from '@/shared/layouts/MobileLayout/MobileLayout';

export const App = memo(() => {
    const dispatch = useAppDispatch();
    const mounted = useSelector(selectUserMounted);

    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!mounted) {
            dispatch(initAuthData());
        }
    }, [dispatch, mounted]);

    if (!mounted) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div className={classNames('app_redesigned')}>
                        <AppLoaderLayout />
                    </div>
                }
                off={
                    <div className={classNames('app')}>
                        <PageLoader />
                    </div>
                }
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            off={
                <div className={classNames('app')}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
            on={
                <div className={classNames('app_redesigned')}>
                    <Suspense fallback="">
                        <MobileView>
                            <MobileLayout
                                content={<AppRouter />}
                                header={<MobileNavbar />}
                            />
                        </MobileView>
                        <BrowserView>
                            <MainLayout
                                header={<Navbar />}
                                content={<AppRouter />}
                                sidebar={<Sidebar />}
                                toolbar={toolbar}
                            />
                        </BrowserView>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
