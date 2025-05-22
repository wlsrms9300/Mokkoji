import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// components
import Loading from '@components/common/Loading'
// pages
import AppMain from '@pages/AppMain'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 1,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 2,
        },
        mutations: {
            // queryClient → useMutation → mutate 순으로 오버라이드
            onSuccess: (data: any) => {
                console.log('Mutation success:', data)
            },
            onSettled: (data: any) => {
                console.log('Mutation settled:', data)
            },
            onError: (error: any) => {
                // console.error('Mutation failed:', error)
            },
        },
    },
})

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Suspense fallback={<Loading />}>
                    <Routes>
                        <Route path="/" element={<AppMain />} />
                        <Route path="/auth/expire" element={<></>} />
                    </Routes>
                </Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    )
}

export default App
