"use client"
import { signUpSchema } from "@/zodSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { AxiosError } from "axios";

import { useAuthSignUp } from "@/auth";
import { AuthSignUp } from "@/interfaces";


const SignUpPage = () => {

  const { mutation: mutationSignUp } = useAuthSignUp();

  const { register, handleSubmit, reset,
    formState: { errors, dirtyFields, touchedFields },
  } = useForm<AuthSignUp>({ resolver: zodResolver(signUpSchema) });


  const onSubmit: SubmitHandler<AuthSignUp> = (data) => {
    toast.promise(mutationSignUp.mutateAsync(data), {
      loading: 'Loading...',
      success: async () => {
        reset();
        return `Very good account created successfully`;
      },
      error: (err) => {
        const axiosResp = (err as AxiosError)?.response;
        return (axiosResp?.data as { message: string })?.message;
      }
    });
  }

  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img className="mx-auto h-20 w-auto" style={{ filter: 'grayscale(0.90)', opacity: '0.3' }} src="https://cdn-icons-png.flaticon.com/512/4697/4697260.png" alt="" />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Sign Up new account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

        <form onSubmit={handleSubmit(onSubmit)} method="POST" className="space-y-6">

          <div>
            <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
              Full name
            </label>
            <div className="mt-2">
              <input
                {...register("name")}
                name="name"
                type="text"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {
                (errors.name || (dirtyFields.name || touchedFields.name)) &&
                <p className="text-red-600 text-sm">
                  {errors?.name?.message}
                </p>
              }
            </div>
          </div>


          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                {...register("email")}
                name="email"
                type="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {
                (errors.email || (dirtyFields.email || touchedFields.email)) &&
                <p className="text-red-600 text-sm">
                  {errors?.email?.message}
                </p>
              }
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input
                {...register("password")}
                name="password"
                type="password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
              {
                (errors.password || (dirtyFields.password || touchedFields.password)) &&
                <p className="text-red-600 text-sm">
                  {errors?.password?.message}
                </p>
              }
            </div>
          </div>

          <div>
            <button
              disabled={mutationSignUp.isPending}
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {
                ( mutationSignUp.isPending ) ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    Loading...
                  </>
                ) : 'Create new account'
              }

            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already an acount?{' '}
          <Link href={'/auth/signin'} className="font-semibold text-indigo-600 hover:text-indigo-500">
            SignIn Now
          </Link>
        </p>
        
      </div>
    </>
  )
}

export default SignUpPage;