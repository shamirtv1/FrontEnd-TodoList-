import { TodoListApi } from "@/apis";
import { sleep } from "@/helpers";
import { ITask } from "@/interfaces";

export const newTask = async (objeto: Partial<ITask>): Promise<ITask> => {
    
    await sleep(2);

    const { data } = await TodoListApi.post<ITask>('/task', objeto);
    
    return data
}


export const getAllTask = async (): Promise<[ITask]> => {
    
    await sleep(2);

    const { data } = await TodoListApi.get<[ITask]>('/task');
    
    return data
}

export const deleteTask = async (id:string): Promise<ITask> => {
    
    await sleep(2);

    const { data } = await TodoListApi.delete<ITask>(`/task/${id}`);
    
    return data
}

export const updateTask = async (task: ITask): Promise<ITask> => {
    
    await sleep(2);

    const { data } = await TodoListApi.patch<ITask>(`/task/${task._id}`, task);
    
    return data
}