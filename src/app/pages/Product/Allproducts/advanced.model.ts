// Table data
// export interface Table {
//     name: string;
//     position: string;
//     office: string;
//     age: number;
//     date: string;
//     salary: string;
// }
export interface Table{
    Title:string
    Description:string
    ImageUrl:string
    ProductCode:string
    Price:string
    id:string
    
}
// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
