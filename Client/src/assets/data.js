// Static mock data
const mockDepartments = [
    { departmentCode: 'IT001', departmentName: 'Information Technology', grossSalary: 800000 },
    { departmentCode: 'HR001', departmentName: 'Human Resources', grossSalary: 600000 },
    { departmentCode: 'FIN001', departmentName: 'Finance', grossSalary: 750000 },
    { departmentCode: 'OPS001', departmentName: 'Operations', grossSalary: 550000 }
];

const mockEmployees = [
    {
        employeeNumber: 'EMP001',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        address: '123 Kigali St, KG 10 Ave',
        telephone: '0788123456',
        gender: 'Male',
        hiredDate: '2023-01-15',
        departmentCode: 'IT001',
        departmentName: 'Information Technology'
    },
    {
        employeeNumber: 'EMP002',
        firstName: 'Jane',
        lastName: 'Smith',
        position: 'HR Manager',
        address: '456 Nyarugenge, KN 5 Rd',
        telephone: '0788234567',
        gender: 'Female',
        hiredDate: '2022-06-20',
        departmentCode: 'HR001',
        departmentName: 'Human Resources'
    },
    {
        employeeNumber: 'EMP003',
        firstName: 'Alice',
        lastName: 'Johnson',
        position: 'Accountant',
        address: '789 Gasabo, KG 7 St',
        telephone: '0788345678',
        gender: 'Female',
        hiredDate: '2023-03-10',
        departmentCode: 'FIN001',
        departmentName: 'Finance'
    },
    {
        employeeNumber: 'EMP004',
        firstName: 'Robert',
        lastName: 'Brown',
        position: 'Operations Manager',
        address: '321 Kicukiro Ave',
        telephone: '0788456789',
        gender: 'Male',
        hiredDate: '2022-11-05',
        departmentCode: 'OPS001',
        departmentName: 'Operations'
    },
    {
        employeeNumber: 'EMP005',
        firstName: 'Sarah',
        lastName: 'Williams',
        position: 'Senior Developer',
        address: '654 Remera St',
        telephone: '0788567890',
        gender: 'Female',
        hiredDate: '2023-07-20',
        departmentCode: 'IT001',
        departmentName: 'Information Technology'
    }
];

const mockSalaries = [
    {
        salaryID: 1,
        employeeNumber: 'EMP001',
        firstName: 'John',
        lastName: 'Doe',
        position: 'Software Engineer',
        departmentName: 'Information Technology',
        grossSalary: 800000,
        totalDeduction: 120000,
        netSalary: 680000,
        month: '2025-01-01'
    },
    {
        salaryID: 2,
        employeeNumber: 'EMP002',
        firstName: 'Jane',
        lastName: 'Smith',
        position: 'HR Manager',
        departmentName: 'Human Resources',
        grossSalary: 600000,
        totalDeduction: 90000,
        netSalary: 510000,
        month: '2025-01-01'
    },
    {
        salaryID: 3,
        employeeNumber: 'EMP003',
        firstName: 'Alice',
        lastName: 'Johnson',
        position: 'Accountant',
        departmentName: 'Finance',
        grossSalary: 750000,
        totalDeduction: 112500,
        netSalary: 637500,
        month: '2025-01-01'
    },
    {
        salaryID: 4,
        employeeNumber: 'EMP004',
        firstName: 'Robert',
        lastName: 'Brown',
        position: 'Operations Manager',
        departmentName: 'Operations',
        grossSalary: 550000,
        totalDeduction: 82500,
        netSalary: 467500,
        month: '2025-01-01'
    },
    {
        salaryID: 5,
        employeeNumber: 'EMP005',
        firstName: 'Sarah',
        lastName: 'Williams',
        position: 'Senior Developer',
        departmentName: 'Information Technology',
        grossSalary: 850000,
        totalDeduction: 127500,
        netSalary: 722500,
        month: '2025-01-01'
    }
];

export { mockDepartments, mockEmployees, mockSalaries };