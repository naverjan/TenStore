
import { Component, OnInit } from '@angular/core';
import { EmisionService } from './emision.service';

@Component({
  selector: 'app-emision',
  templateUrl: './emision.component.html',
  styleUrls: ['./emision.component.css']
})
export class EmisionComponent implements OnInit {

  modalVisible:boolean = false;
  
  constructor(private emisionService: EmisionService) { 
    console.log(emisionService.getEmision("Andres "));
  }

  

  ngOnInit(): void {
      const openEls = document.querySelectorAll("[data-open]"); 
      const isVisible = "is-visible";
      
      openEls.forEach(e => {
        e.addEventListener("click", function(){
          console.log("Hola")
        })
      })
      
      
  }

  showModal(){
    console.log(this.modalVisible)
    this.modalVisible = !this.modalVisible;
    console.log('--')
    console.log(this.modalVisible)
  }
  
  

}


