import { useState } from 'react';
import { mockDepartments, mockEmployees } from '../assets/data';

export default  function EmployeeManagement() {
    const [employees, setEmployees] = useState([...mockEmployees]);
    const [departments] = useState([...mockDepartments]);
    const [showForm, setShowForm] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        employeeNumber: '',
        firstName: '',
        lastName: '',
        position: '',
        address: '',
        telephone: '',
        gender: 'Male',
        hiredDate: '',
        departmentCode: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const dept = departments.find(d => d.departmentCode === formData.departmentCode);
        const newEmployee = {
            ...formData,
            departmentName: dept ? dept.departmentName : ''
        };

        if (editingId) {
            setEmployees(employees.map(emp =>
                emp.employeeNumber === editingId ? newEmployee : emp
            ));
            alert('Employee updated successfully');
        } else {
            setEmployees([...employees, newEmployee]);
            alert('Employee created successfully');
        }

        resetForm();
    };

    const handleEdit = (emp) => {
        setFormData({
            employeeNumber: emp.employeeNumber,
            firstName: emp.firstName,
            lastName: emp.lastName,
            position: emp.position,
            address: emp.address,
            telephone: emp.telephone,
            gender: emp.gender,
            hiredDate: emp.hiredDate,
            departmentCode: emp.departmentCode
        });
        setEditingId(emp.employeeNumber);
        setShowForm(true);
    };

    const handleDelete = (empNum) => {
        if (window.confirm('Delete this employee?')) {
            setEmployees(employees.filter(emp => emp.employeeNumber !== empNum));
            alert('Employee deleted');
        }
    };

    const resetForm = () => {
        setFormData({
            employeeNumber: '',
            firstName: '',
            lastName: '',
            position: '',
            address: '',
            telephone: '',
            gender: 'Male',
            hiredDate: '',
            departmentCode: ''
        });
        setEditingId(null);
        setShowForm(false);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Employee Management</h2>
                <button
                    onClick={() => setShowForm(!showForm)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                    {showForm ? 'Cancel' : 'Add Employee'}
                </button>
            </div>

            {showForm && (
                <div className="bg-white rounded-lg shadow p-6 mb-6">
                    <h3 className="text-xl font-semibold mb-4">{editingId ? 'Edit' : 'Add'} Employee</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            placeholder="Employee Number"
                            value={formData.employeeNumber}
                            onChange={(e) => setFormData({ ...formData, employeeNumber: e.target.value })}
                            disabled={!!editingId}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            placeholder="Position"
                            value={formData.position}
                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <input
                            placeholder="Address"
                            value={formData.address}
                            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                        />
                        <input
                            placeholder="Telephone"
                            value={formData.telephone}
                            onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                        />
                        <select
                            value={formData.gender}
                            onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <input
                            type="date"
                            value={formData.hiredDate}
                            onChange={(e) => setFormData({ ...formData, hiredDate: e.target.value })}
                            className="px-3 py-2 border rounded-md"
                            required
                        />
                        <select
                            value={formData.departmentCode}
                            onChange={(e) => setFormData({ ...formData, departmentCode: e.target.value })}
                            className="px-3 py-2 border rounded-md md:col-span-2"
                            required
                        >
                            <option value="">Select Department</option>
                            {departments.map(d => (
                                <option key={d.departmentCode} value={d.departmentCode}>
                                    {d.departmentName}
                                </option>
                            ))}
                        </select>
                        <button type="submit" className="md:col-span-2 bg-green-600 text-white py-2 rounded-md hover:bg-green-700">
                            {editingId ? 'Update' : 'Create'} Employee
                        </button>
                    </form>
                </div>
            )}

            <div className="bg-white rounded-lg shadow overflow-x-auto">
                <table className="min-w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emp #</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Telephone</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {employees.map(emp => (
                            <tr key={emp.employeeNumber}>
                                <td className="px-4 py-3 text-sm">{emp.employeeNumber}</td>
                                <td className="px-4 py-3 text-sm">{emp.firstName} {emp.lastName}</td>
                                <td className="px-4 py-3 text-sm">{emp.position}</td>
                                <td className="px-4 py-3 text-sm">{emp.departmentName}</td>
                                <td className="px-4 py-3 text-sm">{emp.telephone}</td>
                                <td className="px-4 py-3 text-sm space-x-2">
                                    <button onClick={() => handleEdit(emp)} className="text-blue-600 hover:underline">Edit</button>
                                    <button onClick={() => handleDelete(emp.employeeNumber)} className="text-red-600 hover:underline">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}