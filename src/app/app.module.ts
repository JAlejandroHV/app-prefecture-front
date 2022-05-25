import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from  'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule} from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer'
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from './icons-provider/icons-provider.module';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';

import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTableModule } from 'ng-zorro-antd/table';


import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PrefectsComponent } from './components/prefects/prefects.component';
import { TeachersComponent } from './components/teachers/teachers.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { CareersComponent } from './components/careers/careers.component';
import { BuildingsComponent } from './components/buildings/buildings.component';
import { GroupsComponent } from './components/groups/groups.component';
import { AbsencesComponent } from './components/absences/absences.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PrefectsComponent,
    TeachersComponent,
    DepartmentsComponent,
    ShiftsComponent,
    CareersComponent,
    BuildingsComponent,
    GroupsComponent,
    AbsencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule ,
    NzGridModule,
    NzDropDownModule,
    NzDrawerModule,
    NzBreadCrumbModule,
    NzIconModule,
    IconsProviderModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzTableModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
