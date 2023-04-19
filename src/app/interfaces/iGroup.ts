import { IStudent } from "./iStudent";

export interface IGroup{
    id:number, 
    name:string, 
    students:IStudent[]
}