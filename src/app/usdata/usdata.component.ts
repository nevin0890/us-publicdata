import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-usdata',
  templateUrl: './usdata.component.html',
  styleUrls: ['./usdata.component.css']
})
export class UsdataComponent implements OnInit {

  constructor(private api: ApiService) { 
    this.fetchUSData();
  }
  
  fetchUSData = () => {
    this.api.getUSData().subscribe((data) => { this.usdata = data })
  }

    usdata: any = []

  ngOnInit(): void {
  }

}
