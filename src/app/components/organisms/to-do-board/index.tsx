'use client'
import React, { FC, SyntheticEvent, useState } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { FilterParam } from '@/app/types/types'
import TabPanel from '../tab-panel'
import { useTodoStore } from '@/app/store/use-to-do-store'

const ToDoBoard: FC = () => {
    const toDos = useTodoStore((state) => state.toDos);
    const [tabValue, setTabValue] = useState<number>(0)
    const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const FILTER_PARAM_IS_COMPLETE: FilterParam = 'isComplete';

    const tabsConfig = [
        {   
            id: 'all',
            index: 0
        },
        {
            id: 'in-progress',
            index: 1,
            isFiltered: true,
            filterParam: FILTER_PARAM_IS_COMPLETE,
            filterParamValue: false
        },
        {
            id: 'completed',
            index: 2,
            isFiltered: true,
            filterParam: FILTER_PARAM_IS_COMPLETE,
            filterParamValue: true
        },
    ]

    return (
        <>
            <Tabs
                variant="fullWidth"
                value={tabValue}
                onChange={handleTabChange}
            >
                <Tab label="All" />
                <Tab label="In progress" />
                <Tab label="Completed" />
            </Tabs>
            {tabsConfig.map(tab => {
                return (
                    <TabPanel key={tab.id} value={tabValue} items={toDos} {...tab} />
                )
            })}
        </>
    )
}

export default ToDoBoard