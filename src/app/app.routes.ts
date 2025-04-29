import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddNewFormComponent } from './add-new-form/add-new-form.component';
import { ViewAllComponent } from './view-all/view-all.component';

export const routes: Routes = [
    {path: 'add-new',component: AddNewFormComponent},
    {path: 'view-all',component: ViewAllComponent}
];
