import { AddEmployeeForm } from "@/components/AddEmployeeForm/AddEmployeeForm"

export default function Page() {
  return (
    <div className="flex min-h-[calc(100vh-100px)] w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <AddEmployeeForm />
      </div>
    </div>
  )
}
