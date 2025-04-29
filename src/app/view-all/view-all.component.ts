import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-all',
  imports: [NgFor],
  templateUrl: './view-all.component.html',
  styleUrl: './view-all.component.css'
})
export class ViewAllComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }

  deleteEmployee(id: number): void {
    if (confirm("Are you sure?")) {
      this.employeeService.deleteEmployee(id).subscribe(() => {
        this.employees = this.employees.filter(e => e.id !== id);
      });
    }
  }
}
