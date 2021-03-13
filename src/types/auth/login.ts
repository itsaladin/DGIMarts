export interface LoginWPhoneResult {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data: Data;
}

export interface Data {
  token: string;
  id: number;
  email: string;
  nicename: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phone: string;
}
