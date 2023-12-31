import Link from "next/link"
 
import { ChevronLeft } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Spinner } from "@/components/common/spinner"
import { buttonVariants } from "@/components/ui/button"
import { UserAuthForm } from "@/components/auth/components/user-auth-form"

export default function LoginPage() {

  return (
    <main className="flex h-screen items-center justify-center">
      
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[320px]">
        <div className="flex flex-col text-center">
          <Icons.logo className="mx-auto mb-4 h-12 w-12" />
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tighter text-slate-900 dark:text-slate-50">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Click continue to login
            </p>
          </div>
        </div>
        <UserAuthForm type="signin" />
        <p className="px-8 text-center text-sm text-slate-600">
          <Link href="./forget-password">
            Trouble Sigining In ?{" "}
            <span className="underline underline-offset-4">
              Forget Password
            </span>
          </Link>
        </p>
        <p className="px-8 text-center text-sm text-slate-600">
          <Link className="underline underline-offset-4" href="/auth/register">
            Don&apos;t have an account? Sign Up
          </Link>
        </p>
      </div>
    </main>
  )
}