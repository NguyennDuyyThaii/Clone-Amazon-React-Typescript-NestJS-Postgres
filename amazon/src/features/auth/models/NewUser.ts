import { RegisterFormField } from "./RegisterFormField.interfact";

export type Newuser = Omit<RegisterFormField, 'confirmPassword'>