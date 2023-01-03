export enum Role {
  STUDENT,
  ADMIN,
  TEACHER,
  ORGANIZER
}


export function getEnum(name: string): Role {
  switch (name.toLowerCase()) {
    case "a":
    case "admin":
      return Role.ADMIN;
    case "o":
    case "organizer":
      return Role.ORGANIZER;
    case "t":
    case "teacher":
      return Role.TEACHER;
    default:
      throw new Error(`couldn't find correct enum name: ${name}`);
  }
}
