import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskActions } from '..'
import { ITask } from '@/interfaces'

export const useTaskMutation = () => {

    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: taskActions.newTask,

        onMutate: (task: Partial<ITask>) => {

            // Optimistic Task
            let randomString = String(Math.floor(Math.random() * 9e15))
            const optimisticTask = {
                ...task, 
                _id: randomString, 
                user: randomString,
                dueDate: task.dueDate?.toISOString(),
                createdAt: "2025-01-21T19:08:35.779Z",
                updatedAt: "2025-01-21T19:08:35.779Z",
            };

            queryClient.setQueryData(['task', 'all'], (oldData: ITask[]) => {
                if ( !oldData ) return [optimisticTask];
                return [...oldData, optimisticTask]
            });

            return {
                optimisticTask
            };
        },

        onSuccess: (newTask: ITask, variables, contex) => {

            queryClient.setQueryData(['task', 'all'], (oldData: ITask[]) => {
                if (!oldData) return [newTask];

                return oldData.map((cacheTask: ITask) => (cacheTask._id === contex.optimisticTask._id) ? newTask : cacheTask)
            })
        },

        onError: (error, variables, contex) => {

            queryClient.setQueryData(['task', 'all'], (oldData: ITask[]) => {
                if (!oldData) return [];

                return oldData.filter((cacheTask: ITask) => cacheTask._id !== contex?.optimisticTask._id)
            })

        },
    })

    return { mutation }
}
