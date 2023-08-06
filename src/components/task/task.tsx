import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { TaskHeader } from './taskHeader';
import { TaskDescription } from './taskDescription';
import { TaskActions } from './taskActions';
import { ITask } from '../../interfaces/task';
import { Status } from '../../enums/Status';
import { Priority } from '../../enums/Priority';
import { TaskBorderColor } from '../../enums/TaskBorderColor';

export const Task: FC<ITask> = (props): ReactElement => {
    const {
        title = 'Default title',
        date = new Date(),
        priority = Priority.medium,
        description = 'n/a',
        status = Status.done,
        onClick = (e) => e,
        onStatusChange = (e) => e,
        id,
    } = props;

    return (
        <Box
            display="flex"
            width="100%"
            justifyContent="flex-start"
            flexDirection="column"
            mb={4}
            p={2}
            sx={{
                width: '100%',
                backgroundColor: 'grey.900',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: TaskBorderColor[priority],
            }}
        >
            <TaskHeader title={title} date={date} />
            <TaskDescription description={description} />
            <TaskActions
                id={id}
                status={status}
                onClick={onClick}
                onStatusChange={onStatusChange}
            />
        </Box>
    );
};

Task.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    description: PropTypes.string,
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
    priority: PropTypes.oneOf([Priority.high, Priority.low, Priority.medium]),
    status: PropTypes.oneOf([Status.done, Status.inProgress, Status.todo]),
};
