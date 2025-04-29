import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Employee {
  id?: any;
  name: any;
  email: any;
  department: any;
  createdAt: any;
  updatedAt: any;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<Employee[]>('/api/all-employees');
  }
  addEmployee(employee: Employee) {
    return this.http.post('/api/create-employee', employee);
  }
  deleteEmployee(id: number) {
    return this.http.delete(`delete-employee-by-id/${id}`);
  }
}
