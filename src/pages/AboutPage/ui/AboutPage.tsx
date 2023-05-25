import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { GITHUB_REPO_LINK } from '@/shared/const/links';

const AboutPage: FC = () => {
    const { t } = useTranslation('about');

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Page data-testid="AboutPage">
                    <VStack gap="24">
                        <Text title={t('О сайте')} bold />
                        <Text
                            text={t(
                                'Данный проект был разработан для портфолио Roweens на github. Первостепенной целями при разработке являлись: ' +
                                    'ознакомление с новыми подходами и методиками для написания кода, изучение библиотек и архитектуры FSD' +
                                    ', различных видов тестирования',
                            )}
                        />
                        <a href={GITHUB_REPO_LINK}>
                            <Text
                                variant="accent"
                                text={t(
                                    'Ознакомиться с подробной документацией и исходным кодом',
                                )}
                            />
                        </a>
                    </VStack>
                </Page>
            }
            off={
                <Page data-testid="AboutPage">
                    <TextDeprecated title={t('О сайте')} />
                </Page>
            }
        />
    );
};

export default AboutPage;
