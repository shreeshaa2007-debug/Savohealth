
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from 'lucide-react';

export default function DoctorConsultationPage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Doctor Consultation</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Calendar className="w-5 h-5 mr-2 text-primary"/>Coming Soon</CardTitle>
                <CardDescription>This feature is currently under development. Soon you'll be able to book and manage your doctor appointments here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>We are working hard to bring you a seamless doctor consultation experience. Stay tuned!</p>
            </CardContent>
        </Card>
    </div>
  )
}
