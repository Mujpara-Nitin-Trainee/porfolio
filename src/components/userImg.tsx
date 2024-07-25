import Image from "next/image"

export const UserImg = () => {
  return (
    <div>
      <Image
        src="/portfolioLogo.png"
        alt="User Logo"
        width={200}
        height={200}
      />
    </div>
  )
}