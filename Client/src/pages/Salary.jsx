import { useState } from 'react';
import { mockSalaries, mockEmployees } from '../assets/data';

export default function SalaryManagement() {
    const [salaries, setSalaries] = useState([...mockSalaries]);
    const [employees] = useState([...mockEmployees]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        employeeNumber: '',
        grossSalary: '',
        totalDeduction: '',
        month: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const emp = employees.find(e => e.employeeNumber === formData.employeeNumber);
        const netSalary = parseFloat(formData.grossSalary) - parseFloat(formData.totalDeduction);

        const newSalary = {
            salaryID: editingId || Date.now(),
            employeeNumber: formData.employeeNumber,
            firstName: emp.firstName,
            lastName: emp.lastName,
            position: emp.position,
            departmentName: emp.departmentName,
            grossSalary: parseFloat(formData.grossSalary),
            totalDeduction: parseFloat(formData.totalDeduction),
            netSalary: netSalary,
            month: formData.month
        };

        if (editingId) {
            setSalaries(salaries.map(sal =>
                sal.salaryID === editingId ? newSalary : sal
            ));
            alert('Salary record updated successfully');
        } else {
            setSalaries([...salaries, newSalary]);
            alert('Salary record created successfully');
        }

        resetForm();
    };

    const handleDelete = (id) => {
        if (window.confirm('Delete this salary record?')) {
            setSalaries(salaries.filter(sal => sal.salaryID !== id));
            alert('Salary record deleted');
        }
    };

    const resetForm = () => {
        setFormData({ employeeNumber: '', grossSalary: '', totalDeduction: '', month: '' });
        setEditingId(null);
        setShowForm(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Salary Management</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    {showForm ? 'Cancel' : 'Add Salary Record'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">{editingId ? 'Edit' : 'Add'} Salary Record</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                            value={formData.employeeNumber}
                            onChange={(e) => setFormData({ ...formData, employeeNumber: e.target.value })}
                            className="px-3 py-2 border rounded-md md:col-span-2"
                            required
                        >
                            <option value="">Select Employee</option>
                            {employees.map(e => (
                                <option key={e.employeeNumber} value={e.employeeNumber}>
                                    {e.firstName} {e.lastName} ({e.employeeNumber})
                                </option>
                            ))}
                        </select>
                        <input
                            type="number"
                            placeholder="Gross Salary"
                            value={formData.grossSalary}
                            onChange={(e) => setFormData({ ...formData, grossSalary: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="number"
                            placeholder="Total Deduction"
                            value={formData.totalDeduction}
                            onChange={(e) => setFormData({ ...formData, totalDeduction: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            type="month"
                            value={formData.month ? formData.month.substring(0, 7) : ''}
                            onChange={(e) => setFormData({ ...formData, month: e.target.value + '-01' })}
                            className="px-3 py-2 border rounded-md md:col-span-2"
                            required
                        />
                        <button type="submit" className="md:col-span-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                            {editingId ? 'Update' : 'Create'} Salary Record
                        </button>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Employee</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Gross</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Deduction</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Net</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {salaries.map(sal => (
                            <tr key={sal.salaryID}>
                                <td className="px-4 py-3 text-sm">{sal.firstName} {sal.lastName}</td>
                                <td className="px-4 py-3 text-sm">{sal.position}</td>
                                <td className="px-4 py-3 text-sm">{new Date(sal.month).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</td>
                                <td className="px-4 py-3 text-sm text-right">{Number(sal.grossSalary).toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right">{Number(sal.totalDeduction).toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm text-right font-semibold">{Number(sal.netSalary).toLocaleString()}</td>
                                <td className="px-4 py-3 text-sm">
                                    <button onClick={() => handleDelete(sal.salaryID)} className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}