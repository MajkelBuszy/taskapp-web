import React, {
    FC,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    Box,
    Typography,
    Stack,
    Button,
    LinearProgress,
    Alert,
    AlertTitle,
} from '@mui/material';
import { useMutation } from '@tanstack/react-query';

import { TaskTitleField } from './taskTitleField';
import { TaskDescriptionField } from './taskDescriptionField';
import { TaskDateField } from './taskDateField';
import { TaskSelectField } from './taskSelectField';
import { Priority } from '../../enums/Priority';
import { Status } from '../../enums/Status';
import { sendApiRequest } from '../../helpers/sendApiRequest';
import { ICreateTask } from '../../interfaces/taskForm';
import { TaskStatusChangedContext } from '../../context/taskStatusChangedContext';

export const CreateTaskForm: FC = (): ReactElement => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [date, setDate] = useState<Date | null>(null);
    const [status, setStatus] = useState<Status>(Status.todo);
    const [priority, setPriority] = useState<Priority>(Priority.low);
    const [showSuccessAlert, setShowSuccessAlert] = useState<boolean>(false);

    const taskUpdatedContext = useContext(TaskStatusChangedContext);

    const mutation = useMutation((body: ICreateTask) => {
        return sendApiRequest(' http://localhost:8765/tasks ', 'POST', body);
    });

    const createTaskHandler = () => {
        if (title === '' || description === '' || date === null) {
            return;
        }

        const task: ICreateTask = {
            title,
            description,
            date: date.toISOString(),
            status,
            priority,
        };
        mutation.mutate(task);
    };

    useEffect(() => {
        if (mutation.isSuccess) {
            setShowSuccessAlert(true);
            taskUpdatedContext.toggle();
        }

        const successAlertTimeout = setTimeout(() => {
            setShowSuccessAlert(false);
        }, 3000);

        return () => {
            clearTimeout(successAlertTimeout);
        };
    }, [mutation.isSuccess]);

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            px={4}
            my={6}
        >
            {showSuccessAlert && (
                <Alert severity="success">
                    <AlertTitle>Success</AlertTitle>
                    The task has been created successfully
                </Alert>
            )}
            <Typography mb={2} component="h2" variant="h6">
                Create Task
            </Typography>
            <Stack spacing={2} width="100%">
                <TaskTitleField
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                    disabled={mutation.isLoading}
                />
                <TaskDescriptionField
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }}
                    disabled={mutation.isLoading}
                />
                <TaskDateField
                    value={date}
                    onChange={(e) => {
                        setDate(e);
                    }}
                    disabled={mutation.isLoading}
                />
                <Stack direction="row" spacing={2} width="100%">
                    <TaskSelectField
                        label="Status"
                        name="status"
                        value={status}
                        onChange={(e) => {
                            setStatus(e.target.value as Status);
                        }}
                        disabled={mutation.isLoading}
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo.toUpperCase(),
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress.toUpperCase(),
                            },
                        ]}
                    />
                    <TaskSelectField
                        label="Priority"
                        name="priority"
                        value={priority}
                        onChange={(e) => {
                            setPriority(e.target.value as Priority);
                        }}
                        disabled={mutation.isLoading}
                        items={[
                            {
                                value: Priority.low,
                                label: Priority.low,
                            },
                            {
                                value: Priority.medium,
                                label: Priority.medium,
                            },
                            {
                                value: Priority.high,
                                label: Priority.high,
                            },
                        ]}
                    />
                </Stack>
                {mutation.isLoading && <LinearProgress />}
                <Button
                    disabled={
                        mutation.isLoading ||
                        title === '' ||
                        description === '' ||
                        date === null ||
                        status === null ||
                        priority === null
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    onClick={createTaskHandler}
                >
                    Create Task
                </Button>
            </Stack>
        </Box>
    );
};
