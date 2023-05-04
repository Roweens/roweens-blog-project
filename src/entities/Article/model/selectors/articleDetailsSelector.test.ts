import { StateSchema } from '@/app/providers/StoreProvider';
import {
    selectArticleDetailsData,
    selectArticleDetailsError,
    selectArticleDetailsIsLoading,
} from './articleDetailsSelector';

describe('articleDetailsSelector.test', () => {
    test('should return data', () => {
        const data = {
            id: '1',
            title: 'subtitle',
        };

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data,
            },
        };
        expect(selectArticleDetailsData(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(selectArticleDetailsData(state as StateSchema)).toEqual(
            undefined,
        );
    });
    test('should return isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true,
            },
        };
        expect(selectArticleDetailsIsLoading(state as StateSchema)).toEqual(
            true,
        );
    });
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'some error',
            },
        };
        expect(selectArticleDetailsError(state as StateSchema)).toEqual(
            'some error',
        );
    });
});
