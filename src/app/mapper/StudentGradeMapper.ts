import { StudentGrade } from "../model/pivote/studentGrade.model";
import { StudentGradeWithoutRef } from "../model/without_ref/student-grade-without-ref.model";

export class StudentGradeMapper{
    public static instance: StudentGradeMapper = new StudentGradeMapper();

    toStudentGradeWithoutRef(studentGrade: StudentGrade): StudentGradeWithoutRef {
      return {
        studentGradeId : studentGrade.studentGradeId,
        grade: studentGrade.grade
        
      }
    }
    toStudentGradesWithoutRef(list:StudentGrade[]){
      return  list.map(item => this.toStudentGradeWithoutRef(item))
   }
}