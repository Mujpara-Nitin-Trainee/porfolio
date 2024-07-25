export const Input = ({ name, placeholder }: { name: string, placeholder: string }) => {
  return (
    <>
      <input type='text' name={name} id={name} placeholder={placeholder}></input>
    </>
  )
}