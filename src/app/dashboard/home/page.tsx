"use client"

import NewTaskModal from "./NewTaskModal";
import { useUiModal } from "@/ui";
import { ListTasks } from "./ListTasks";


const Home = () => {

  const { openDateModal, isDateModalOpen } = useUiModal();

  return (

    <>

      <div className="container mx-auto mt-4">

         <div className="grid grid-cols-2 gap-4">

          <div className='col-auto bg-white border-2 rounded p-4'>

            <h2 className='font-bold'>Statistics</h2>
            <hr />

            <div className="grid grid-cols-1 gap-4 p-10 mt-1 lg:grid-cols-2 xl:grid-cols-2">

              <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                <div>
                  <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                    Pending
                  </h6>
                  <span className="text-xl font-semibold">$30,000</span>
                  <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                    +4.4%
                  </span>
                </div>
                <div>
                  <span>
                    <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                      </path>
                    </svg>
                  </span>
                </div>
              </div>


              <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                <div>
                  <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                    In Progress
                  </h6>
                  <span className="text-xl font-semibold">50,021</span>
                  <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                    +2.6%
                  </span>
                </div>
                <div>
                  <span>
                    <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                      </path>
                    </svg>
                  </span>
                </div>
              </div>


              <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                <div>
                  <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                    Completed
                  </h6>
                  <span className="text-xl font-semibold">45,021</span>
                  <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                    +3.1%
                  </span>
                </div>
                <div>
                  <span>
                    <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                    </svg>
                  </span>
                </div>
              </div>


              <div className="flex items-center shadow justify-between p-4 bg-white rounded-md">
                <div>
                  <h6 className="text-xs font-medium leading-none tracking-wider text-gray-500 uppercase">
                    Total
                  </h6>
                  <span className="text-xl font-semibold">20,516</span>
                  <span className="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                    +3.1%
                  </span>
                </div>
                <div>
                  <span>
                    <svg className="w-12 h-12 text-gray-300" xmlns="http://www.w3.org/2000/svg"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z">
                      </path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>

          </div>





          <div className='col-auto bg-white border-2 rounded p-4'>

            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Task</label>
            <textarea name="task" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' rows={5}>
            </textarea>


            <div className="grid gap-6 mb-6 md:grid-cols-2">

              <div className="mt-3">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Due Date</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>

              <div className="mt-3">
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">State</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
              </div>

            </div>

          </div>

        </div>

        <div className="col-auto bg-white border-2 rounded p-4 mt-4">

          <ListTasks />


        </div>

        <div className="fixed bottom-4 right-16">
          <button onClick={() => openDateModal() }
            className="bg-green-900 hover:bg-blue-600 text-white rounded py-1 px-2 shadow-lg">
            New task +
          </button>
        </div>

      </div >

      <NewTaskModal/>

    </>

  )
}


export default Home;