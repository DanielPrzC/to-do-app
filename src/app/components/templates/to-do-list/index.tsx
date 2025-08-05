'use client'
import React, { useState } from 'react'
import ToDoForm from '../../organisms/to-do-form'
import ToDoBoard from '../../organisms/to-do-board'
import { Fab, Typography } from '@mui/material'

const ToDoList = () => {
    const [formOpen, setFormOpen] = useState(false)

    const toggleCloseForm = () => {
        setFormOpen(!formOpen)
    }

    return (
        <>
            <Typography variant="h3" gutterBottom>To-Do App</Typography>
            <Typography variant="body1" sx={{ marginBottom: '64px'}}>
                A simple To-Do List application that allows users to add, mark as complete, and delete tasks.
            </Typography>
            <ToDoForm
                open={formOpen}
                onClose={toggleCloseForm}
            />
            <ToDoBoard />
            <Fab
                variant="extended"
                sx={{
                    position: 'absolute',
                    bottom: 32,
                    right: 32
                }}
                color="primary"
                onClick={toggleCloseForm}
            >
                Create a new task
            </Fab>
        </>
    )
}

export default ToDoList