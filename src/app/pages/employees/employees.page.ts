import { Component } from '@angular/core';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  styleUrls: ['./employees.page.scss']
})
export class EmployeesPage {
  employees: Employee[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@example.com' },
    { id: 3, firstName: 'Bob', lastName: 'Smith', email: 'bobsmith@example.com' }
  ];
  newEmployee: Employee = new Employee();
  selectedEmployee!: Employee;
  isEditing: boolean = false;
  editingEmployee: Employee = new Employee();
  isUpdating: boolean = false;

  addEmployee() {
    if (!this.isEditing) {
      this.newEmployee.id = this.getNextId();
      this.employees.push(this.newEmployee);
      this.newEmployee = new Employee();
    } else {
      this.updateEmployee();
    }
  }

  getNextId(): number {
    let maxId = 0;
    for (let employee of this.employees) {
      if (employee.id > maxId) {
        maxId = employee.id;
      }
    }
    return maxId + 1;
  }

  updateEmployee() {
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === this.editingEmployee.id) {
        this.employees[i] = this.editingEmployee;
        break;
      }
    }
    this.editingEmployee = new Employee();
    this.isEditing = false;
  }

  deleteEmployee(employee: Employee) {
    const index = this.employees.indexOf(employee);
    this.employees.splice(index, 1);
  }

  clearForm() {
    this.newEmployee = new Employee();
    this.isEditing = false;
    this.editingEmployee = new Employee();
  }

  cancelEdit() {
    this.editingEmployee = new Employee();
    this.isEditing = false;
  }

  editEmployee(employee: Employee) {
    this.editingEmployee = Object.assign({}, employee);
    this.isEditing = true;
  }
}
