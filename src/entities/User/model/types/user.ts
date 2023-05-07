import { UserRole } from '../consts/userConsts';

export interface User {
    id: number;
    username: string;
    avatar?: string;
    roles?: UserRole[];
}

export interface UserSchema {
    authData?: User;
    _mounted: boolean;
}
