import { Status } from "../enums/Status";

export interface ITaskCounter {
    subText?: string;
    count?: number;
    status?: Status;
}