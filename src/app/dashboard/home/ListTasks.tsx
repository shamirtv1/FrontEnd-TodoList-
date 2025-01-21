import { useMemo } from "react";
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useTaskDeleteMutation, useTasks } from "@/tasks";
import { ITask, TaskState } from "@/interfaces";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useUiModal } from "@/ui";
import { store } from "@/store/store";
import { formatDistance } from 'date-fns'



export const ListTasks = () => {

    const taskQuery = useTasks();
    const { mutation: mutationDeleteTask } = useTaskDeleteMutation();
    const { openDateModal, isDateModalOpen } = useUiModal();

    const columnHelper = createColumnHelper<ITask>()
    const columns = useMemo(() => [
        columnHelper.display({
            id: 'actions',
            header: () => <strong>#</strong>,
            cell: props => props.row.index + 1,
        }),
        columnHelper.accessor('task', {
            header: () => 'TASK',
            cell: info => info.renderValue()
        }),
        columnHelper.accessor('state', {
            header: () => 'STATUS',
            cell: info => {
                if (info.getValue() === TaskState.Pending)
                    return (<span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">{TaskState.Pending}</span>)
                if (info.getValue() === TaskState.InProgress)
                    return (<span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">{TaskState.InProgress}</span>)
                if (info.getValue() === TaskState.Completed)
                    return (<span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">{TaskState.Completed}</span>)
            },
        }),
        columnHelper.accessor('dueDate', {
            header: () => 'DUE DATE',
            cell: info => {
                return formatDistance(info.getValue(), new Date(), { addSuffix: true }).toUpperCase()
            },
        }),
    ], []);

    const table = useReactTable({
        data: taskQuery.data ? taskQuery.data : [],
        columns,
        getCoreRowModel: getCoreRowModel()
    })


    const deleteTask = (id: string) => {
        toast.info('Are you sure you want to remove this task?', {
            action: {
                label: 'Sure',
                onClick: () => {
                    toast.promise(mutationDeleteTask.mutateAsync(id), {
                        loading: 'Deleting task...',
                        success: () => {
                            return "Task deleting successfully"
                        },
                        error: (err) => {
                            if (err as AxiosError) {
                                const axiosResp = err?.response;
                                return (axiosResp?.data as { message: string })?.message;
                            } else return "Something went wrong";
                        }
                    })
                }
            },
        })
    }

    const updateTask = (task: ITask) => {
        store.setState((state) => { return { ...state, taskSelected: task } });
        openDateModal();
    }

    return (
        <>
            <h2 className='font-bold'>List of tasks</h2>
            <hr />

            {taskQuery.isLoading && <p>Cargando...</p>}

            <div className="relative flex flex-col w-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>

                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="p-4 border-b border-slate-300 bg-slate-50">
                                        <p className="block text-sm font-normal leading-none text-slate-500">
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </p>
                                    </th>
                                ))}

                                <th className="p-4 border-b border-slate-300 bg-slate-50">
                                    <p className="block text-sm font-normal leading-none text-slate-500"></p>
                                </th>
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id} className="hover:bg-slate-50">
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="p-4 border-b border-slate-200">
                                        <p className="block text-sm text-slate-800">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </p>
                                    </td>
                                ))}

                                <td className="p-4 border-b border-slate-200 flex justify-end">
                                    <button
                                        onClick={() => updateTask(row.original)}
                                        className="mx-1 bg-blue-500 hover:bg-blue-700 text-white text-sm px-2 rounded inline-flex items-center">
                                        Edit <FaEdit className="ml-1" />
                                    </button>
                                    <button
                                        disabled={mutationDeleteTask.isPending}
                                        onClick={() => deleteTask(row.original._id)}
                                        className="mx-1 bg-red-500 hover:bg-red-700 text-white text-sm px-2 rounded inline-flex items-center">
                                        Trash <FaRegTrashAlt className="ml-1" />
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}
