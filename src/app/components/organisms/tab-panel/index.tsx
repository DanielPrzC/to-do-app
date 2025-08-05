import { Typography } from "@mui/material";
import ToDoItem from "../../molecules/to-do-item";
import { FC } from "react";
import { FilterParam, ToDo } from "@/app/types/types";
import { useTodoStore } from "@/app/store/use-to-do-store";

export interface ITabPanel {
    value: number
    index: number
    items: ToDo[]
    isFiltered?: boolean
    filterParam?: FilterParam
    filterParamValue?: string | boolean
}

const TabPanel: FC<ITabPanel> = ({
        value,
        index,
        items,
        isFiltered = false,
        filterParam = 'isComplete',
        filterParamValue,
    }) => {
        const toggleToDo = useTodoStore((state) => state.toggleToDo);
        const deleteToDo = useTodoStore((state) => state.deleteToDo);
        const list = isFiltered
        ? items.filter(item => item[filterParam] === filterParamValue)
        : items;
        
        if (value !== index) return null

        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}
            >
                {list.length ? (
                    list.map(item => (
                        <ToDoItem
                            key={item.id}
                            {...item}
                            onDelete={() => deleteToDo(item.id)}
                            onToggleStatus={() => toggleToDo(item.id)}
                        />
                    ))
                ) : (
                    <Typography variant="h5">There are no items</Typography>
                )}
            </div>
        );
    };

    export default TabPanel