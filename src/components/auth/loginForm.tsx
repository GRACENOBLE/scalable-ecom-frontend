import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { LoginFormSchema } from "@/schemas";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { HandleLogin } from "../../../actions";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const form = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
    HandleLogin(data);
    form.reset(); // Reset the form fields after submission
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("flex flex-col gap-4 mb-4 mt-6 shrink-0 w-full")}
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
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
                <div className="relative">
                  <div className="flex justify-between mb-2">
                    <FormLabel htmlFor="username" className="text-right">
                      Password
                    </FormLabel>
                    <FormMessage className="text-danger" />
                  </div>

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
                    className="absolute right-3 top-[50%] translate-y-[12%] text-gray-500"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
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

export default LoginForm;
