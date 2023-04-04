import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
   className?: string;
   comments?:Comment[];
   isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.commentList, {}, [className])}>
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
                <CommentCard
                    className={cls.comment}
                    isLoading
                />
            </div>
        );
    }

    if (!comments) {
        return null;
    }

    return (
        <div className={classNames(cls.commentList, {}, [className])}>
            {comments?.length ? comments.map((comment) => (
                <CommentCard
                    key={comment.id}
                    className={cls.comment}
                    isLoading={isLoading}
                    comment={comment}
                />
            )) : (<Text text={t('Комментарии отсутствуют')} />)}
        </div>
    );
});
