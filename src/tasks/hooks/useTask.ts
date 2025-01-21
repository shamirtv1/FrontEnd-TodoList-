import { useMutation, useQuery } from '@tanstack/react-query';
import { ITask } from '@/interfaces';
import { taskActions } from '..';

const useTask = () => {


    const mutation = useMutation({
        mutationFn: taskActions.newTask,
        onSuccess: (data: ITask) => {
            console.log(data)
        }
    })



    const taskQuery = useQuery({
        queryKey: ['task', 'all'],
        queryFn: taskActions.getAllTask,
        staleTime: 1000 * 60 * 30,
    });




    return {
        mutation, taskQuery
    }


}

export default useTask