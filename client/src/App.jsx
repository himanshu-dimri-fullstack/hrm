import React from 'react'
import Login from './pages/Login'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import PimView from './pages/pim/PimView'
import DashboardLayout from './components/DashboardLayout'
import PimLayout from './components/PimLayout'
import PimAdd from './pages/pim/PimAdd'
import PimEdit from './pages/pim/PimEdit'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pim" element={<PimLayout />} >
          <Route path="/pim/view" element={<PimView />} />
          <Route path="/pim/add" element={<PimAdd />} />
          <Route path="/pim/edit" element={<PimEdit />} />
        </Route>
      </Route>

    </Routes>
  )
}

export default App