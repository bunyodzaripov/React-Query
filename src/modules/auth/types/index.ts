export interface SignInType {
   phone_number: string;
   password: string;
}

export interface SignUpType extends SignInType {
   first_name: string;
   last_name: string;
   email: string;
}
