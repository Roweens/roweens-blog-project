import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Code } from '@/shared/ui/redesigned/Code';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(
    (props: ArticleCodeBlockComponentProps) => {
        const { className, block } = props;
        const { t } = useTranslation();

        return <Code text={block.code} />;
    },
);
