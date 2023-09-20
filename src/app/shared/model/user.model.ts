export interface UserBaseModel{
    email: string;
};

export interface UserAuthModel extends UserModel{
    password: string;
};

export interface UserLogInModel extends UserBaseModel{
    password: string;
};
export interface UserRegisterModel extends UserBaseModel{
    username: string;
    password: string;
}
export interface UserModel extends UserBaseModel{
    username: string;
    password: string;
}