/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useCreateUserMutation } from "@/redux/features/User/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ModeToggle } from "@/components/mode-toggle";

export type UserData = {
  name: string;
  email: string;
  image: string;
  password: string;
};

const RegisterPage = () => {
  const [createUser, { isLoading }] = useCreateUserMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    try {
      const res = await createUser(data).unwrap();

      if (res?.success) {
        toast.success("User created successfully!");
      } else {
        toast.error(res?.message || "Something went wrong!");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to create user");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg bg-card border border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-primary">
              Create an Account
            </CardTitle>
            <div>
              <ModeToggle />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <Label
                htmlFor="name"
                className="text-sm font-medium text-primary"
              >
                Name
              </Label>
              <Input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1"
              />
              {typeof errors.name?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <Label
                htmlFor="email"
                className="text-sm font-medium text-primary"
              >
                Email
              </Label>
              <Input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-1"
              />
              {typeof errors.email?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Image Upload Field */}
            <div>
              <Label
                htmlFor="image"
                className="text-sm font-medium text-primary"
              >
                Profile Picture
              </Label>
              <Input
                {...register("image", { required: "Image is required" })}
                type="text"
                id="image"
                placeholder="give your image link"
              />
              {errors.image?.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <Label
                htmlFor="password"
                className="text-sm font-medium text-primary"
              >
                Password
              </Label>
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                type="password"
                id="password"
                placeholder="Enter your password"
                className="mt-1"
              />
              {typeof errors.password?.message === "string" && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Register
            </Button>
            <p className="text-sm text-center text-muted-foreground">
              Already have an account?
              <Link
                href="/login"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegisterPage;
