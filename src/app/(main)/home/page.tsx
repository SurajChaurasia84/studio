import Image from "next/image";
import Link from "next/link";
import {
  Bell,
  CalendarPlus,
  Users,
  PieChart,
  BookOpen,
  Users2,
  Clock,
  ChevronRight,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { userProfile, upcomingClasses } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={userProfile.avatar} alt={userProfile.name} />
            <AvatarFallback>
              {userProfile.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-headline text-xl font-semibold">
              {userProfile.name}
            </h1>
            <p className="text-sm text-muted-foreground">{userProfile.position}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <Bell className="h-6 w-6" />
          <span className="sr-only">Notifications</span>
        </Button>
      </header>

      <main className="space-y-6 p-4">
        <section>
          <h2 className="mb-3 font-headline text-lg font-medium">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105">
              <CalendarPlus className="mb-2 h-8 w-8 text-primary" />
              <p className="font-semibold">Add Leave</p>
            </Card>
            <Card className="flex flex-col items-center justify-center p-4 text-center transition-transform hover:scale-105">
              <Users className="mb-2 h-8 w-8 text-primary" />
              <p className="font-semibold">Communities</p>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-headline text-lg font-medium">Analytics Board</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">92.5%</div>
                <p className="text-xs text-muted-foreground">+2.1% from last month</p>
              </CardContent>
            </Card>
             <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Classes</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">This semester</p>
              </CardContent>
            </Card>
            <Card className="col-span-2 md:col-span-1">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">103</div>
                <p className="text-xs text-muted-foreground">Across all classes</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="mb-3 font-headline text-lg font-medium">Upcoming Classes</h2>
          <Card>
            <CardContent className="p-0">
                <ul className="divide-y">
                    {upcomingClasses.map((item) => (
                        <li key={item.id}>
                          <Link href="#" className="flex items-center justify-between p-4 hover:bg-secondary">
                              <div className="flex items-center gap-4">
                                <Clock className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-sm text-muted-foreground">{item.time}</p>
                                </div>
                              </div>
                              <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
