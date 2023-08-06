import { Status } from '../enums/Status';
import { TaskApi } from '../interfaces/taskApi';

export const countTasks = (tasks: TaskApi[], status: Status): number => {
    if (!Array.isArray(tasks)) return 0;

    const totalTasks = tasks.filter((task) => task.status === status);

    return totalTasks.length;
};
