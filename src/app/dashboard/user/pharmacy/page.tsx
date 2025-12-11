
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShoppingCart, Search } from 'lucide-react';

const medicines = [
    {
        id: '1',
        name: 'Paracetamol 500mg',
        description: 'For relief of mild to moderate pain and fever.',
        price: '$5.99',
        image: PlaceHolderImages.find(img => img.id === 'paracetamol'),
    },
    {
        id: '2',
        name: 'Cough Syrup',
        description: 'Effective relief for dry and irritating coughs.',
        price: '$12.50',
        image: PlaceHolderImages.find(img => img.id === 'cough_syrup'),
    },
    {
        id: '3',
        name: 'Asthma Inhaler',
        description: 'For prevention and relief of bronchospasm.',
        price: '$45.00',
        image: PlaceHolderImages.find(img => img.id === 'asthma_inhaler'),
    },
    {
        id: '4',
        name: 'Antiseptic Ointment',
        description: 'Helps prevent infection in minor cuts and burns.',
        price: '$8.75',
        image: PlaceHolderImages.find(img => img.id === 'antiseptic_ointment'),
    },
    {
        id: '5',
        name: 'Ibuprofen 200mg',
        description: 'Reduces inflammation and treats pain.',
        price: '$7.20',
        image: PlaceHolderImages.find(img => img.id === 'ibuprofen'),
    },
    {
        id: '6',
        name: 'Allergy Relief Tablets',
        description: 'Provides relief from sneezing, and runny nose.',
        price: '$15.99',
        image: PlaceHolderImages.find(img => img.id === 'allergy_relief'),
    }
];

export default function PharmacyPage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Pharmacy</h1>
            <div className="relative w-full max-w-sm">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for medicines..."
                  className="w-full appearance-none bg-background pl-8 shadow-none"
                />
            </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {medicines.map(med => (
                <Card key={med.id} className="flex flex-col">
                    <CardHeader className="p-0">
                        {med.image && (
                            <Image
                                src={med.image.imageUrl}
                                alt={`Photo of ${med.name}`}
                                width={400}
                                height={300}
                                className="rounded-t-lg object-cover w-full h-40"
                                data-ai-hint={med.image.imageHint}
                            />
                        )}
                    </CardHeader>
                    <CardContent className="flex-grow p-4 space-y-2">
                        <CardTitle className="text-lg">{med.name}</CardTitle>
                        <CardDescription className="text-sm">{med.description}</CardDescription>
                        
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                        <p className="text-xl font-bold">{med.price}</p>
                        <Button size="sm">
                           <ShoppingCart className="w-4 h-4 mr-2"/> Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}
