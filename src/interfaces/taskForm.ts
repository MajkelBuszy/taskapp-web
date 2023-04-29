import { SelectChangeEvent } from "@mui/material";
import React from "react";

export interface ITaskFieldDisabled {
    disabled?: boolean;
}

export interface ITextField extends ITaskFieldDisabled {
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}

export interface IDateField extends ITaskFieldDisabled {
    onChange?: (date: Date | null) => void;
    value?: Date | null;
}

export interface ISelectItems {
    value: string;
    label: string;
}

export interface ISelectField extends ITaskFieldDisabled {
    name?: string;
    label?: string;
    value?: string;
    onChange?: (e: SelectChangeEvent) => void;
    items?: ISelectItems[]
}