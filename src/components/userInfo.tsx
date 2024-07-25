import { Button } from "@/Ui/button"
import { SocialMediaIcons } from "./socialMedia"

export const UserInfo = () => {
  return (
    <div>
      <p>My Name is</p>
      <h3>Mujpara Nitin</h3>
      <h5>I am a Passionate Software Developer.</h5>
      <SocialMediaIcons />

      <Button type='button' name='Download Resume'></Button>
    </div>
  )
}