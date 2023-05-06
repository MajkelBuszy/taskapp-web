import React, { FC, ReactElement } from 'react';
import { Box, Typography, Stack } from '@mui/material';

import { TaskTitleField } from './taskTitleField';
import { TaskDescriptionField } from './taskDescriptionField';
import { TaskDateField } from './taskDateField';
import { TaskSelectField } from './taskSelectField';
import { Priority } from '../../enums/Priority';
import { Status } from '../../enums/Status';

export const CreateTaskForm: FC = (): ReactElement => {
    return (
        <Box
            display='flex'
            flexDirection='column'
            alignItems='flex-start'
            width='100%'
            px={4}
            my={6}
        >
            <Typography mb={2} component='h2' variant='h6'>
                Create Task
            </Typography>
            <Stack spacing={2} width='100%'>
                <TaskTitleField />
                <TaskDescriptionField />
                <TaskDateField />
                <Stack direction='row' spacing={2} width='100%'>
                    <TaskSelectField
                        label='Status'
                        name='status'
                        items={[
                            {
                                value: Status.todo,
                                label: Status.todo.toUpperCase()
                            },
                            {
                                value: Status.inProgress,
                                label: Status.inProgress.toUpperCase()
                            }
                        ]}
                    />
                    <TaskSelectField
                        label='Priority'
                        name='priority'
                        items={[
                            {
                                value: Priority.low,
                                label: Priority.low
                            },
                            {
                                value: Priority.medium,
                                label: Priority.medium
                            },
                            {
                                value: Priority.high,
                                label: Priority.high
                            }
                        ]}
                    />
                </Stack>
            </Stack>
        </Box>
    )
};