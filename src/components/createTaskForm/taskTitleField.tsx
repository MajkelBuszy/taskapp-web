import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

import { ITextField } from '../../interfaces/taskForm';

export const TaskTitleField: FC<ITextField> = (props): ReactElement => {
    const { onChange = (e) => e, disabled = false } = props;

    return (
        <TextField
            id='title'
            label='Task title'
            placeholder='Enter task title'
            variant='outlined'
            size='small'
            name='title'
            fullWidth
            disabled={disabled}
            onChange={onChange}
        />
    );
}

TaskTitleField.propTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}