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