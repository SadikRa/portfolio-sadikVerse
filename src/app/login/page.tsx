/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { SiGithub, SiGoogle } from "react-icons/si";
import { useLoginMutation } from "@/redux/features/User/userApi";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { verifyToken } from "@/utils/verifyToken";
import { useAppDispatch } from "@/redux/hook";
import { setUser, TUser } from "@/redux/features/User/userSlice";
import { ModeToggle } from "@/components/mode-toggle";

export type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [login] = useLoginMutation();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      router.push("/");
      toast.success("Logged in successfully", { id: toastId });
    } catch (error) {
      toast.error("Failed to login", { id: toastId });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md shadow-lg bg-card border border-border">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-primary">
              Login to Your Account
            </CardTitle>
            <div>
              <ModeToggle />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
              disabled
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
            >
              Login
            </Button>

            {/* Signup Link */}
            <p className="text-sm text-center text-muted-foreground">
              Don`t have an account?{" "}
              <Link
                href="/register"
                className="text-primary hover:underline font-medium"
              >
                Sign up
              </Link>
            </p>
          </form>

          {/* Social Login */}
          <div className="mt-6">
            <p className="text-sm text-center text-muted-foreground mb-4">
              Or continue with
            </p>
            <div className="flex justify-center space-x-4">
              {/* GitHub Login Button */}
              <Button
                variant="outline"
                className="w-12 h-12 p-0 rounded-full"
                onClick={() =>
                  signIn("github", {
                    callbackUrl: "https://sadikverse.vercel.app",
                  })
                }
              >
                <SiGithub className="w-6 h-6" />
              </Button>

              {/* Google Login Button */}
              <Button
                variant="outline"
                className="w-12 h-12 p-0 rounded-full"
                onClick={() =>
                  signIn("google", {
                    callbackUrl: "https://sadikverse.vercel.app/api/auth/callback/google",
                  })
                }
              >
                <SiGoogle className="w-6 h-6 text-red-500" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
