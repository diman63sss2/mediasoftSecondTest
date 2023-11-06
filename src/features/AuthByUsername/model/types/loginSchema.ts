export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export const initialStateLogin: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};
