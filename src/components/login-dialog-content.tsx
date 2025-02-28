"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const LoginDialog = () => {
  const handleSignup = () => {};
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Login to your account</DialogTitle>
          {/* <DialogDescription>Login to continue</DialogDescription> */}
        </DialogHeader>
        <div className="flex flex-col gap-2 mb-6 mt-2">
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
          <div className="">
            <Label htmlFor="username" className="text-right">
              Password
            </Label>
            <Input
              id="username"
              type="password"
              placeholder=""
              className="col-span-3"
            />
          </div>
        </div>
        <Button className="mb-4">Submit</Button>
        <DialogFooter className="flex justify-center">
          <p className=" text-center">Dont have an account? </p>
          <button onClick={handleSignup} className="hover:underline">
            sign up
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
