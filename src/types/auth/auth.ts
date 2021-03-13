export interface LoginResponse {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data?: DataJson;
}

export interface DataJson {
  token: string;
  id: number;
  email: string;
  nicename: string;
  firstName: string;
  lastName: string;
  displayName: string;
  phone: string;
}
