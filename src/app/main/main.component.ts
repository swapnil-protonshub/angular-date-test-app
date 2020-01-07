import { Component, OnInit } from '@angular/core';
import {CommanService} from '../../common/services/comman.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data:any;
  currentPage: Number = 1;
  selectedData: any;
  displayedColumns: string[] = ['title', 'url', 'created_at', 'author'];
  subscription: Subscription;
  constructor(private _CommanService: CommanService) { }


  ngOnInit() {
    const source = timer(0, 10000);
    this.subscription = source.subscribe(val => this.getDataFunction());
  	
  }

  show(data){
    this.selectedData = data;
    document.getElementById("openModalButton").click();
  }
  

  getDataFunction()
  {
  	let aa  = this._CommanService.GetMethod().subscribe(
    (data: any) => {
      this.data = (data) ? data.hits :'';
      console.log(this.data);
    }
    );
  }
}
