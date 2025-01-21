import { useMutation, useQueryClient } from "@tanstack/react-query"
import { taskActions } from ".."
import { ITask } from "@/interfaces"


export const useTaskUpdateMutation = () => {
    
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: taskActions.updateTask,
        onSuccess: (newTask: ITask) => {
            queryClient.setQueryData(
                ['task', 'all'], 
                (oldData: ITask[]) => {
                    if(!oldData) return [newTask];

                   return oldData.map((oldTask: ITask) => (oldTask._id===newTask._id) ? newTask : oldTask)
                } 
            )
        }
    })

  return { mutation }
}
