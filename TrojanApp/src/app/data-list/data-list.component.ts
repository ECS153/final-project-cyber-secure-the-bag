import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Data, Site } from 'src/app/data.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  allData: Data[];
  showUser: Boolean[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe(object => {
      this.allData = object.map(e => {
        let id = e.payload.doc.id
        let data = e.payload.doc.data()
        let sites: Site[] = []
        for(let site_name of Object.keys(data)) {
          let s = new Site()
          s.fields = new Map()
          s.site_name = site_name
          s.show = false;
          s.likely_fields = new Map()
          s.field_percentage = new Map()
          for(let i in data[site_name]){
            for(let field_key of Object.keys(data[site_name][i])) {
              if(s.fields.has(field_key)){
                let possible_values = s.fields.get(field_key);
                possible_values.push(data[site_name][i][field_key]);
                s.fields.set(field_key, possible_values);
              } else {
                s.fields.set(field_key, [data[site_name][i][field_key]])
              }
            }
          }

          let average = 0;
          let count = 0;
          for(let field_key of s.fields.keys()){
            let possible_values = s.fields.get(field_key)
            console.log(possible_values)
            let m = mode(possible_values)
            s.likely_fields.set(field_key, m[0])
            let value = Math.round(m[1]*10000)/100
            s.field_percentage.set(field_key, value)
            average = average + value;
            count = count + 1
          } 
          if(count > 0){
            s.average_percentage = average/count;
          } else {
            s.average_percentage = 100;
          }
          console.log(s)
          sites.push(s)
        }

        let average = 0;
        let count = 0;
        for(let site of sites) {
          average = average + site.average_percentage;
          count = count + 1;
        }
        if (count == 0){
          average = 100;
          count = 1
        }

        return {
          user: id,
          sites: sites,
          show: false,
          average_percentage: Math.round(average/count*100)/100,
          shown_sites: []
          
        } as Data;
      });
      for(let i in this.allData) {
        if(this.allData[i].user == "Total Users"){
          let index = Number.parseInt(i)
          this.allData.splice(index, 1);
          break;
        }
      }

    });
  }

  
  toggleSites(data: Data){
    if(data.show){
      data.shown_sites = [];
      data.show = false;
    } else {
      data.shown_sites = data.sites;
      data.show = true;
    }
  }
}

function mode(array){
  if(array.length == 0)
      return null;
  var modeMap = {};
  var maxEl = array[0], maxCount = 1;
  for(var i = 0; i < array.length; i++)
  {
      var el = array[i];
      if(modeMap[el] == null)
          modeMap[el] = 1;
      else
          modeMap[el]++;  
      if(modeMap[el] > maxCount)
      {
          maxEl = el;
          maxCount = modeMap[el];
      }
  }
  return [maxEl,maxCount/array.length];
}