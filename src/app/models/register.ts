export class Register {
    constructor(
      public fullName: string,
      public phone: string,  
      public email: string,
      public password: string,
      public retypePassword: string,
      public rememberMe: boolean
    ) {}
  }