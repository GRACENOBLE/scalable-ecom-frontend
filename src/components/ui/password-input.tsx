"use client";
import { useState } from "react";
import { Input } from "./input";
import { Label } from "./label";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = ({ label }: { label: string }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative">
      <Label htmlFor="username" className="text-right">
        {label}
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
  );
};

export default PasswordInput;
