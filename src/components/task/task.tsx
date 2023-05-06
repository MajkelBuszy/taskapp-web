import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';

import { TaskHeader } from './taskHeader';
import { TaskDescription } from './taskDescription';

export const Task: FC = (): ReactElement => {
    return (
        <Box
            display='flex'
            width='100%'
            justifyContent='flex-start'
            flexDirection='column'
            mb={2}
            p={4}
            sx={{
                width: '100%',
                backgroundColor: 'backround.paper',
                borderRadius: '8px',
                border: '1px solid',
                borderColor: 'error.light'
            }}
        >
            <TaskHeader />
            <TaskDescription />
        </Box>
    );
}