
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell, Heart, Pill, Stethoscope } from 'lucide-react';

export default function PersonalHistoryPage() {

    const personalDetails = {
        name: "John Doe",
        age: 30,
        bmi: 22.5,
        lifestyle: "Active"
    };

    const medications = [
        { id: 1, name: "Lisinopril", dosage: "10mg", frequency: "Once a day", reason: "High Blood Pressure" },
        { id: 2, name: "Metformin", dosage: "500mg", frequency: "Twice a day", reason: "Type 2 Diabetes" },
    ];

    const previousTreatments = [
        { id: 1, date: "2023-05-15", condition: "Broken Arm", treatment: "Cast and physical therapy", doctor: "Dr. Emily Carter" },
        { id: 2, date: "2022-11-20", condition: "Seasonal Flu", treatment: "Rest and antiviral medication", doctor: "Dr. Ben Adams" },
    ]

  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Personal Health History</h1>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
                <CardHeader>
                    <CardTitle>Your Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Name</span>
                        <span className="font-semibold">{personalDetails.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Age</span>
                        <span className="font-semibold">{personalDetails.age}</span>
                    </div>
                     <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center"><Heart className="w-4 h-4 mr-2 text-primary"/> BMI</span>
                        <span className="font-semibold">{personalDetails.bmi} (Normal)</span>
                    </div>
                     <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center"><Dumbbell className="w-4 h-4 mr-2 text-primary"/> Lifestyle</span>
                        <span className="font-semibold">{personalDetails.lifestyle}</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center"><Pill className="w-5 h-5 mr-2 text-primary"/> Current Medications</CardTitle>
                    <CardDescription>A list of your current prescriptions.</CardDescription>
                </CardHeader>
                <CardContent>
                   <ul className="space-y-4">
                        {medications.map(med => (
                            <li key={med.id} className="p-3 bg-muted/50 rounded-lg">
                                <p className="font-semibold">{med.name} ({med.dosage})</p>
                                <p className="text-sm text-muted-foreground">{med.frequency} - For {med.reason}</p>
                            </li>
                        ))}
                   </ul>
                </CardContent>
            </Card>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Stethoscope className="w-5 h-5 mr-2 text-primary"/>Previous Treatments</CardTitle>
                <CardDescription>A history of your past medical treatments and consultations.</CardDescription>
            </CardHeader>
            <CardContent>
                 <ul className="space-y-4">
                    {previousTreatments.map(treatment => (
                        <li key={treatment.id} className="p-3 bg-muted/50 rounded-lg flex justify-between items-start">
                           <div>
                             <p className="font-semibold">{treatment.condition}</p>
                             <p className="text-sm text-muted-foreground">{treatment.treatment}</p>
                             <p className="text-xs text-muted-foreground mt-1">Consulted with: {treatment.doctor}</p>
                           </div>
                           <span className="text-sm font-medium text-muted-foreground">{treatment.date}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>

    </div>
  )
}
