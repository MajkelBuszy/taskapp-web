import React, { FC, ReactElement, useContext, useEffect } from 'react';
import { Grid, Box, Alert, LinearProgress } from '@mui/material';

import { format } from 'date-fns';
import { TaskCounter } from '../taskCounter/taskCounter';
import { Status } from '../../enums/Status';
import { Task } from '../task/task';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { TaskApi, UpdateTaskApi } from '../../interfaces/taskApi';
import { useMutation, useQuery } from '@tanstack/react-query';
import { countTasks } from '../../helpers/countTasks';
import { TaskStatusChangedContext } from '../../context/taskStatusChangedContext';

export const TaskArea: FC = (): ReactElement => {
    const taskUpdatedContext = useContext(TaskStatusChangedContext);

    const { error, isLoading, refetch, data } = useQuery(
        ['tasks'],
        async () =>
            await sendApiRequest<TaskApi[]>(
                'http://localhost:8765/tasks',
                'GET',
            ),
    );

    const updateTaskMutation = useMutation((body: UpdateTaskApi) =>
        sendApiRequest('http://localhost:8765/tasks', 'PATCH', body),
    );

    useEffect(() => {
        refetch();
    }, [taskUpdatedContext.updated]);

    useEffect(() => {
        if (updateTaskMutation.isSuccess) {
            taskUpdatedContext.toggle();
        }
    }, [updateTaskMutation.isSuccess]);

    const onStatusChangeHandler = (
        e: React.ChangeEvent<HTMLInputElement>,
        id: string,
    ) => {
        updateTaskMutation.mutate({
            id,
            status: e.target.checked ? Status.inProgress : Status.todo,
        });
    };

    const markCompleteHandler = (
        e:
            | React.MouseEvent<HTMLButtonElement>
            | React.MouseEvent<HTMLAnchorElement>,
        id: string,
    ) => {
        updateTaskMutation.mutate({
            id,
            status: Status.done,
        });
        refetch();
    };

    return (
        <Grid item md={8} px={4}>
            <Box mb={8} px={4}>
                <h2>Tasks Status as of: {format(new Date(), 'PPPP')}</h2>
            </Box>
            <Grid container display="flex" justifyContent="center">
                <Grid
                    item
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    md={10}
                    xs={12}
                    mb={8}
                >
                    <TaskCounter
                        status={Status.todo}
                        count={data ? countTasks(data, Status.todo) : undefined}
                        subText="Todo"
                    />
                    <TaskCounter
                        status={Status.inProgress}
                        count={
                            data
                                ? countTasks(data, Status.inProgress)
                                : undefined
                        }
                        subText="In Progress"
                    />
                    <TaskCounter
                        status={Status.done}
                        count={data ? countTasks(data, Status.done) : undefined}
                        subText="Done"
                    />
                </Grid>
                <Grid item display="flex" flexDirection="column" xs={10} md={8}>
                    {isLoading ? (
                        <LinearProgress />
                    ) : (
                        Array.isArray(data) &&
                        data.length !== 0 &&
                        data.map((task) =>
                            task.status !== Status.done ? (
                                <Task
                                    key={task.id}
                                    id={task.id}
                                    title={task.title}
                                    description={task.description}
                                    date={new Date(task.date)}
                                    status={task.status}
                                    priority={task.priority}
                                    onStatusChange={onStatusChangeHandler}
                                    onClick={markCompleteHandler}
                                />
                            ) : (
                                false
                            ),
                        )
                    )}
                    {error ? (
                        error instanceof Error ? (
                            <Alert severity="error">{error.message}</Alert>
                        ) : (
                            <Alert severity="error">Error Occurred</Alert>
                        )
                    ) : null}
                    {!error && !isLoading && data && data.length === 0 && (
                        <Alert severity="warning">No tasks found</Alert>
                    )}
                    {}
                </Grid>
            </Grid>
        </Grid>
    );
};
