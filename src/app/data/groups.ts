import { IGroup } from "../interfaces/iGroup";
import { STUDENTS } from "./stdents";

export const GROUPS: IGroup[] = [{
    id:1, 
    name:"6404", 
    students:STUDENTS.filter(stident=>stident.group === 1)
},{
    id:2, 
    name:"4201", 
    students:STUDENTS.filter(stident=>stident.group === 2)
}]