import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/features';
import { MainPageItems } from '../MainPageItems/MainPageItems';
import { VStack } from '@/shared/ui/redesigned/Stack';

const MainPage: FC = () => {
    const { t } = useTranslation('main');

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Page data-testid="MainPage">
                    <VStack gap="32">
                        <Text title={t('Главная страница')} bold />
                        <MainPageItems />
                    </VStack>
                </Page>
            }
            off={
                <Page data-testid="MainPage">
                    <TextDeprecated title={t('Главная страница')} />
                </Page>
            }
        />
    );
};

export default MainPage;
