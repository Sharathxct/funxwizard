import Link from 'next/link';
import { NavigationMenuDemo } from "./NavigationMenuDemo";
import { BsMagic } from "react-icons/bs";
import { ModeToggle } from './ModeToggle';
import SignIn from '@/components/auth/signIn';
import SignOut from '@/components/auth/signOut';
import { auth } from "@/auth";

export default async function Appbar() {
  const session = await auth();

  return (
    <>
      <header className="w-full bg-background dark:border-b dark:borber-white shadow-sm" >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <BsMagic className="h-6 w-6" />
            <span className="text-lg font-semibold">Xwizard</span>
          </Link>
          <NavigationMenuDemo />
          <div className="flex items-center gap-4">
            <ModeToggle />
            {!session ? <SignIn /> : <SignOut />}
          </div>
        </div>
      </header >
    </>
  )
}
