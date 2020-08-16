import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

export interface DialogData {
  item: string;
  description: string;
}

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.sass']
})
export class TodoAddComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  item: string;
  desc: string;

  ngOnInit() {
  }

  showAddDialog(): void {
    console.log('AddItem button clicked');
    const dialogRef = this.dialog.open(AddDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed wkth result: ${result}`);
    });

  }
}
