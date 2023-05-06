import React, { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskDescription } from '../../interfaces/taskDescription';

export const TaskDescription: FC<ITaskDescription> = (props): ReactElement => {
    const { description = 'n/a' } = props;

    return (
        <Box>
            <Typography>
                {description}
            </Typography>
        </Box>
    );
}

TaskDescription.propTypes = {
    description: PropTypes.string
}