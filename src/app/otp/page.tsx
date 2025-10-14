"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
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
import { toast } from "@/hooks/use-toast";

export default function OtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(59);

  useEffect(() => {
    if (timer === 0) return;
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [timer]);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp === "123456") { // Mock "registered" user
      toast({ title: "Login Successful", description: "Welcome back!" });
      router.push("/home");
    } else if (otp === "654321") { // Mock "new" user
        toast({ title: "Verification Successful", description: "Please complete your profile." });
        router.push("/register");
    } else {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "The OTP you entered is incorrect.",
      });
    }
  };
  
  const handleResend = () => {
    setTimer(59);
    toast({ title: "OTP Resent", description: "A new OTP has been sent to your phone." });
  };


  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Enter OTP</CardTitle>
          <CardDescription>
            A 6-digit code was sent to your phone.
            <br />
            (For demo, use 123456 for existing user, 654321 for new user)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleVerify} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="otp">One-Time Password</Label>
              <Input
                id="otp"
                type="text"
                maxLength={6}
                placeholder="- - - - - -"
                className="text-center text-lg tracking-[1.5em]"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
              Verify
            </Button>
          </form>
          <div className="mt-4 flex justify-between text-sm">
            <Button variant="link" onClick={handleResend} disabled={timer > 0} className="p-0 text-accent">
              Resend OTP
            </Button>
            {timer > 0 && <span className="text-muted-foreground">00:{timer < 10 ? `0${timer}` : timer}</span>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
