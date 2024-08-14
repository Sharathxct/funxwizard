import { signIn } from "@/auth";
import { Button } from '@/components/ui/button';
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn('twitter')
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  )
}
