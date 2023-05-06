import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskCounter } from '../../interfaces/taskCounter';
import { Status, StatusColor } from '../../enums/Status';

export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
    const { status = Status.done, count = 0 } = props;

    return (
        <Box
            display='flex'
            flexDirection='column'
            justifyContent='center'
            alignItems='center'
        >
            <Avatar
                sx={{
                    backgroundColor: 'transparent',
                    border: '5px solid',
                    width: '96px',
                    height: '96px',
                    marginBottom: '16px',
                    borderColor: StatusColor[status]
                }}
            >
                <Typography color='#fff' variant='h6'>{count}</Typography>
            </Avatar>
            <Typography
                color='fff'
                fontWeight='bold'
                fontSize='16px'
                variant='h5'
            >
                {status.toUpperCase()}
            </Typography>
        </Box>
    );
}

TaskCounter.propTypes = {
    count: PropTypes.number,
    status: PropTypes.oneOf([Status.done, Status.inProgress, Status.todo]),
    subText: PropTypes.string
}