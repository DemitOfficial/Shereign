import { Component, OnInit } from '@angular/core';
import { transactions, lineColumAreaChart, revenueColumnChart, customerRadialBarChart, orderRadialBarChart, growthColumnChart} from './data';

import { ChartType } from './dashboard.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})

export class DefaultComponent implements OnInit {

  lineColumAreaChart: ChartType;
  revenueColumnChart: ChartType;
  orderRadialBarChart: ChartType;
  customerRadialBarChart: ChartType;
  growthColumnChart: ChartType;
  transactions;
  breadCrumbItems: Array<{}>;
userdata:any[]=[];
  constructor(private firestore:AngularFirestore) { }

  ngOnInit() {
    /**
     * Fetches the data
     */debugger;
    this.getusers().subscribe((next:any)=>{
      debugger
      this.userdata=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.userdata)
    },error=>{
      console.log(error);
    }
    )
    this.fetchData();
    this.breadCrumbItems = [{ label: 'Minible' }, { label: 'Dashboard', active: true }];
  }

  /**
   * Fetches the data
   */
  private fetchData() {
    
    this.lineColumAreaChart = lineColumAreaChart;
    this.revenueColumnChart = revenueColumnChart;
    this.orderRadialBarChart = orderRadialBarChart;
    this.customerRadialBarChart = customerRadialBarChart;
    this.growthColumnChart = growthColumnChart;
    
    this.transactions = transactions;
  }
getusers(){
  return this.firestore.collection('Users').snapshotChanges();
}
}
