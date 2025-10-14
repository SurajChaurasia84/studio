import Link from "next/link";
import {
  User,
  Bell,
  BookOpen,
  Settings as SettingsIcon,
  LogOut,
  ChevronRight,
} from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { userProfile } from "@/lib/data";

const settingsItems = [
  { icon: User, text: "Account", href: "#" },
  { icon: BookOpen, text: "Classes", href: "#" },
  { icon: Bell, text: "Notifications", href: "#" },
  { icon: SettingsIcon, text: "General", href: "#" },
];

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-6">
        <h1 className="font-headline text-2xl font-bold">Settings</h1>
      </header>

      <main className="space-y-8">
        <Card className="overflow-hidden">
          <CardContent className="flex items-center gap-4 p-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
              <AvatarFallback>
                {userProfile.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="font-headline text-xl font-semibold">
                {userProfile.name}
              </h2>
              <p className="text-muted-foreground">+1 (123) 456-7890</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <ul className="divide-y">
            {settingsItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="flex items-center justify-between p-4 transition-colors hover:bg-secondary/50"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="h-5 w-5 text-muted-foreground" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </Link>
              </li>
            ))}
          </ul>
        </Card>

        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="w-full">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure you want to logout?</AlertDialogTitle>
              <AlertDialogDescription>
                You will be returned to the login screen.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <Link href="/" passHref>
                <AlertDialogAction className="bg-destructive hover:bg-destructive/90">Logout</AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </main>
    </div>
  );
}
