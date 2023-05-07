import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateBlock.module.scss';
import { ListBox, ListBoxItem } from '@/shared/ui/Popups';
import { ArticleBlock, ArticleBlockType } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { ArticleCreateTextBlockForm } from '@/features/articleCreateTextBlock';
import { ArticleCreateCodeBlockForm } from '@/features/articleCreateCodeBlock';
import { ArticleCreateImageBlockForm } from '@/features/articleCreateImageBlock';

interface ArticleCreateBlockProps {
    className?: string;
    onBlockSave?: (block: ArticleBlock) => void;
}

export const ArticleCreateBlock: FC<ArticleCreateBlockProps> = (props) => {
    const { className, onBlockSave } = props;
    const { t } = useTranslation();

    const [selectedType, setSelectedType] = useState<ArticleBlockType>(
        ArticleBlockType.TEXT,
    );
    const [isFilled, setIsFilled] = useState(false);

    const blockTypeOptions = useMemo<ListBoxItem<ArticleBlockType>[]>(
        () => [
            { value: ArticleBlockType.CODE, content: t('Код') },
            { value: ArticleBlockType.IMAGE, content: t('Картинка') },
            { value: ArticleBlockType.TEXT, content: t('Текст') },
        ],
        [t],
    );

    const onBlockTypeChange = useCallback((type: ArticleBlockType) => {
        setSelectedType(type);
    }, []);

    let content;

    if (selectedType === ArticleBlockType.CODE) {
        content = (
            <ArticleCreateCodeBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
            />
        );
    }
    if (selectedType === ArticleBlockType.TEXT) {
        content = (
            <ArticleCreateTextBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
            />
        );
    }
    if (selectedType === ArticleBlockType.IMAGE) {
        content = (
            <ArticleCreateImageBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
            />
        );
    }

    return (
        <VStack
            className={classNames(cls.articleCreateBlock, {}, [className])}
            gap="8"
            max
        >
            <ListBox<ArticleBlockType>
                items={blockTypeOptions}
                value={selectedType}
                onChange={onBlockTypeChange}
                readonly={isFilled}
            />
            {content}
        </VStack>
    );
};
