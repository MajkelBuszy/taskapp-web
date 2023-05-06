import React, { FC, ReactElement } from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

import { ItaskHeader } from '../../interfaces/taskHeader';

export const TaskHeader: FC<ItaskHeader> = (props): ReactElement => {
    const { title = 'Default title', date = new Date() } = props;

    return (
        <Box
            display='flex'
            width='100%'
            justifyContent='space-between'
            mb={2}
        >
            <Box>
                <Typography variant='h6'>
                    {title}
                </Typography>
            </Box>
            <Box>
                <Chip
                    variant='outlined'
                    label={format(date, 'P')}
                />
            </Box>
        </Box>
    );
}

TaskHeader.propTypes = {
    title: PropTypes.string,
    date: PropTypes.instanceOf(Date)
}