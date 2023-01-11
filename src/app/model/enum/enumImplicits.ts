import { Gender } from "./gender";
import { Role } from "./role";

export function toGender(gender:string) : Gender{
    return gender === 'M'? Gender.M : Gender.F
  }

export function toRole(role:string):Role{
    switch (role.toLowerCase()) {
        case 'admin':
            return Role.ADMIN
        
        case 'organizer':
            return Role.ORGANIZER
        
        case 'teacher':
            return Role.TEACHER
        case 'student':
            return Role.STUDENT
        case 'employee':
            return Role.EMPLOYEE
        default:
            throw new Error("Role not found");
            

    }
}