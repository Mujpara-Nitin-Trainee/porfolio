import { UserImg } from "@/components/userImg";
import { UserInfo } from "@/components/userInfo";

export default function Dashboard() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex items-center">
        <UserInfo />
        <UserImg />
      </div>
    </div>
  )
}
