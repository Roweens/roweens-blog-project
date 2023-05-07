import { Article } from '@/entities/Article';
import { ValidateNewArticleError } from '../consts/consts';

export interface ArticleCreateSchema {
    isLoading: boolean;
    error?: string;
    newArticle: Article;
    blockCount: number;
    validateError?: ValidateNewArticleError[];
}
