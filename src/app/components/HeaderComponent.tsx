"use client"
import { redirect } from 'next/navigation';
import Link from 'next/link';

import { useAuthTokenMutation } from '@/auth';
import { ArrowRightStartOnRectangleIcon } from '@heroicons/react/24/solid'
import { removeAccessToken, removeRefreshToken } from '@/helpers';
import { toast } from 'sonner';

const HeaderComponent = () => {

    const { userInfoQuery } = useAuthTokenMutation();
    let currentUser = userInfoQuery.data;

    const logoutAccess = () => {
        toast.info('Sure he wants to go out?', {
            action: {
                label: 'Sure',
                onClick: () => {
                    removeRefreshToken();
                    removeAccessToken()
                    return redirect("/auth/signin");
                }
            },
        })
    }

    return (
        <>
            <header className='shadow-md font-sans tracking-wide relative z-50'>

                <section className='py-2 bg-[#007bff] text-white text-right px-10'>
                    <div className='text-sm'>
                        <strong className="mx-3">Usuario:</strong>{currentUser?.name}
                        <strong className="mx-3">Email:</strong>{currentUser?.email}
                        <button onClick={() => logoutAccess()}
                            className='bg-red-600 ml-4 rounded px-3 py-1 text-white'>
                            <div className='flex flex-row items-center justify-center'>
                                Salir <ArrowRightStartOnRectangleIcon className="size-5 text-white-500" />
                            </div>
                        </button>
                    </div>
                </section>

                <div className='flex flex-wrap items-center justify-between gap-4 px-10 py-4 bg-white min-h-[70px]'>

                    <img src="https://images.freeimages.com/fic/images/icons/2796/metro_uinvert_dock/256/tasks.png" alt="logo" className='h-10' />

                    <div id="collapseMenu"
                        className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>

                        <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
                                <path
                                    d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                    data-original="#000000"></path>
                                <path
                                    d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>

                        <ul className='lg:flex lg:gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>

                            <li className='mb-6 hidden max-lg:block'>
                                <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
                                </a>
                            </li>

                            <li className='max-lg:border-b max-lg:py-3 px-3'>
                                <Link href={'/dashboard/home'}
                                    className='hover:text-[#007bff] text-[#007bff] block font-bold text-[15px]'>
                                    TODO LIST
                                </Link>
                            </li>

                        </ul>

                    </div>



                    <div className='flex max-lg:ml-auto'>
                        <button id="toggleOpen" className='lg:hidden'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderComponent