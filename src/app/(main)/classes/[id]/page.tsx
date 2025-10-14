import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { classes as mockClasses, students as mockStudents } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Share2, Link as LinkIcon, Copy } from "lucide-react";

export default function ClassDetailsPage({ params }: { params: { id: string } }) {
  const classInfo = mockClasses.find((c) => c.id === params.id);
  const qrCodeImage = PlaceHolderImages.find(p => p.id === 'qrcode');

  if (!classInfo) {
    notFound();
  }

  const sortedStudents = [...mockStudents].sort((a, b) => a.name.localeCompare(b.name));
  const shareLink = `https://attend.plus/join/${classInfo.id}`;

  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="font-headline text-2xl font-bold">{classInfo.name}</h1>
          <p className="text-muted-foreground">{classInfo.studentCount} members</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Share Class</DialogTitle>
              <DialogDescription>
                Share this link or QR code with your students to let them join. The link expires in 3 days.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col items-center gap-4 py-4">
                {qrCodeImage && (
                    <Image
                        src={qrCodeImage.imageUrl}
                        alt="QR Code"
                        width={200}
                        height={200}
                        data-ai-hint={qrCodeImage.imageHint}
                        className="rounded-lg"
                    />
                )}
                <div className="flex w-full items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">Link</Label>
                        <Input id="link" defaultValue={shareLink} readOnly />
                    </div>
                    <Button type="submit" size="icon">
                        <Copy className="h-4 w-4" />
                    </Button>
                </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      <Tabs defaultValue="students" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="students" className="mt-4">
            <Card>
                <CardContent className="p-0">
                    <ul className="divide-y">
                        {sortedStudents.map(student => (
                            <li key={student.id} className="flex items-center gap-4 p-3">
                                <Image src={student.avatar} alt={student.name} width={40} height={40} className="h-10 w-10 rounded-full object-cover" />
                                <div>
                                    <p className="font-semibold">{student.name}</p>
                                    <p className="text-sm text-muted-foreground">Roll: {student.roll}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="settings" className="mt-4">
            <Card>
                <CardHeader>
                    <CardTitle>Class Settings</CardTitle>
                    <CardDescription>Manage your class details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="className">Class Name</Label>
                        <Input id="className" defaultValue={classInfo.name} />
                    </div>
                    <Button className="bg-accent hover:bg-accent/90">Save Changes</Button>
                    <Separator />
                    <div className="space-y-3">
                        <h3 className="font-medium text-destructive">Danger Zone</h3>
                        <Button variant="destructive">Delete Class</Button>
                        <p className="text-xs text-muted-foreground">This action is permanent and cannot be undone.</p>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
