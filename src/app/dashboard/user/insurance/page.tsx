
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield } from 'lucide-react';

export default function InsurancePage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Insurance</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Shield className="w-5 h-5 mr-2 text-primary"/>Coming Soon</CardTitle>
                <CardDescription>This feature is currently under development. Soon you'll be able to manage your health insurance details here.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>We are working to provide you with easy access to your insurance information for emergencies and claims. Stay tuned!</p>
            </CardContent>
        </Card>
    </div>
  )
}
