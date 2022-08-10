import React from "react"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { IndexPage, Page404, TemplatePage, Create } from "./pages"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/index" element={<IndexPage />} />
            <Route path="/create" element={<Create />}></Route>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}

export default App
