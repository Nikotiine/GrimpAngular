export interface IUser {
  idUser?: number;
  nickName: string;
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  birthday: string;
  sex: string;
  admin?: boolean;
}

export class User implements IUser {
  admin: boolean = false;
  birthday: string = '';
  email: string = '';
  firstName: string = '';
  idUser: number = 0;
  lastName: string = '';
  nickName: string = '';
  password: string = '';
  sex: string = '';
}

export class RegisterCredential implements IUser {
  nickName: string = '';
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  password: string = '';
  birthday: string = '';
  sex: string = '';

  public constructor(
    nickName: string,
    lastName: string,
    firstName: string,
    email: string,
    password: string,
    birthday: string,
    sex: string
  ) {
    this.nickName = nickName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.sex = sex;
  }
}
