import { StudentRegistration } from "../model/pivote/student-registration.model";
import { StudentGrade } from "../model/pivote/studentGrade.model";
import { StudentGradeWithoutRef } from "../model/without_ref/student-grade-without-ref.model";
import { StudentRegistrationWithoutRef } from "../model/without_ref/student-registration-without.ref";

export class StudentRegistrationMapper{
    public static instance: StudentRegistrationMapper = new StudentRegistrationMapper();

    toStudentRegistrationWithoutRef(studentRegistration: StudentRegistration): StudentRegistrationWithoutRef {
      return {
        studentRegistrationId: studentRegistration.studentRegistrationId,
        regDate: studentRegistration.regDate
        
      }
    }
    toStudentRegWithoutRefs(list:StudentRegistration[]){
      return  list.map(item => this.toStudentRegistrationWithoutRef(item))
   }
}