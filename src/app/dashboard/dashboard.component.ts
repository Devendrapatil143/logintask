import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  list: any;
  user: any;
  

  constructor(public service:DashboardService) {
    
   }

  ngOnInit(): void {
    
  }

  ticketcategory(){
    this.service.loadTicketCategory().subscribe(response => {
      this.list = response.data;
      this.user =  this.list;
     
      console.log(this.user )
   
      
     

    })

  console.log("working")
  }




  }
 
 





