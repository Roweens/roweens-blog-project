import { StateSchema } from '@/app/providers/StoreProvider';

export const selectAddCommentFormText = (state: StateSchema) =>
    state.addCommentForm?.text ?? '';
export const selectAddCommentFormError = (state: StateSchema) =>
    state.addCommentForm?.error;
