export interface FireAppUser{
  Email: string;
  Password: string;
  PasswordConfirm?: string;
}

//test User
export class TestUser{

  public static readonly John: FireAppUser = {
    Email: "john.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

  public static readonly Emma: FireAppUser = {
    Email: "emma.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

  public static readonly Jennifer: FireAppUser = {
    Email: "jennifer.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

  public static readonly Koray: FireAppUser = {
    Email: "koray.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

  public static readonly Justin: FireAppUser = {
    Email: "justin.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

  public static readonly Michael: FireAppUser = {
    Email: "michael.doe@yahoo.com",
    Password: "123456",
    PasswordConfirm: "123456",
  }

}
