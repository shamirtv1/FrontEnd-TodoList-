import { useMutation, useQueryClient } from "@tanstack/react-query";
import { taskActions } from "..";
import { ITask } from "@/interfaces";


export const useTaskDeleteMutation = () => {
  
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: taskActions.deleteTask,
        onSuccess: (deleteTask: ITask) => {
            queryClient.setQueryData(
                ['task', 'all'], 
                (oldData: ITask[]) => oldData.filter((task: ITask) => task._id !== deleteTask._id)
            )
        }
    })

  return { mutation }
}
