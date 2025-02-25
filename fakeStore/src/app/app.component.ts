import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent} from "ngx-spinner";
import { initFlowbite } from 'flowbite';
import { FlowbiteService } from '../app/core/services/flowbite/flowbite.service';
import { HomeComponent } from "./layout/home/home.component";

@Component({
  selector: 'app-root',
  imports: [ NgxSpinnerComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{


  constructor(private flowbiteService: FlowbiteService) {}

  title = 'fakeStore';
   ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    initFlowbite();
   }
}
