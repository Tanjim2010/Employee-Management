"use client";
import { Button } from '@/components/ui/button';
import { Employee, EmployeeState, removeEmployee } from '@/redux/slice';
import { useDispatch, useSelector } from 'react-redux';


export default function ShowEmployee() {
  const employeeData = useSelector((state: EmployeeState) => state.employees);
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className="text-3xl font-bold mt-3 text-center">ShowEmployee</h2>
      <div className='space-y-3'>
        {employeeData.map((item) => (
          <div key={item.id} className='flex gap-3'>
            <h2>{item.id}</h2>
            <h2>{item.name}</h2>
            <Button onClick={() => dispatch(removeEmployee(item.id))}>remove</Button>
          </div>
        ))}
      </div>
    </div>
  );
}
