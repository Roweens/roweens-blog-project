import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/redesigned/Text';
import { Page } from '@/widgets/Page';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { UiDesignSwitcher } from '@/features/uiDesignSwitcher';

interface SettingsPageProps {
    className?: string;
}

export const SettingsPage: FC<SettingsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('settings');

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="24">
                <Text title={t('Настройки пользователя')} />
                <UiDesignSwitcher />
            </VStack>
        </Page>
    );
};

export default SettingsPage;
