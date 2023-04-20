import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/notifications';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotificationsList: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
});

export const useNotifications = notificationApi.useGetNotificationsListQuery;
