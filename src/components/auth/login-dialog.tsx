"use client";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import LoginForm from "./loginForm";
import SignUpForm from "./SignUpForm";

// import FormSchema from "@/schemas"

const LoginDialog = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setIsSignUp(false);
    }
  };

  return (
    <Dialog onOpenChange={(isOpen) => handleClose(isOpen)}>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white transition-transform ease-in-out duration-300">
        <DialogHeader className="w-full">
          <DialogTitle className="w-full">
            {isSignUp ? "Create an account" : "Login to your account"}
          </DialogTitle>
          {/* <DialogDescription>Login to continue</DialogDescription> */}
        </DialogHeader>
        <div className="flex items-center gap-4 w-full">
          {isSignUp ? <SignUpForm /> : <LoginForm />}
        </div>

        <DialogFooter className=" w-full flex overflow-hidden justify-start">
          <div className={cn("flex gap-1 justify-center w-full ")}>
            <p className=" text-center">Dont have an account? </p>
            <button
              onClick={() => {
                if (isSignUp) {
                  setIsSignUp(false);
                } else {
                  setIsSignUp(true);
                }
              }}
              className="hover:underline"
            >
              {isSignUp ? "sign in" : "sign up"}
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
