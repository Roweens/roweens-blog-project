import { ValidateNewArticleError } from '../../consts/consts';
import { Article } from '@/entities/Article';

export const validateNewArticleData = (newArticle?: Article) => {
    if (!newArticle) return [ValidateNewArticleError.NO_DATA];

    const { title, subtitle, img, type, blocks } = newArticle;

    const errors: ValidateNewArticleError[] = [];

    if (!title || title.length < 10) {
        errors.push(ValidateNewArticleError.INCORRECT_TITLE);
    }

    if (!subtitle || subtitle.length < 30) {
        errors.push(ValidateNewArticleError.INCORRECT_SUBTITLE);
    }

    if (!img) {
        errors.push(ValidateNewArticleError.INCORRECT_IMAGE);
    }

    // if (!img.startsWith('https://') || !img.startsWith('http://')) {
    //     errors.push(ValidateNewArticleError.INCORRECT_IMAGE_URL);
    // }

    if (!type.length) {
        errors.push(ValidateNewArticleError.INCORRECT_TYPE);
    }

    if (blocks.length < 3) {
        errors.push(ValidateNewArticleError.INCORRECT_BLOCKS);
    }

    return errors;
};
