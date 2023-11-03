import Link from "next/link";
import { ModeToggle } from "~/components/mode-toggle";
import { getServerAuthSession } from "~/server/auth";
import { buttonVariants } from "~/components/ui/button";

export async function SiteHeader() {
  const session = await getServerAuthSession();

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 items-center">
        {/* <MainNav />
        <MobileNav /> */}
        <Link href="/">Comida Calc</Link>
        <div className="ml-2">
          <ModeToggle />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <div className="w-auto flex-none">
            {session && <span>{session.user?.name}</span>}
          </div>
          <nav className="flex items-center ">
            <Link
              className={buttonVariants({ variant: "outline" })}
              href={session ? "/api/auth/signout" : "/api/auth/signin"}
            >
              {session ? "Sign out" : "Sign in"}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
