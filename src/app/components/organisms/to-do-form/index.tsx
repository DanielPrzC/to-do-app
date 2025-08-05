'use client'
import React, { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { Task } from '@/app/types/types.d'
import { useTodoStore } from '@/app/store/use-to-do-store'

export interface IToDoForm {
    open: boolean
    onClose: Dispatch<SetStateAction<boolean>>
}

const ToDoForm: FC<IToDoForm> = ({ open, onClose }) => {
    const [task, setTask] = useState<Task>({
        title: '',
        description: '',
        isComplete: false
    })
    const [formError, setFormError] = useState(false)
    const addToDo = useTodoStore((state) => state.addToDo);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTask({
            ...task,
            [e.target.id]: e.target.value
        })
    }

    const handleClearForm = () => {
        setTask(prev => ({ ...prev, title: '', description: '' }))
        setFormError(false)
        onClose(true)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(task.title === '') {
            setFormError(true)

            return
        }

        addToDo(task)

        handleClearForm()
    }

    return (
        <Dialog
            open={open}
            onClose={handleClearForm}
        >
            <DialogTitle>
                Create a new task
            </DialogTitle>
            <DialogContent>
                <form
                    id="create-task-form"
                    onSubmit={handleSubmit}
                >
                    <TextField
                        id="title"
                        label="Title"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={task.title}
                        onChange={handleChange}
                        error={formError}
                        helperText={formError ? 'Title is required' : ''}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        multiline
                        minRows={4}
                        value={task.description}
                        onChange={handleChange}
                    />

                </form>
            </DialogContent>
            <DialogActions>
                <Button
                    variant="outlined"
                    onClick={handleClearForm}
                >
                    Cancel
                </Button>
                <Button
                    type="submit"
                    variant="contained"
                    form="create-task-form"
                >
                    Create
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ToDoForm
