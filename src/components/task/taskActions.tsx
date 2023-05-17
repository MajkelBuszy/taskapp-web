import React, { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';

export const TaskActions: FC = (): ReactElement => {
    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mt={4}
        >
            <FormControlLabel
                control={<Switch color='info' />}
                label='In Progress'
            />
            <Button
                variant='contained'
                color='success'
                size='small'
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#fff'
                }}
            >
                DONE
            </Button>
        </Box>
    );
}