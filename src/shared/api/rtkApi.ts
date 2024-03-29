import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import 'isomorphic-fetch';
// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: __API__,
        prepareHeaders: (headers) => {
            const token = localStorage.getItem(AUTH_LOCALSTORAGE_KEY) || '';

            if (token) {
                headers.set('authorization', token);
            }

            return headers;
        },
    }),
    endpoints: (builder) => ({}),
});
