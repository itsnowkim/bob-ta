import React from "react"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <BrowserRouter>
          <Routes></Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App
