import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { SignUpFormSchema } from "@/schemas";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { HandleSignUp } from "../../../actions";

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatedPassword, setShowRepeatedPassword] = useState(false);
  const form = useForm<z.infer<typeof SignUpFormSchema>>({
    resolver: zodResolver(SignUpFormSchema),
    defaultValues: {
      username: "",
      password: "",
      repeatPassword: "",
    },
  });

  const onSubmit = (data: z.infer<typeof SignUpFormSchema>) => {
    HandleSignUp(data);
    form.reset(); // Reset the form fields after submission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4 mb-4 mt-2 shrink-0 w-full")}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <div className="flex justify-between mb-2">
                    <FormLabel>Username</FormLabel>
                    <FormMessage className="text-danger" />
                  </div>
                  <Input placeholder="shadcn" {...field} />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="">
                  <div className="flex justify-between mb-2">
                    <FormLabel htmlFor="username">Password</FormLabel>
                    <FormMessage className="text-danger" />
                  </div>
                  <div className="relative">
                    <Input
                      id="username"
                      type={showPassword ? "text" : "password"}
                      placeholder=""
                      className="col-span-3"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/4 text-gray-500"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="repeatPassword"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <FormLabel htmlFor="username">Repeat Password</FormLabel>
                    <FormMessage className="text-danger" />
                  </div>
                  <div className="relative">
                    <Input
                      id="username"
                      type={showRepeatedPassword ? "text" : "password"}
                      placeholder=""
                      className="col-span-3"
                      {...field}
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowRepeatedPassword(!showRepeatedPassword)
                      }
                      className="absolute right-3 top-1/4 text-gray-500"
                    >
                      {showRepeatedPassword ? (
                        <EyeOff size={20} />
                      ) : (
                        <Eye size={20} />
                      )}
                    </button>
                  </div>
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <Button className="mt-6">Submit</Button>
      </form>
    </Form>
  );
};

export default SignUpForm;
