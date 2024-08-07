import { Link, useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import wavehaikei from "../assets/wavehaikei.svg";

export function LoginForm() {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center h-screen bg-center bg-cover"
      style={{ backgroundImage: `url(${wavehaikei})` }}
    >
      <Card className="max-w-md mx-auto shadow-md shadow-white-2xl h-fit">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold">Welcome Back!</CardTitle>
          <CardDescription className="text-gray-600">
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="inline-block ml-auto text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button
              onClick={(e) => {
                e.preventDefault();
                navigate("/");
              }}
              type="submit"
              className="w-full "
            >
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
          <div className="mt-4 text-sm text-center">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
