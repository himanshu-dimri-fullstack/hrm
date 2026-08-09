import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Pim from './pages/Pim'
import DashboardLayout from './components/DashboardLayout'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pim" element={<Pim />} />
      </Route>

    </Routes>
  )
}

export default App