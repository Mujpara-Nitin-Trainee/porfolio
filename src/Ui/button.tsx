import { buttonAttributes } from "@/types/common"

export const Button = ({ type, name }: { type: buttonAttributes, name: string }) => {
  return (
    <button type={type} value={name}>{name}</button>
  )
}