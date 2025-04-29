import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-new-form',
  imports: [NgFor],
  templateUrl: './add-new-form.component.html',
  styleUrl: './add-new-form.component.css'
})
export class AddNewFormComponent implements OnInit{
  employees: Employee[] = [];
  newEmployee: Employee = {
    name: '',
    email: '',
    department: '',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  onSubmit() {
    this.newEmployee.createdAt = new Date().toISOString();
    this.newEmployee.updatedAt = new Date().toISOString();
    this.employeeService.addEmployee(this.newEmployee).subscribe(() => {
      this.loadEmployees();
      this.newEmployee = {
        name: '',
        email: '',
        department: '',
        createdAt: '',
        updatedAt: ''
      };
    });
  }

  deleteEmployee(id: number) {
    if (confirm("Are you sure you want to delete?")) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.loadEmployees();
      });
    }
  }
}
