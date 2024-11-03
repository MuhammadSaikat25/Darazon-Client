export type TLoginInputs = {
  email: string;
  password: string;
};

export interface TUser {
  _id: string;
  name: string;
  role: "admin" | "seller" | "user";
  email: string;
  password?: string;
  avatar?: string;
}
