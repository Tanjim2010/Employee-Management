"use client";
import { Employee, EmployeeState } from '@/redux/slice';
import { useSelector } from 'react-redux';


export default function ShowEmployee() {
  const employeeData = useSelector((state: EmployeeState) => state.employees);

  return (
    <div>
      <h2 className="text-3xl font-bold mt-3 text-center">ShowEmployee</h2>
      {employeeData.map((item) => (
        <div key={item.id} className='flex gap-3'>
          <h2>{item.id}</h2>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
}
