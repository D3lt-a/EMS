import React from 'react'
import { Building2, Users, DollarSign, FileText, LogOut, Menu, X } from 'lucide-react';
import Login from './LogIn.jsx';

function NavBar({ currentPage, setCurrentPage }) {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    
    const handleLogout = () => {
        setIsAuthenticated(false);
        setCurrentPage('dashboard');
    };

    if (!isAuthenticated) {
        return <Login onLogin={() => setIsAuthenticated(true)} />;
    }
    
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: Building2 },
        { id: 'employees', label: 'Employees', icon: Users },
        { id: 'salaries', label: 'Salaries', icon: DollarSign },
        { id: 'reports', label: 'Reports', icon: FileText }
    ]
    
    return (
        <nav className="bg-linear-to-r from-slate-900 to-slate-800 text-white shadow-xl border-b border-slate-700">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    <h1 className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">EPMS - SmartPark</h1>

                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden hover:bg-slate-700 p-2 rounded transition-colors duration-200"
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>

                    <div className="hidden md:flex items-center space-x-2">
                        {menuItems.map(item => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => setCurrentPage(item.id)}
                                    className={`px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                                        currentPage === item.id 
                                            ? 'bg-linear-to-r from-purple-600 to-blue-600 shadow-lg' 
                                            : 'hover:bg-slate-700'
                                    }`}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </button>
                            );
                        })}
                        <button
                            onClick={handleLogout}
                            className="px-4 py-2 rounded-md hover:bg-red-600/20 text-red-400 hover:text-red-300 flex items-center gap-2 transition-all duration-300"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden pb-4 space-y-2 animate-slideDown">
                        {menuItems.map(item => {
                            const Icon = item.icon;
                            return (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        setCurrentPage(item.id);
                                        setMobileMenuOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 rounded-md flex items-center gap-2 transition-all duration-300 ${
                                        currentPage === item.id 
                                            ? 'bg-linear-to-r from-purple-600 to-blue-600' 
                                            : 'hover:bg-slate-700'
                                    }`}
                                >
                                    <Icon size={18} />
                                    {item.label}
                                </button>
                            );
                        })}
                        <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 rounded-md hover:bg-red-600/20 text-red-400 hover:text-red-300 flex items-center gap-2 transition-all duration-300"
                        >
                            <LogOut size={18} />
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar
