import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-table1',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule],
  templateUrl: './table1.component.html',
  styleUrl: './table1.component.scss'
})
export class Table1Component {
  @Input() data: any[] = [];

  displayedColumns: string[] = ['name', 'email', 'position', 'password', 'gender'];
}
