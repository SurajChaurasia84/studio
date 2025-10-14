import Link from "next/link";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { classes as mockClasses } from "@/lib/data";
import { ChevronRight, Plus, Users } from "lucide-react";

export default function ClassesPage() {
  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="font-headline text-2xl font-bold">Your Classes</h1>
      </header>

      <main className="space-y-3">
        {mockClasses.map((c) => (
          <Link href={`/classes/${c.id}`} key={c.id}>
            <Card className="transition-all hover:bg-secondary/50 hover:shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="font-headline">{c.name}</CardTitle>
                  <CardDescription className="mt-1 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {c.studentCount} students
                  </CardDescription>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </CardHeader>
            </Card>
          </Link>
        ))}
      </main>
      
      <Button
        size="icon"
        className="fixed bottom-20 right-4 h-14 w-14 rounded-full bg-accent shadow-lg hover:bg-accent/90 md:hidden"
      >
        <Plus className="h-8 w-8" />
        <span className="sr-only">Create Class</span>
      </Button>
    </div>
  );
}
