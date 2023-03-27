import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Employee } from 'src/app/models/employee';
import { EmployeesPage } from 'src/app/pages/employees/employees.page';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss'],
})
export class EditModalComponent  implements OnInit {

  employees: Employee[] = [];
  newEmployee: Employee = new Employee();
  selectedEmployee: Employee = new Employee();
  isEditMode: boolean = false;
  employee!: Employee;

  constructor(private modalController: ModalController, private navParams: NavParams) {
    this.selectedEmployee = { ...this.employee };
   }

  ngOnInit() {
    this.employee = this.navParams.get('employee');

    
  }

  async updateEmployee() {
    const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
    this.employees[index] = this.selectedEmployee;
    localStorage.setItem('employees', JSON.stringify(this.employees));
    this.selectedEmployee = new Employee();
    this.isEditMode = false;

    // Fermer la modal
    try {
      await this.modalController.dismiss();
    } catch (error) {
      console.log("Erreur lors de la fermeture de la modal :", error);
    }
  }
  

  
  


  closeModal() {
    // Fermer la modal sans effectuer de mise à jour
    this.modalController.dismiss();
  }
}
