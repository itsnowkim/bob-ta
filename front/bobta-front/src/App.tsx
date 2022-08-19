import React, {useState} from 'react'
import {ThemeProvider} from 'styled-components'
import {QueryClient, QueryClientProvider, useQuery} from '@tanstack/react-query'
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import {IndexPage, Page404, Create, Result, DetectionError} from './pages'
import {light, dark} from './styles'

const KAKAO_APP_KEY = process.env.REACT_APP_KAKAO_KEY
// @ts-ignore
window?.Kakao.init(KAKAO_APP_KEY)

const queryClient = new QueryClient()

function App() {
  const isBrowserDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  return (
    <ThemeProvider theme={isBrowserDarkMode == true ? dark : light}>
      <QueryClientProvider client={queryClient}>
        <div className="app">
          <BrowserRouter>
            <Routes>
              {/* 루트 경로는 index로 redirection */}
              <Route path="/" element={<Navigate to="/index" />} />
              <Route path="/index" element={<IndexPage />} />
              <Route path="/create" element={<Create />} />
              <Route path="/result/:groupId" element={<Result />} />
              <Route path="/error" element={<DetectionError />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
