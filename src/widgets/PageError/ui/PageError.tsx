import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button as ButtonDeprecated } from '@/shared/ui/deprecated/button';
import { Button } from '@/shared/ui/redesigned/button';
import cls from './PageError.module.scss';
import { Text } from '@/shared/ui/redesigned/Text';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { ToggleFeatures } from '@/shared/features';

export const PageError = memo(() => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div className={classNames(cls.pageError)}>
                    <Text
                        text={t('Произошла непредвиденная ошибка')}
                        variant="accent"
                    />
                    <Button
                        onClick={reloadPage}
                        variant="filled"
                        color="normal"
                    >
                        {t('Обновить страницу')}
                    </Button>
                </div>
            }
            off={
                <div className={classNames(cls.pageError)}>
                    <TextDeprecated
                        text={t('Произошла непредвиденная ошибка')}
                    />
                    <ButtonDeprecated onClick={reloadPage}>
                        {t('Обновить страницу')}
                    </ButtonDeprecated>
                </div>
            }
        />
    );
});
