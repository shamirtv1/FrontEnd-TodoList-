"use client"

import NewTaskModal from "./NewTaskModal";
import { useUiModal } from "@/ui";
import { ListTasks } from "./ListTasks";
import { Statistics } from "./Statistics";
import { StatusServer } from "./StatusServer";


const Home = () => {

  const { openDateModal, isDateModalOpen } = useUiModal();

  return (

    <>

      <div className="container mx-auto mt-4">

        <div className="grid grid-cols-2 gap-4">

          <div className='col-auto bg-white border-2 rounded p-4'>

            <Statistics />

          </div>


          <div className='col-auto rounded p-4'>

            <StatusServer/>

          </div>

        </div>

        <div className="col-auto bg-white border-2 rounded p-4 mt-4">

          <ListTasks />

        </div>

        <div className="fixed bottom-4 right-16">
          <button onClick={() => openDateModal()}
            className="bg-green-900 hover:bg-blue-600 text-white rounded py-1 px-2 shadow-lg">
            New task +
          </button>
        </div>

      </div >

      <NewTaskModal />

    </>

  )
}


export default Home;