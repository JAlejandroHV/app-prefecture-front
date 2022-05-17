import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'app-prefecture-frontend';
  usuarios :any;
  constructor(private authService: AuthService){
    
    // this.authService.getUsers().subscribe( (data: any)=>{
    //   console.log(data)
    //   this.usuarios=[...data];
    // });
  }

  ngOnInit(): void {
    
  }
}
