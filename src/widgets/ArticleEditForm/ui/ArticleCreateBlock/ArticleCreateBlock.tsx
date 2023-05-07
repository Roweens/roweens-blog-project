import { FC, useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleCreateBlock.module.scss';
import { ListBox, ListBoxItem } from '@/shared/ui/Popups';
import {
    ArticleBlock,
    ArticleBlockType,
    ArticleCodeBlock,
    ArticleImageBlock,
    ArticleTextBlock,
} from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import { ArticleEditTextBlockForm } from '@/features/articleEditTextBlock';
import { ArticleEditCodeBlockForm } from '@/features/articleEditCodeBlock';
import { ArticleEditImageBlockForm } from '@/features/articleEditImageBlock';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleCreateBlockProps {
    className?: string;
    onBlockSave?: (block: ArticleBlock) => void;
    block?: ArticleBlock;
    isLoading?: boolean;
}

export const ArticleCreateBlock: FC<ArticleCreateBlockProps> = (props) => {
    const { className, onBlockSave, block, isLoading } = props;
    const { t } = useTranslation();

    const [selectedType, setSelectedType] = useState<ArticleBlockType>(
        block?.type || ArticleBlockType.TEXT,
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
            <ArticleEditCodeBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
                codeBlock={block as ArticleCodeBlock}
            />
        );
    }
    if (selectedType === ArticleBlockType.TEXT) {
        content = (
            <ArticleEditTextBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
                textBlock={block as ArticleTextBlock}
            />
        );
    }
    if (selectedType === ArticleBlockType.IMAGE) {
        content = (
            <ArticleEditImageBlockForm
                onSave={onBlockSave}
                readonly={isFilled}
                setReadOnly={setIsFilled}
                imageBlock={block as ArticleImageBlock}
            />
        );
    }

    if (isLoading) {
        return (
            <>
                <Skeleton width={180} height={50} />
                <Skeleton width={280} height={50} />
                <Skeleton width={'100%'} height={260} />
                <Skeleton width={180} height={50} />
            </>
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
