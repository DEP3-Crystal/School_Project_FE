import { Gender } from "./gender";
import { Role } from "./role";

export function toGender(gender:string) : Gender{
    return gender === 'M'? Gender.M : Gender.F
  }

export function toRole(role:string):Role{
    switch (role.toUpperCase()) {
        case 'ADMIN':
            return Role.ADMIN
        
        case 'ORGANIZER':
            return Role.ORGANIZER
        
        case 'TEACHER':
            return Role.TEACHER
        case 'STUDENT':
            return Role.STUDENT
        default:
            return Role.NONE

    }
}