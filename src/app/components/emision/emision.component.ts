
import { Component, OnInit } from '@angular/core';
import { EmisionService } from './emision.service';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.css']
})
export class EmisionComponent implements OnInit {
  
  constructor(private emisionService: EmisionService) { 
    console.log(emisionService.getEmision("Andres"));
  }

  

  ngOnInit(): void {
    
  }

}


