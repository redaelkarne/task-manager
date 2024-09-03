import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'display', loadChildren: () => import('../tasks/tasks.module').then(m => m.TasksModule) },
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  // Add any other routes here
];


