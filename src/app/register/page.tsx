import Link from "next/link";
import Image from "next/image";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Camera } from "lucide-react";

export default function RegisterPage() {
    const userAvatar = PlaceHolderImages.find(p => p.id === 'user1');

    return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline">Create Your Profile</CardTitle>
          <CardDescription>
            Just a few more details to get you started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
                <div className="relative">
                    <Image
                        src={userAvatar?.imageUrl || ''}
                        alt="Profile avatar"
                        width={128}
                        height={128}
                        data-ai-hint={userAvatar?.imageHint}
                        className="h-32 w-32 rounded-full object-cover"
                    />
                    <Button size="icon" className="absolute bottom-0 right-0 rounded-full bg-accent hover:bg-accent/90">
                        <Camera className="h-4 w-4" />
                        <span className="sr-only">Change photo</span>
                    </Button>
                </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="e.g. John Doe" />
            </div>
            <div className="space-y-3">
              <Label>Position</Label>
              <RadioGroup defaultValue="student" className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="teacher" id="r1" />
                  <Label htmlFor="r1">Teacher</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="student" id="r2" />
                  <Label htmlFor="r2">Student</Label>
                </div>
              </RadioGroup>
            </div>
            <Link href="/home" passHref>
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                    Save & Continue
                </Button>
            </Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
