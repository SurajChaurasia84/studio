"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { students as mockStudents, classes as mockClasses } from "@/lib/data";

type Student = typeof mockStudents[0];

function StudentAttendanceRow({ student }: { student: Student }) {
  const [status, setStatus] = useState(student.status);

  return (
    <div className="flex items-center justify-between rounded-lg bg-card p-3 shadow-sm transition-colors hover:bg-secondary/50">
      <div className="flex items-center gap-3">
        <Image
          src={student.avatar}
          alt={student.name}
          width={40}
          height={40}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{student.name}</p>
          <p className="text-sm text-muted-foreground">Roll: {student.roll}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <Button
          size="sm"
          variant={status === 'present' ? 'default' : 'outline'}
          onClick={() => setStatus('present')}
          className="w-20"
        >
          Present
        </Button>
        <Button
          size="sm"
          variant={status === 'absent' ? 'destructive' : 'outline'}
          onClick={() => setStatus('absent')}
          className="w-20"
        >
          Absent
        </Button>
      </div>
    </div>
  );
}

export default function AttendancePage() {
  const [time, setTime] = useState(new Date());
  const [selectedClass, setSelectedClass] = useState(mockClasses[0].id);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const sortedStudents = [...mockStudents].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="min-h-screen bg-background p-4">
      <header className="mb-6 space-y-4">
        <h1 className="font-headline text-2xl font-bold">Mark Attendance</h1>
        <Card className="p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Select onValueChange={setSelectedClass} defaultValue={selectedClass}>
              <SelectTrigger className="w-full sm:w-[280px]">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                {mockClasses.map((c) => (
                  <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <div className="text-center text-sm text-muted-foreground sm:text-right">
              <p className="font-semibold">{time.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>{time.toLocaleTimeString()}</p>
            </div>
          </div>
        </Card>
      </header>
      
      <main className="space-y-3">
        {sortedStudents.map((student) => (
          <StudentAttendanceRow key={student.id} student={student} />
        ))}
      </main>

      <footer className="mt-6">
        <Button className="w-full bg-accent text-lg hover:bg-accent/90">Submit Attendance</Button>
      </footer>
    </div>
  );
}
