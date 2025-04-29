import { Component, OnInit } from '@angular/core';
import { EmployeeService, Employee } from '../employee.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-view-all',
  imports: [NgFor, NgIf],
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {
  employees: Employee[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load employees';
        this.isLoading = false;
      }
    });
  }
}
