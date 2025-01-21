import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { taskActions } from '..';

export const useTasks = () => {


    const taskQuery = useQuery({
        queryKey: ['task', 'all'],
        queryFn: taskActions.getAllTask,
        staleTime: 1000 * 60 * 30,
    });




    return taskQuery

}
