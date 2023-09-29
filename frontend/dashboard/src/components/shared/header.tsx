import React from "react"
import Link from "next/link"


import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/common/main-nav"
import { ThemeToggler } from "@/components/theme/toggler"
import { buttonVariants } from "@/components/ui/button"
import UserDropdownMenu from "@/components/user/dropdown-menu"

export function SiteHeader() {
const isAuth = false
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-900 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                  className: "text-slate-700 dark:text-slate-400",
                })}
              >
                <Icons.google className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <ThemeToggler />
            {isAuth ? (
              <UserDropdownMenu />
            ) : (
              <Link
                rel="noreferrer"
                href="/auth/login"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                })}
              >
                Login
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}