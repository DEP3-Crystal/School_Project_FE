import {Department} from "../model/department.model";
import {DepartmentWithoutRef} from "../model/without_ref/department-without-ref.model";

export class DepartmentMapper {
  public static instance: DepartmentMapper = new DepartmentMapper();

  toDepartmentWithoutRef(department: Department): DepartmentWithoutRef {
    return {
      departmentId: department.departmentId,
      name: department.name
    }
  }
}
