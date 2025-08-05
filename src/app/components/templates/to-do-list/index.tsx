'use client'
import React, { useState } from 'react'
import ToDoForm from '../../organisms/to-do-form'
import { Task } from '@/app/types/types.d'
import { Button } from '@mui/material'

const ToDoList = () => {
    const [formOpen, setFormOpen] = useState(false)
    const handleCreate = (task: Task) => {
        console.log("🚀 ~ handleCreate ~ task:", task)
    }

    return (
        <div>
            <Button onClick={() => setFormOpen(!formOpen)}>Create Task</Button>
            <ToDoForm
                open={formOpen}
                onClose={() => setFormOpen(!formOpen)}
                onCreate={handleCreate}
            />
        </div>
    )
}

export default ToDoList