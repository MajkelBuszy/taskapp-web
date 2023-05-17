import { ItaskHeader } from "./taskHeader";
import { ITaskDescription } from "./taskDescription";
import { ITaskActions } from "./taskActions";
import { Status } from "../enums/Status";
import { Priority } from "../enums/Priority";

export interface ITask extends ItaskHeader, ITaskDescription, ITaskActions {
    id?: string;
    priority?: keyof typeof Priority;
    status?: keyof typeof Status;
}