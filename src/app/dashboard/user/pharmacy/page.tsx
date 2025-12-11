
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck } from 'lucide-react';

export default function PharmacyPage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Pharmacy</h1>
        </div>
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center"><Truck className="w-5 h-5 mr-2 text-primary"/>Coming Soon</CardTitle>
                <CardDescription>This feature is currently under development. Soon you'll be able to order your prescribed medications for home delivery.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>We are working hard to integrate with local pharmacies to bring your medications right to your doorstep. Stay tuned!</p>
            </CardContent>
        </Card>
    </div>
  )
}
