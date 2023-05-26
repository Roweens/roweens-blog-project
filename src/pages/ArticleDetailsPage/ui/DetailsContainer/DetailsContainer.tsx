import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import { Card } from '@/shared/ui/redesigned/Card';

interface DetailsContainerProps {
    className?: string;
}

export const DetailsContainer: FC<DetailsContainerProps> = (props) => {
    const { className } = props;

    const { id } = useParams<{ id: string }>();

    return (
        <Card
            className={classNames('', {}, [className])}
            padding="24"
            border="intermediate"
            fullWidth
            fullHeight
        >
            <ArticleDetails id={id} />
        </Card>
    );
};
