"use client"
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Select from 'react-select'

import { useTask } from '@/tasks';
import { ITask, TaskState } from '@/interfaces';
import { useUiModal } from '@/ui';
import { taskSchema } from '@/zodSchema';
import { toast } from 'sonner';
import { AxiosError } from 'axios';

const options = [
    { value: TaskState.Pending, label: 'PENDING' },
    { value: TaskState.Completed, label: 'COMPLETED' },
    { value: TaskState.InProgress, label: 'IN PROGRESS' }
]

const NewTaskModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiModal();
    const { mutation: mutationTask } = useTask();

    const { register, handleSubmit, control, reset,
        formState: { errors, dirtyFields, isValid, touchedFields },
    } = useForm<Partial<ITask>>({ resolver: zodResolver(taskSchema) });

    const onSubmit: SubmitHandler<Partial<ITask>> = (data) => {
        if (isValid) {
            toast.promise(mutationTask.mutateAsync(data), {
                loading: 'Registering new task...',
                success: () => {
                    reset()
                    return "Task registered successfully"
                },
                error: (err) => {
                    if (err as AxiosError) {
                        const axiosResp = err?.response;
                        return (axiosResp?.data as { message: string })?.message;
                    } else return "Something went wrong";
                }
            })

        }
    }

    return (
        <>
            <Modal
                isOpen={isDateModalOpen}
                onRequestClose={closeDateModal}
                ariaHideApp={false}
                className="modal"
                overlayClassName="modal-fondo"
                style={{
                    content: {
                        top: '50%', left: '50%', right: 'auto', bottom: 'auto', marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                }}
                contentLabel="Example Modal"
            >

                <form onSubmit={handleSubmit(onSubmit)}>

                    <h2 className='font-bold'>New Task</h2>
                    <hr className='mb-5' />

                    <label htmlFor="task" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Describe your new task
                    </label>
                    <textarea
                        {...register("task")}
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' rows={3}
                    />
                    {errors.task && <div className='text-red-700 text-sm'>{errors.task.message}</div>}


                    <div className="grid gap-6 mb-6 md:grid-cols-2">

                        <div className="mt-3">
                            <label
                                htmlFor="state"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                            <Controller
                                name="state"
                                control={control}
                                rules={{ required: true }}
                                render={({ field: { value, onChange } }) => (
                                    <Select
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-0.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        options={options}
                                        value={options.filter(c => value?.includes(c.value))}
                                        onChange={val => onChange(val?.value)}
                                    />
                                )}
                            />
                            {errors.state && <div className='text-red-700 text-sm'>{errors.state.message}</div>}
                        </div>

                        <div className="mt-3">
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due date</label>
                            <Controller
                                name="dueDate"
                                control={control}
                                rules={{ required: "Campo requerido" }}
                                render={({ field: { value, onChange } }) => (
                                    <DatePicker
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        dateFormat="Pp"
                                        selected={value}
                                        showTimeSelect
                                        onChange={(date) => onChange(date)}
                                    />
                                )}
                            />
                            {errors.dueDate && <div className='text-red-700 text-sm'>{errors.dueDate.message}</div>}
                        </div>

                    </div>

                    <div className='flex justify-end'>
                        <button
                            disabled={ mutationTask.isPending }
                            type="submit"
                            className='flex justify-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                            <span> save</span>
                        </button>
                    </div>

                </form>

            </Modal>
        </>
    )
}

export default NewTaskModal