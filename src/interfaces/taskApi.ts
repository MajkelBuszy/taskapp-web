import { Priority } from '../enums/Priority';
import { Status } from '../enums/Status';

export interface TaskApi {
    id: string;
    title: string;
    description: string;
    date: string;
    status: `${Status}`;
    priority: `${Priority}`;
}

export interface UpdateTaskApi {
    id: string;
    status: `${Status}`;
}
