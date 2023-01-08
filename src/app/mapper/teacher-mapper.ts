import {TeacherInfoWithoutRef} from "../model/without_ref/teacher-info-without-ref.model";
import {TeacherInfo} from "../model/teacher-info.model";

export class TeacherMapper {
  public static instance: TeacherMapper = new TeacherMapper();

  toTeacherWithoutRef(teacher: TeacherInfo): TeacherInfoWithoutRef {
    return {
      biography: teacher.biography,
      profilePicture: teacher.profilePicture,
      role: teacher.role,
      title: teacher.title,
      id: teacher.id,
      firstName: teacher.firstName,
      lastName: teacher.lastName,
      gender: teacher.gender,
      email: teacher.email,
      phoneNumber: teacher.phoneNumber,
      credentials: teacher.credentials,
      hireDate: teacher.hireDate,
      salary: teacher.salary
    }
  }
}
