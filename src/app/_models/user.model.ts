export interface IUser {
  idUser?: number;
  nickName: string;
  lastName: string;
  firstName: string;
  email: string;
  password?: string;
  birthday: string;
  sex: string;
  admin?: boolean;
}

export class User implements IUser {
  idUser: number = 0;
  nickName: string = '';
  lastName: string = '';
  firstName: string = '';
  email: string = '';
  password: string = '';
  birthday: string = '';
  sex: string = '';
  admin: boolean = false;

  constructor(
    idUser: number,
    nickName: string,
    lastName: string,
    firstName: string,
    email: string,
    password: string,
    birthday: string,
    sex: string,
    admin: boolean
  ) {
    this.idUser = idUser;
    this.nickName = nickName;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.password = password;
    this.birthday = birthday;
    this.sex = sex;
    this.admin = admin;
  }
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
export class EditCredential implements IUser {
  idUser: number = 0;
  nickName: string;
  lastName: string;
  firstName: string;
  email: string;
  birthday: string;
  sex: string;

  constructor(
    idUser: number,
    nickName: string,
    lastName: string,
    firstName: string,
    email: string,
    birthday: string,
    sex: string
  ) {
    this.idUser = idUser;
    this.nickName = nickName;
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.birthday = birthday;
    this.sex = sex;
  }
}
