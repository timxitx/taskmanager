import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TaskHomeComponent } from './task-home/task-home.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskHeaderComponent } from './task-header/task-header.component';
import { TaskRoutingModule } from './task-routing.module';
import { NewTaskComponent } from './new-task/new-task.component';
import { CopyTaskComponent } from './copy-task/copy-task.component';
import { NewTaskListComponent } from './new-task-list/new-task-list.component';



@NgModule({
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent,
    CopyTaskComponent,
    NewTaskListComponent,
  ],
  imports: [
    SharedModule,
    TaskRoutingModule,
  ],
  entryComponents: [
    // NewTaskComponent,
    // CopyTaskComponent,
    // NewTaskListComponent
  ]
})
export class TaskModule { }
