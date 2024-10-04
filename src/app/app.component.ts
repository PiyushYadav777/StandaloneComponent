import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Table1Component } from './table1/table1.component';
import { StepperFormComponent } from './stepper-form/stepper-form.component';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Table1Component, StepperFormComponent, CommonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'StandaloneProject';

  tableData: any[] = [];

  handleFormData(data: any) {
    this.tableData = [...this.tableData, data]; 
  }
  }
