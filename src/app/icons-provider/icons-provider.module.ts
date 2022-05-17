import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import  {
            MenuFoldOutline,
            MenuUnfoldOutline,
            FormOutline,
            DashboardOutline
} from '@ant-design/icons-angular/icons';

const icons = [MenuUnfoldOutline, MenuFoldOutline, DashboardOutline, FormOutline]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NzIconModule
  ],
  exports :[
    NzIconModule
  ],
  providers: [
    { provide:  NZ_ICONS, useValue: icons}
  ]
})
export class IconsProviderModule { }
