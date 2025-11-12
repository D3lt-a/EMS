import { Building2, Users, DollarSign, FileText, LogOut, Menu, X } from 'lucide-react';


export default function Dashboard({ stats }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-blue-500">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">Total Employees</p>
                        <p className="text-3xl font-bold text-gray-800">{stats.totalEmployees}</p>
                    </div>
                    <Users className="text-blue-500" size={40} />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-green-500">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">Departments</p>
                        <p className="text-3xl font-bold text-gray-800">{stats.totalDepartments}</p>
                    </div>
                    <Building2 className="text-green-500" size={40} />
                </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-purple-500">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-gray-500 text-sm">Latest Payroll</p>
                        <p className="text-3xl font-bold text-gray-800">
                            {new Intl.NumberFormat('en-RW', { style: 'currency', currency: 'RWF' }).format(stats.latestPayroll)}
                        </p>
                    </div>
                    <DollarSign className="text-purple-500" size={40} />
                </div>
            </div>
        </div>
    );
}