export interface LoginWithPhone {
  code: number;
  message: string;
  data: Data;
}

export interface Data {
  otpDebug: string;
  phone: string;
  sent: string;
}
