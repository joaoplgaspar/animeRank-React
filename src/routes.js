import DefaultPage from 'components/DefaultPage'
import PaginaInicial from 'pages/PaginaInicial'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<DefaultPage/>}>
                <Route index element={<PaginaInicial />}/>
                <Route path='/explorar' />
                <Route path='/minhalista' />
                <Route path='/sobre' />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
