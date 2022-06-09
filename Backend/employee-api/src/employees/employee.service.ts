import { Injectable } from '@nestjs/common';
import { CsvParser } from 'nest-csv-parser';
import { Employee } from './models';
import * as fs from 'fs';
import { async } from 'rxjs';
import * as csv from 'csvtojson';

@Injectable()
export class EmployeeService {
  constructor(private readonly csvParser: CsvParser) {}
  public employeesList: Employee[];

  test(): string {
    return 'test';
  }

  async saveCsvFileToLocal(): Promise<void> {
    const stream = fs.createReadStream('./files/data.csv');
    const result = await this.csvParser.parse(stream, Employee);

    let isFirst = true;
    const employees: Employee[] = [];

    // const employee = this.
    result.list.map((e) => {
      const entity = JSON.stringify(e)
        .replace('{', '')
        .replace('}', '')
        .replace(/"/g, '');
      if (isFirst) {
        const first = entity.split(':')[0];
        const prop = first.split(',');
        employees.push({
          EmpId: prop[0],
          ProjectId: prop[1],
          DateFrom: prop[2],
          DateTo: prop[3] === 'NULL' ? null : prop[3],
        });
        isFirst = false;
      }
      const first = entity.split(':')[1];
      const prop = first.split(',');
      employees.push({
        EmpId: prop[0],
        ProjectId: prop[1],
        DateFrom: prop[2],
        DateTo: prop[3] === 'NULL' ? null : prop[3],
      });
    });
    this.employeesList = employees;
  }

  getAllEmployeesAsc(): Employee[] {
    return this.employeesList
      ?.map((emp) => {
        const date1 = new Date(emp.DateFrom);
        const date2 = new Date(emp.DateTo || Date.now());

        const Difference_In_Time = date2.getTime() - date1.getTime();
        const DaysWorked = +(Difference_In_Time / (1000 * 3600 * 24)).toFixed(
          0,
        );
        return { ...emp, DaysWorked };
      })
      .sort((a, b) => (a.DaysWorked > b.DaysWorked ? 1 : -1));
  }

  

  getAllEmployeesDesc(): Employee[] {
    return this.employeesList
      ?.map((emp) => {
        const date1 = new Date(emp.DateFrom);
        const date2 = new Date(emp.DateTo || Date.now());

        const Difference_In_Time = date2.getTime() - date1.getTime();
        const DaysWorked = +(Difference_In_Time / (1000 * 3600 * 24)).toFixed(
          0,
        );
        return { ...emp, DaysWorked };
      })
      .sort((a, b) => (a.DaysWorked < b.DaysWorked ? 1 : -1));
  }

  getAllEmployees(): Employee[] {
    return this.employeesList?.map((emp) => {
      const date1 = new Date(emp.DateFrom);
      const date2 = new Date(emp.DateTo || Date.now());

      const Difference_In_Time = date2.getTime() - date1.getTime();
      const DaysWorked = +(Difference_In_Time / (1000 * 3600 * 24)).toFixed(0);
      return { ...emp, DaysWorked };
    });
  }
}
