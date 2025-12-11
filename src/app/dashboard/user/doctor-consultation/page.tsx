
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Star, Video } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const doctors = [
    {
        id: '1',
        name: 'Dr. Sarah Chen',
        specialization: 'Cardiologist',
        rating: 4.9,
        reviews: 124,
        image: PlaceHolderImages.find(img => img.id === 'doctor1'),
    },
    {
        id: '2',
        name: 'Dr. David Lee',
        specialization: 'Dermatologist',
        rating: 4.8,
        reviews: 98,
        image: PlaceHolderImages.find(img => img.id === 'doctor2'),
    },
    {
        id: '3',
        name: 'Dr. Maria Garcia',
        specialization: 'Pediatrician',
        rating: 4.9,
        reviews: 210,
        image: PlaceHolderImages.find(img => img.id === 'doctor3'),
    },
    {
        id: '4',
        name: 'Dr. James Smith',
        specialization: 'Neurologist',
        rating: 4.7,
        reviews: 75,
        image: PlaceHolderImages.find(img => img.id === 'doctor4'),
    }
];

export default function DoctorConsultationPage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Find a Doctor</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map(doctor => (
                <Card key={doctor.id} className="flex flex-col">
                    <CardHeader className="items-center text-center">
                        {doctor.image && (
                            <Image
                                src={doctor.image.imageUrl}
                                alt={`Photo of ${doctor.name}`}
                                width={120}
                                height={120}
                                className="rounded-full border-4 border-primary/20"
                                data-ai-hint={doctor.image.imageHint}
                            />
                        )}
                        <CardTitle className="pt-4">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialization}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <div className="flex justify-center items-center gap-1 text-yellow-500">
                           <Star className="w-5 h-5 fill-current" />
                           <span className="font-bold text-lg text-foreground">{doctor.rating}</span>
                           <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                        <Button>
                           <Video className="w-4 h-4 mr-2"/> Book Consultation
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}
