
'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlarmClock, Bell, PlusCircle, Trash2 } from "lucide-react";
import { cn } from '@/lib/utils';


type Reminder = {
    id: number;
    medication: string;
    dosage: string;
    time: string;
    date: string;
}

export default function RemindersPage() {
    const [reminders, setReminders] = useState<Reminder[]>([]);
    const [medication, setMedication] = useState('');
    const [dosage, setDosage] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState<string>(new Date().toISOString().split('T')[0]);

    const addReminder = () => {
        if (!medication || !time || !date) return;
        const newReminder: Reminder = {
            id: Date.now(),
            medication,
            dosage,
            time,
            date
        };
        setReminders([...reminders, newReminder]);
        setMedication('');
        setDosage('');
        setTime('');
    };

    const deleteReminder = (id: number) => {
        setReminders(reminders.filter(r => r.id !== id));
    };

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const userTimezoneOffset = date.getTimezoneOffset() * 60000;
        return new Date(date.getTime() + userTimezoneOffset).toLocaleDateString(undefined, {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Medication Reminders</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><PlusCircle className="w-5 h-5 text-primary"/> Add New Reminder</CardTitle>
                <CardDescription>Set up a new reminder for your medication.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="medication">Medication Name</Label>
                    <Input id="medication" placeholder="e.g., Paracetamol" value={medication} onChange={e => setMedication(e.target.value)} />
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="dosage">Dosage (optional)</Label>
                    <Input id="dosage" placeholder="e.g., 500mg" value={dosage} onChange={e => setDosage(e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="date-input">Date</Label>
                        <Input id="date-input" type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="time">Time</Label>
                        <Input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} />
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button onClick={addReminder} disabled={!medication || !time || !date}>Add Reminder</Button>
            </CardFooter>
        </Card>

         <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2"><Bell className="w-5 h-5 text-primary"/> Your Reminders</CardTitle>
                <CardDescription>You have {reminders.length} upcoming reminders.</CardDescription>
            </CardHeader>
            <CardContent>
                {reminders.length === 0 ? (
                    <p className="text-muted-foreground text-center">No reminders set yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {reminders.map(reminder => (
                            <li key={reminder.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <div>
                                    <p className="font-semibold">{reminder.medication} <span className="text-sm text-muted-foreground font-normal">{reminder.dosage}</span></p>
                                    <p className="text-sm text-muted-foreground">{formatDate(reminder.date)} at {reminder.time}</p>
                                </div>
                                <Button variant="ghost" size="icon" onClick={() => deleteReminder(reminder.id)}>
                                    <Trash2 className="h-4 w-4 text-destructive" />
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
