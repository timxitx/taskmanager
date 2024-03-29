import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {

  title="";

  constructor(@Inject(MAT_DIALOG_DATA) private data:any,
  private dialogRef: MatDialogRef<NewTaskListComponent>) { }

  ngOnInit(): void {
    this.title = this.data.title;
  }

  onClick() {

  }

}
