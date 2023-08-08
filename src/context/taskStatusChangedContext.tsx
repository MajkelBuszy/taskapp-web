import React, {
    FC,
    PropsWithChildren,
    ReactElement,
    createContext,
    useState,
} from 'react';

type TaskStatusChangedContextType = {
    updated: boolean;
    toggle: () => void;
};

export const TaskStatusChangedContext =
    createContext<TaskStatusChangedContextType>({
        updated: false,
        toggle: () => {
            throw new Error('Toggle function not implemented yet.');
        },
    });

export const TaskStatusChangedProvider: FC<PropsWithChildren> = (
    props,
): ReactElement => {
    const [updated, setUpdated] = useState<boolean>(false);

    const toggleHandler = () => {
        updated ? setUpdated(false) : setUpdated(true);
    };

    return (
        <TaskStatusChangedContext.Provider
            value={{
                updated,
                toggle: toggleHandler,
            }}
        >
            {props.children}
        </TaskStatusChangedContext.Provider>
    );
};
