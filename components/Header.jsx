import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-10 py-3 border-b border-white/7 backdrop-blur-xl">
      {/*Logo*/}
      Prept
      <div className="flex items-center gap-3">
        <Show when="signed-out">
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
