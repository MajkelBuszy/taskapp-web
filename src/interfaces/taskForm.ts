import React from "react";

export interface ITaskFieldDisabled {
    disabled?: boolean;
}

export interface ITextField extends ITaskFieldDisabled {
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
}