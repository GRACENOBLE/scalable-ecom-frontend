import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import PasswordInput from "../ui/password-input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SignUpForm = () => {
  return (
    <form
      action=""
      className={cn("flex flex-col gap-2 mb-4 mt-2 shrink-0 w-full")}
    >
      <div>
        <Label htmlFor="name" className="text-right">
          Email
        </Label>
        <Input
          id="name"
          placeholder="example@email.com"
          className="col-span-3"
        />
      </div>
      <PasswordInput label={"Password"} />
      <PasswordInput label={"Repeat Password"} />
      <Button className="mt-6">Submit</Button>
    </form>
  );
};

export default SignUpForm;
