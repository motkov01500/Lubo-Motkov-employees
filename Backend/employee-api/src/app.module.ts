import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { EmpoloyeeController } from './employees/employee.controller';
import { EmployeeModule } from './employees/employee.module';

@Module({
  imports: [
    EmployeeModule,
    MulterModule.register({
      dest: './files',
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
