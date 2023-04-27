import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { ITextField } from '../../interfaces/taskForm';

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
    const { onChange = (e) => e, disabled = false } = props;

    return (
        <TextField
            id='description'
            label='Task description'
            placeholder='Enter task description'
            variant='outlined'
            size='small'
            name='description'
            fullWidth
            rows={4}
            multiline
            disabled={disabled}
            onChange={onChange}
        />
    );
}

TaskDescriptionField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
