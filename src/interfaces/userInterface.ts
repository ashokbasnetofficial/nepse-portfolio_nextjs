export interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
}
export default interface UserLogin {
  email: string;
  password: string;
}
