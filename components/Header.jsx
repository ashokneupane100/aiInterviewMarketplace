import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-border bg-background/60 backdrop-blur-xl">
      {/*Logo*/}
      <Link href="/">
        <Image
          src={"/logo.png"}
          alt="prept logo"
          width={100}
          height={100}
          className="h-11 w-auto"
        />
      </Link>

      {/* Redirection Logic */}

      {/* Sign In */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <Show when="signed-out">
          {/* Links */}
          {/*credits*/}
          <SignInButton mode="modal">
            <Button
              variant="ghost"
              className="border border-border hover:border-foreground/30"
            >
              Sign In
            </Button>
          </SignInButton>

          <SignUpButton mode="modal">
            <Button variant="gold">Get Started</Button>
          </SignUpButton>
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </div>
    </nav>
  );
};

export default Header;
