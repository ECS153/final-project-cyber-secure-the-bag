import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Data } from 'src/app/data.model';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  allData: Data[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(object => {
      this.allData = object.map(e => {
        let id = e.payload.doc.id
        let data = e.payload.doc.data()
        return {
          user: id,
          site: "string",
          username: "string",
          password: data["Password"]
        } as Data;
      });
    });
  }

}
