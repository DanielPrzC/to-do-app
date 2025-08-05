import { create } from 'zustand';
import { persist } from "zustand/middleware";
import { Task, ToDo } from '@/app/types/types.d';
import { nanoid } from 'nanoid';

type TodoState = {
    toDos: ToDo[];
    addToDo: (task: Task) => void;
    toggleToDo: (id: string) => void;
    deleteToDo: (id: string) => void;
};

export const useTodoStore = create<TodoState>()(
    persist(
        (set) => ({
            toDos: [],
            addToDo: (task) =>
                set((state) => ({
                    toDos: [
                        ...state.toDos,
                        {
                            ...task,
                            id: nanoid(),
                        }
                    ]
                })),
            toggleToDo: (id) =>
                set((state) => ({
                    toDos: state.toDos.map((toDo) =>
                        toDo.id === id ?
                            {
                                ...toDo,
                                isComplete: !toDo.isComplete
                            }
                            :
                            toDo
                    )
                })),
            deleteToDo: (id) =>
                set((state) => ({
                    toDos: state.toDos.filter((toDo) => toDo.id !== id)
                }))
        }),
        { name: 'to-do-list' }
    ))