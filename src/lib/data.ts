import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

const getImage = (id: string): ImagePlaceholder => 
  PlaceHolderImages.find(img => img.id === id) || PlaceHolderImages[0];

export const userProfile = {
  name: "Dr. Evelyn Reed",
  position: "Teacher",
  avatar: getImage('user1').imageUrl,
};

export const students = [
  { id: '1', name: "Alice Johnson", roll: "101", avatar: getImage('student1').imageUrl, status: "present" },
  { id: '2', name: "Bob Williams", roll: "102", avatar: getImage('student2').imageUrl, status: "absent" },
  { id: '3', name: "Charlie Brown", roll: "103", avatar: getImage('student3').imageUrl, status: "present" },
  { id: '4', name: "Diana Miller", roll: "104", avatar: getImage('student4').imageUrl, status: "present" },
  { id: '5', name: "Ethan Davis", roll: "105", avatar: getImage('student5').imageUrl, status: "absent" },
  { id: '6', name: "Fiona Garcia", roll: "106", avatar: getImage('student6').imageUrl, status: "present" },
  { id: '7', name: "George Rodriguez", roll: "107", avatar: getImage('student7').imageUrl, status: "present" },
  { id: '8', name: "Hannah Wilson", roll: "108", avatar: getImage('student8').imageUrl, status: "present" },
];

export const classes = [
  { id: "cs101", name: "Intro to Computer Science", studentCount: 35, students: students.slice(0, 5) },
  { id: "phy202", name: "Quantum Physics II", studentCount: 22, students: students.slice(2, 7) },
  { id: "eng301", name: "Shakespearean Literature", studentCount: 18, students: students.slice(4, 8) },
  { id: "math404", name: "Advanced Calculus", studentCount: 28, students: students.slice(0, 8) },
];

export const upcomingClasses = [
    { id: 1, name: "Quantum Physics II", time: "10:00 AM - 11:00 AM", location: "Hall C" },
    { id: 2, name: "Advanced Calculus", time: "1:00 PM - 2:30 PM", location: "Room 404" },
];

export const attendanceData = [
  { name: 'Jan', attendance: 80 },
  { name: 'Feb', attendance: 92 },
  { name: 'Mar', attendance: 88 },
  { name: 'Apr', attendance: 95 },
  { name: 'May', attendance: 91 },
  { name: 'Jun', attendance: 85 },
];
