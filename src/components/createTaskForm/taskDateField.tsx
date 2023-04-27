import React, { FC, ReactElement, useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export const TaskDateField: FC = (): ReactElement => {
    const [date, setDate] = useState<Date | null>(null);

    return (
        <>
            <LocalizationProvider
                dateAdapter={AdapterDateFns}
            >
                <DesktopDatePicker
                    value={date}
                    onChange={(newDate) => {
                        setDate(newDate);
                    }}
                    format='dd/MM/yyyy'
                    label='Task date'
                />
            </LocalizationProvider>
        </>
    );
}