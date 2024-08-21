"use client"

import { trpc } from "@/app/_trpc/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { httpBatchLink } from "@trpc/client";
import { useState, type PropsWithChildren } from "react"

const TrpcProvider = ({ children }: PropsWithChildren) => {

    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: 'http://localhost:3000/api/trpc'
            })]
    }))

    return (
        <trpc.Provider queryClient={queryClient} client={trpcClient} >
            <QueryClientProvider client={queryClient} >
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default TrpcProvider