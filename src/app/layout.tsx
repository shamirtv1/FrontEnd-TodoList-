"use client"

import { FC, PropsWithChildren } from "react"
import "@/ui/globals.css"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from 'sonner'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
})

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html className="h-full bg-gray-100">
      <body className="h-full">
        <QueryClientProvider client={queryClient}>
          <Toaster closeButton richColors/>
          {children}
          <ReactQueryDevtools initialIsOpen={true} />
        </QueryClientProvider>
      </body>
    </html >
  )
}


export default RootLayout