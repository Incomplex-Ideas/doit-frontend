export type UserLoginData = {
  email: string;
  password: string;
}

export type UserSignupData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export type AuthResponseData = {
  token: string;
  result: {
    _id: string;
    name: string;
    email: string;
  }
}