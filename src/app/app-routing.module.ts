import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsencesComponent } from './components/absences/absences.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { CareersComponent } from './components/careers/careers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { GroupsComponent } from './components/groups/groups.component';
import { PrefectsComponent } from './components/prefects/prefects.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { TeachersComponent } from './components/teachers/teachers.component';

const routes: Routes = [
  {
    path:'inasistencias',
    component: AbsencesComponent
  },
  {
    path: 'edificios',
    component: BuildingsComponent
  },
  {
    path: 'carreras',
    component:  CareersComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'departamentos',
    component: DepartmentsComponent
  },
  {
    path: 'grupos',
    component: GroupsComponent

  },
  {
    path: 'prefectos',
    component: PrefectsComponent
  },
  {
    path: 'turnos',
    component: ShiftsComponent
  },
  {
    path: 'docentes',
    component: TeachersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
