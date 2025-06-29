export interface IUserInput{
  body: any;
  name: string;
  email: string;
  password: string;
}

export interface IUserResponse{
  id: number;
  email: string;
  name: string;
  createdAt: Date;
}
