import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private api:BackendService){}

  todos:any
  ngOnInit(){
    this.getData()
  }

  getData(){
    this.api.getList().subscribe((res:any)=>{
      console.log(res)
      this.todos=res
    })
  }
}
