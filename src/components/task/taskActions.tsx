import React, { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskActions } from '../../interfaces/taskActions';

export const TaskActions: FC<ITaskActions> = (props): ReactElement => {
    const {
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e)
    } = props;

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            mt={4}
        >
            <FormControlLabel
                control={<Switch
                    color='info'
                    onChange={(e) => onStatusChange(e)}
                />}
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
                onClick={(e) => onClick(e)}
            >
                DONE
            </Button>
        </Box>
    );
}

TaskActions.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func
}