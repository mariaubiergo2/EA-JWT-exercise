import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    surname: string;
    role:"basic" | "admin";
}