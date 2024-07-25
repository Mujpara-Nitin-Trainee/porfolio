'use client'
import { Button } from "@/Ui/button"
import { Input } from "@/Ui/input"

export const OptimisticExample = () => {

  return (
    <form>
      <Input name='name' placeholder="Please Enter Name" />
      <Button type="button" name="submit" />
    </form>
  )
}