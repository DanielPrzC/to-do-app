export type ToDo = {
    id: string;
    title: string;
    description: string;
    isComplete: boolean;
}

export type Task = Pick<ToDo, 'title' | 'description' | 'isComplete'>