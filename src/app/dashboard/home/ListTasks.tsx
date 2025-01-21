import { useTask } from "@/tasks";

export const ListTasks = () => {
    
    const { taskQuery } = useTask();


    return (
        <>
            <h2 className='font-bold'>List of tasks</h2>
            <hr />


            <div className="relative flex flex-col w-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                <table className="w-full text-left table-auto min-w-max">
                    <thead>
                        <tr>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    TASK
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    STATUS
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500">
                                    DUE DATE
                                </p>
                            </th>
                            <th className="p-4 border-b border-slate-300 bg-slate-50">
                                <p className="block text-sm font-normal leading-none text-slate-500"></p>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-slate-50">
                            
                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    John Michael
                                </p>
                            </td>

                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    Manager
                                </p>
                            </td>

                            <td className="p-4 border-b border-slate-200">
                                <p className="block text-sm text-slate-800">
                                    23/04/18
                                </p>
                            </td>

                            <td className="p-4 border-b border-slate-200">
                                <a href="#" className="block text-sm font-semibold text-slate-800">
                                    Edit
                                </a>
                            </td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </>
    )
}
