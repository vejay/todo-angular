import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.sass']
})
export class AddDialogComponent implements OnInit {
  addItemForm = new FormGroup({
      item: new FormControl('', [Validators.required]),
      desc: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient,
              public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
  }

  saveItem() {
    console.log('saveItem');
    const payload = {
        item: 'item',
        desc: 'desc'
    };

    this.http.post('todoItem', payload).pipe(
      take(1))
      .subscribe(result => {
        console.log('result ' + result);
      });

    this.dialogRef.close('Dialog was saved');
  }

  cancelDialog() {
    console.log('cancelDialog');
    this.dialogRef.close();
  }

}
