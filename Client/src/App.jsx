import React, { useState } from 'react';
import { mockDepartments, mockEmployees, mockSalaries } from './assets/data';
import NavBar from './components/NavBar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EmployeeManagement from './pages/Employees.jsx';
import SalaryManagement from './pages/Salary.jsx';
import Reports from './pages/Reports.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [stats] = useState({
    totalEmployees: mockEmployees.length,
    totalDepartments: mockDepartments.length,
    latestPayroll: mockSalaries.reduce((sum, sal) => sum + sal.netSalary, 0)
  });

  return (
    <div className="min-h-screen bg-slate-900">
      <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {currentPage === 'dashboard' && <Dashboard stats={stats} />}
        {currentPage === 'employees' && <EmployeeManagement />}
        {currentPage === 'salaries' && <SalaryManagement />}
        {currentPage === 'reports' && <Reports />}
      </main>
    </div>
  );
}