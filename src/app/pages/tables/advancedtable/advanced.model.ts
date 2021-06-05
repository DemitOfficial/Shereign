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
    dateofbirth: string
    email: string
    id: string
    image: string
    name: string
    password: string
}
// Search Data
export interface SearchResult {
    tables: Table[];
    total: number;
}
