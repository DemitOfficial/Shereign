import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { Observable } from 'rxjs';

import { Table } from './advanced.model';




import { AngularFirestore } from '@angular/fire/firestore';
import { CustomerSortable, SortEvent } from './Customer-sortable.directive';
import { CustomerTableService } from './CustomerTable.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-Customer',
  templateUrl: './Customer.component.html',
  styleUrls: ['./Customer.component.scss']
})
export class CustomerComponent implements OnInit {

  breadCrumbItems: Array<{}>;
  // Table data
  tableData: Table[];
  public selected: any;
  hideme: boolean[] = [];
  tables$: Observable<Table[]>;
  userdata:Table[]=[];
  total$: Observable<number>;

  @ViewChildren(CustomerSortable) headers: QueryList<CustomerSortable>;
  public isCollapsed = true;

  // constructor(){

  // }
  constructor(public service: CustomerTableService,private firestore:AngularFirestore, private spinner: NgxSpinnerService) {
 
  }


  ngOnInit() {
    this.tables$ = this.service.tables$;
    this.total$ = this.service.total$;
    this.breadCrumbItems = [{ label: 'Tables' }, { label: 'Datatables', active: true }];
    /**
     * fetch data
     */
    debugger
 
     this.getusers().subscribe((next:any)=>{
      debugger
      this.userdata=next.map(x=>{
        return {
          id:x.payload.doc.id,
          ...x.payload.doc.data()}
      })
      console.log(this.userdata)
      localStorage.setItem('userdata',JSON.stringify(this.userdata))
      this._fetchData();
   
    },error=>{
      console.log(error);
    }
    )
    // this._fetchData();
  }


  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = this.userdata;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
  getusers(){
    return this.firestore.collection('Users').snapshotChanges();
  }
}
