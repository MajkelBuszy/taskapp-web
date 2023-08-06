import React, { FC, ReactElement } from 'react';
import { Box, Button, FormControlLabel, Switch } from '@mui/material';
import PropTypes from 'prop-types';

import { ITaskActions } from '../../interfaces/taskActions';
import { Status } from '../../enums/Status';

export const TaskActions: FC<ITaskActions> = (props): ReactElement => {
    const {
        id,
        status,
        onStatusChange = (e) => console.log(e),
        onClick = (e) => console.log(e),
    } = props;

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={4}
        >
            <FormControlLabel
                control={
                    <Switch
                        color="info"
                        onChange={(e) => onStatusChange(e, id)}
                        defaultChecked={status === Status.inProgress}
                    />
                }
                label="In Progress"
            />
            <Button
                variant="contained"
                color="success"
                size="small"
                sx={{
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    color: '#fff',
                }}
                onClick={(e) => onClick(e, id)}
            >
                DONE
            </Button>
        </Box>
    );
};

TaskActions.propTypes = {
    onStatusChange: PropTypes.func,
    onClick: PropTypes.func,
    id: PropTypes.string.isRequired,
    status: PropTypes.string,
};
