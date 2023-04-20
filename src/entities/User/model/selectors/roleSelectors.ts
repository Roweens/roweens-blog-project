import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/userConsts';

export const selectUserRoles = (state: StateSchema) => state.user.authData?.roles;

export const isUserAdmin = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(selectUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
