
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Stethoscope, ArrowLeft } from "lucide-react";

export default function DoctorAuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="w-full max-w-md">
        <div className="flex justify-start mb-4">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
            </Button>
          </Link>
        </div>
        <Card>
          <CardHeader className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-foreground ml-2">
                SavoHealth
              </h1>
            </div>
            <CardTitle className="text-2xl">
              {isLogin ? "Doctor Login" : "Doctor Registration"}
            </CardTitle>
            <CardDescription>
              {isLogin
                ? "Enter your credentials to access your dashboard."
                : "Create a professional account."}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLogin ? (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="dr@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="full-name">Full Name</Label>
                    <Input id="full-name" placeholder="Dr. Jane Smith" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone-number">Phone Number</Label>
                    <Input id="phone-number" placeholder="+1 234 567 890" required />
                  </div>
                </div>
                 <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="age">Age</Label>
                    <Input id="age" type="number" placeholder="42" required />
                  </div>
                   <div className="space-y-2">
                    <Label htmlFor="photo">Photo</Label>
                    <Input id="photo" type="file" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Clinic Address</Label>
                  <Input id="address" placeholder="123 Health St, Wellness City" required />
                </div>
                 <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="dr@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  Create Account
                </Button>
              </div>
            )}
            <div className="mt-4 text-center text-sm">
              {isLogin ? "Not a registered doctor?" : "Already have an account?"}{" "}
              <Button variant="link" onClick={() => setIsLogin(!isLogin)} className="p-0">
                {isLogin ? "Sign up" : "Sign in"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
