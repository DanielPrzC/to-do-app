import { Button, Card, CardActions, CardContent, Chip, Typography } from '@mui/material'
import React, { FC } from 'react'

export interface IToDoItem {
    id: string
    title: string
    description: string
    isComplete: boolean
    onToggleStatus: (id: string) => void
    onDelete: (id: string) => void
}

const ToDoItem: FC<IToDoItem> = ({ id, title, description, isComplete, onToggleStatus, onDelete }) => {
  return (
    <Card>
        <CardContent>
            <Chip
                label={isComplete ? 'Completed' : 'In progress'}
                color={isComplete ? 'success' : 'info'}
                variant={isComplete ? 'filled' : 'outlined'}
            />
            <Typography variant="h4" gutterBottom>{title}</Typography>
            <Typography variant="body1" component="p">{description}</Typography>
        </CardContent>
        <CardActions>
            <Button
                variant="outlined"
                color="error"
                onClick={() => onDelete(id)}
            >
                Delete Task
            </Button>
            <Button
                variant={isComplete ? 'outlined' : 'contained'}
                onClick={() => onToggleStatus(id)}
            >
                {isComplete ? 'Back to "In progress"' : 'Complete'}
            </Button>
        </CardActions>
    </Card>
  )
}

export default ToDoItem