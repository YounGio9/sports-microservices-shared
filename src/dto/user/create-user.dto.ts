export class CreateUserDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  clubId: string;
  role: "ADMIN" | "COACH" | "USER";
}
