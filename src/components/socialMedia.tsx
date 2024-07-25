import { Button } from "@/Ui/button"

export const SocialMediaIcons = () => {
  return (
    <div className="flex">
      <div className="mx-4"><Button type='button' name='facebook'></Button></div>
      <div className="mx-4"><Button type='button' name='twitter'></Button></div>
      <div className="mx-4"><Button type='button' name='linkdin'></Button></div>
      <div className="mx-4"><Button type='button' name='share'></Button></div>
    </div>
  )
}