export interface IUserInfo {
    email: string;
    token: string;
    fullName: string;
    avatarUrl: string;
}
export interface IAppState {
    authenticated: boolean;
    userInfo: IUserInfo;
}