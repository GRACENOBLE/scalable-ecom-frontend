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

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/utils";

const LoginDialog = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const handleSignup = () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader className="w-full">
          <DialogTitle className="w-full flex overflow-hidden">
            <p
              className={cn("w-full shrink-0", {
                "-translate-x-[100%]": isSignUp,
              })}
            >
              Login to your account
            </p>
            <p
              className={cn("w-full shrink-0", {
                "-translate-x-[100%]": isSignUp,
              })}
            >
              Create an account
            </p>
          </DialogTitle>
          {/* <DialogDescription>Login to continue</DialogDescription> */}
        </DialogHeader>
        <form className="flex flex-col gap-2 mb-6 mt-2">
          <div className="">
            <Label htmlFor="name" className="text-right">
              Email
            </Label>
            <Input
              id="name"
              placeholder="example@email.com"
              className="col-span-3"
            />
          </div>
          <div className="relative">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="username"
              type={showPassword ? "text" : "password"}
              placeholder=""
              className="col-span-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[50%] translate-y-[12%] text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div
            className={cn("relative", {
              hidden: !isSignUp,
            })}
          >
            <Label htmlFor="username" className="text-right">
              Repeat Password
            </Label>
            <Input
              id="username"
              type={showPassword ? "text" : "password"}
              placeholder=""
              className="col-span-3"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[50%] translate-y-[12%] text-gray-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </form>
        <Button className="mb-4">Submit</Button>
        <DialogFooter className=" border w-full flex overflow-hidden justify-start">
          <div
            className={cn("flex gap-1 justify-center w-full shrink-0", {
              "-translate-x-[100%]": isSignUp,
            })}
          >
            <p className=" text-center">Dont have an account? </p>
            <button
              onClick={() => {
                setIsSignUp(true);
              }}
              className="hover:underline"
            >
              sign up
            </button>
          </div>
          <div
            className={cn("flex gap-1 justify-center w-full shrink-0", {
              "-translate-x-[100%]": isSignUp,
            })}
          >
            <p className=" text-center">Already have an account?</p>
            <button
              onClick={() => {
                setIsSignUp(false);
              }}
              className="hover:underline"
            >
              sign in
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
