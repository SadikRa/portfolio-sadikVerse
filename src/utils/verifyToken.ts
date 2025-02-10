/* eslint-disable @typescript-eslint/no-explicit-any */
import { jwtDecode } from "jwt-decode";

interface IDecodedToken {
  role: string;
  [key: string]: any;
}

export const verifyToken = (token: string): IDecodedToken => {
  return jwtDecode(token) as IDecodedToken;
};
