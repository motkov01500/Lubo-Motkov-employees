export class Employee {
  EmpId: string;
  ProjectId: string;
  DateFrom: string;
  DateTo?: string;
  DaysWorked?: number;
}

export class EmployeeProject {
  EmpIdFirst: string;
  EmpIdSecond: string;
  ProjectId: string;
  DaysWorked?: number;
}
