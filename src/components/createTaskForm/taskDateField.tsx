import React, { FC, ReactElement } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { IDateField } from '../../interfaces/taskForm';

export const TaskDateField: FC<IDateField> = (props): ReactElement => {
    const { value = new Date(), onChange = (e) => e, disabled = false } = props;

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker
                    value={value}
                    onChange={onChange}
                    format='dd/MM/yyyy'
                    label='Task date'
                    disabled={disabled}
                />
            </LocalizationProvider>
        </>
    );
}