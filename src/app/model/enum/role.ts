export enum Role {
  NONE = 'NONE',
  STUDENT = 'STUDENT',
  ADMIN = 'ADMIN',
  TEACHER = 'TEACHER',
  ORGANIZER = 'ORGANIZER'
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
