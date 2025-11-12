import { useState } from 'react';
import { mockSalaries } from '../assets/data';

export default function Reports() {
    const [month, setMonth] = useState('2025-01');
    const [report, setReport] = useState(null);

    const loadReport = () => {
        if (!month) return;

        const filteredSalaries = mockSalaries.filter(sal =>
            sal.month.startsWith(month)
        );

        const totals = {
            totalGross: filteredSalaries.reduce((sum, sal) => sum + sal.grossSalary, 0),
            totalDeduction: filteredSalaries.reduce((sum, sal) => sum + sal.totalDeduction, 0),
            totalNet: filteredSalaries.reduce((sum, sal) => sum + sal.netSalary, 0),
            employeeCount: filteredSalaries.length
        };

        const reportData = filteredSalaries.map(sal => ({
            employeeNumber: sal.employeeNumber,
            fullName: `${sal.firstName} ${sal.lastName}`,
            position: sal.position,
            departmentName: sal.departmentName,
            grossSalary: sal.grossSalary,
            totalDeduction: sal.totalDeduction,
            netSalary: sal.netSalary,
            month: sal.month
        }));

        setReport({ report: reportData, totals });
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Monthly Payroll Report</h2>

            <div className="bg-white rounded-lg shadow p-6 mb-6">
                <div className="flex gap-4">
                    <input
                        type="month"
                        value={month}
                        onChange={(e) => setMonth(e.target.value)}
                        className="px-3 py-2 border rounded-md"
                    />
                    <button
                        onClick={loadReport}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                    >
                        Generate Report
                    </button>
                </div>
            </div>

            {report && (
                <>
                    <div className="bg-white rounded-lg shadow p-6 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Summary</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div>
                                <p className="text-gray-500 text-sm">Employees</p>
                                <p className="text-2xl font-bold">{report.totals.employeeCount}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Total Gross</p>
                                <p className="text-2xl font-bold">RWF {report.totals.totalGross.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Total Deductions</p>
                                <p className="text-2xl font-bold">RWF {report.totals.totalDeduction.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-500 text-sm">Total Net</p>
                                <p className="text-2xl font-bold text-green-600">RWF {report.totals.totalNet.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Emp #</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Position</th>
                                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Gross</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Deduction</th>
                                    <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Net</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {report.report.map((row, i) => (
                                    <tr key={i}>
                                        <td className="px-4 py-3 text-sm">{row.employeeNumber}</td>
                                        <td className="px-4 py-3 text-sm">{row.fullName}</td>
                                        <td className="px-4 py-3 text-sm">{row.position}</td>
                                        <td className="px-4 py-3 text-sm">{row.departmentName}</td>
                                        <td className="px-4 py-3 text-sm text-right">{Number(row.grossSalary).toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right">{Number(row.totalDeduction).toLocaleString()}</td>
                                        <td className="px-4 py-3 text-sm text-right font-semibold">{Number(row.netSalary).toLocaleString()}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </div>
    );
}