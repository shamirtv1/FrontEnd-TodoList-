import { ITask, TaskState } from "@/interfaces";
import { useTasks } from "@/tasks";
import { FaClipboard, FaClipboardCheck, FaClipboardList, FaHashtag } from "react-icons/fa";

export const Statistics = () => {

    const taskQuery = useTasks();

    const total = taskQuery.data?.length;
    const pending = taskQuery.data?.filter((task: ITask) => task.state === TaskState.Pending).length;
    const progress = taskQuery.data?.filter((task: ITask) => task.state === TaskState.InProgress).length;
    const completed = taskQuery.data?.filter((task: ITask) => task.state === TaskState.Completed).length;

    const wathPercent = (variable: number) => {
        if (variable == 0) return 0;
        return (variable && total) ? ((100 * variable) / total).toFixed(1) : null;
    }

    return (
        <>
            <h2 className='font-bold'>Statistics</h2>
            <hr />

            {taskQuery.isLoading && <p>Cargando...</p>}

            <div className="grid grid-cols-1 gap-4 p-10 mt-1 lg:grid-cols-2 xl:grid-cols-2">

                <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                    <div>
                        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                            Pending
                        </h6>
                        <span className="text-xl font-semibold">
                            {pending}
                        </span>
                        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            {pending !== undefined ? wathPercent(pending) + '%' : 'Calculando...'}
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaClipboard />
                            </svg>
                        </span>
                    </div>
                </div>


                <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                    <div>
                        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                            In Progress
                        </h6>
                        <span className="text-xl font-semibold">{progress}</span>
                        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            {progress !== undefined ? wathPercent(progress) + '%' : 'Calculando...'}
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaClipboardList />
                            </svg>
                        </span>
                    </div>
                </div>


                <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                    <div>
                        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                            Completed
                        </h6>
                        <span className="text-xl font-semibold">{completed}</span>
                        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            {completed !== undefined ? wathPercent(completed) + '%' : 'Calculando...'}
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaClipboardCheck />
                            </svg>
                        </span>
                    </div>
                </div>


                <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                    <div>
                        <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                            Total
                        </h6>
                        <span className="text-xl font-semibold">{total}</span>
                        <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            {total !== undefined ? wathPercent(total) + '%' : 'Calculando...'}
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <FaHashtag />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </>
    )
}
