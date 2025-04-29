import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Employee {
  id?: number;
  name: string;
  email: string;
  department: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getEmployees() { return this.http.get<Employee[]>('/api/employees'); }
  addEmployee(employee: Employee) { return this.http.post('/api/employees', employee); }
  deleteEmployee(id: number) { return this.http.delete(`/api/employees/${id}`); }
}
