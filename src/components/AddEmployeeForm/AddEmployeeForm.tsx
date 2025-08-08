"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useDispatch } from "react-redux"
import { addEmployee } from "@/redux/slice"

export function AddEmployeeForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const dispatch = useDispatch();
  const handleAddEmployee = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("add") as string
    dispatch(addEmployee(name))
    console.log(name)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Add Employee</CardTitle>
          <CardDescription>
            Enter your employee to create employee.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddEmployee}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="add">Add Employee</Label>
                <Input
                  id="add"
                  name="add"
                  type="text"
                  placeholder="Employee Name"
                  required
                />
              </div>

              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Add
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
