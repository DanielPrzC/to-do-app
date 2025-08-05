'use client'
import React, { useState } from 'react'
import ToDoForm from '../../organisms/to-do-form'
import ToDoBoard from '../../organisms/to-do-board'
import { Button } from '@mui/material'

const ToDoList = () => {
    const [formOpen, setFormOpen] = useState(false)

    const handleCloseForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <>
            <Button onClick={handleCloseForm}>Create Task</Button>
            <ToDoForm
                open={formOpen}
                onClose={handleCloseForm}
            />
            <ToDoBoard />
        </>
    )
}

export default ToDoList