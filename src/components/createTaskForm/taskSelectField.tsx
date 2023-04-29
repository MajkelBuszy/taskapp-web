import React, { FC, ReactElement } from 'react';
import { MenuItem, FormControl, InputLabel, Select, SelectChangeEvent } from '@mui/material';

import { ISelectField } from '../../interfaces/taskForm';

export const TaskSelectField: FC<ISelectField> = (props): ReactElement => {
    const { name = 'selectBox', value, label, items = [{value: '', label: 'Add Items'}], disabled = false, onChange = (e: SelectChangeEvent) => console.log(e) } = props;

    return (
        <FormControl fullWidth size='small'>
            <InputLabel id={`${name}-id`}>{label}</InputLabel>
            <Select
                labelId={`${name}-id`}
                id={`${name}-id-select`}
                value={value}
                label={label}
                name={name}
                onChange={onChange}
                disabled={disabled}
            >
                {
                    items.map((item, index) => {
                        return (
                            <MenuItem key={item.value + index} value={item.value}>{item.label}</MenuItem>
                        )
                    })
                }
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
}