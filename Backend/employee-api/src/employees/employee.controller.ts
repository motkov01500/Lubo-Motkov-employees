import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  EMPLOYEE_CONTROLLER_NAME,
  EMPLOYEE_GET_ALL_ASC_METHOD,
  EMPLOYEE_GET_ALL_DESC_METHOD,
  EMPLOYEE_GET_ALL_METHOD,
  EMPLOYEE_TEST_METHOD,
  EMPLOYEE_UPLOAD_FILE_METHOD,
} from './constants';
import { EmployeeService } from './employee.service';
import { Employee } from './models';
import { editFileName, imageFileFilter } from './helpers';
import { diskStorage } from 'multer';

@Controller(EMPLOYEE_CONTROLLER_NAME)
export class EmpoloyeeController {
  constructor(private employeeService: EmployeeService) {}

  @Get(EMPLOYEE_TEST_METHOD)
  test(): string {
    return this.employeeService.test();
  }

  @Post(EMPLOYEE_UPLOAD_FILE_METHOD)
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async upload(@UploadedFile() file) {
    await this.employeeService.saveCsvFileToLocal();
    const response = {
      message: 'File uploaded successfully!',
      data: {
        originalname: file.originalname,
        filename: file.filename,
      },
    };
    return response;
  }

  @Get(EMPLOYEE_GET_ALL_METHOD)
  getAllEmployees() {
    return this.employeeService.getAllEmployees();
  }

  @Get(EMPLOYEE_GET_ALL_DESC_METHOD)
  getAllEmployeesDesc() {
    return this.employeeService.getAllEmployeesDesc();
  }

  @Get(EMPLOYEE_GET_ALL_ASC_METHOD)
  getAllEmployeesAsc() {
    return this.employeeService.getAllEmployeesAsc();
  }
}
