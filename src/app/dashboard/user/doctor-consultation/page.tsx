
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Star, Video, Briefcase, Wallet } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const doctors = [
    {
        id: '1',
        name: 'Dr. Sarah Chen',
        specialization: 'Cardiologist',
        rating: 4.9,
        reviews: 124,
        image: PlaceHolderImages.find(img => img.id === 'doctor1'),
        experience: 15,
        bio: "Dr. Chen is a board-certified cardiologist with a focus on preventative care and managing chronic heart conditions. She is dedicated to providing compassionate and comprehensive care to her patients.",
        fee: 250,
    },
    {
        id: '2',
        name: 'Dr. David Lee',
        specialization: 'Dermatologist',
        rating: 4.8,
        reviews: 98,
        image: PlaceHolderImages.find(img => img.id === 'doctor2'),
        experience: 12,
        bio: "Dr. Lee specializes in both medical and cosmetic dermatology. He has extensive experience in treating a wide range of skin conditions, from acne to skin cancer.",
        fee: 180,
    },
    {
        id: '3',
        name: 'Dr. Maria Garcia',
        specialization: 'Pediatrician',
        rating: 4.9,
        reviews: 210,
        image: PlaceHolderImages.find(img => img.id === 'doctor3'),
        experience: 18,
        bio: "Dr. Garcia is a beloved pediatrician known for her friendly demeanor and exceptional care for children of all ages. She believes in a holistic approach to child health.",
        fee: 150,
    },
    {
        id: '4',
        name: 'Dr. James Smith',
        specialization: 'Neurologist',
        rating: 4.7,
        reviews: 75,
        image: PlaceHolderImages.find(img => img.id === 'doctor4'),
        experience: 20,
        bio: "Dr. Smith is a leading neurologist with expertise in treating complex neurological disorders, including epilepsy and Parkinson's disease. He is committed to advancing patient care through research.",
        fee: 300,
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
                    <CardContent className="flex-grow space-y-4">
                         <div className="flex justify-center items-center gap-1 text-yellow-500">
                           <Star className="w-5 h-5 fill-current" />
                           <span className="font-bold text-lg text-foreground">{doctor.rating}</span>
                           <span className="text-sm text-muted-foreground">({doctor.reviews} reviews)</span>
                        </div>
                        <p className="text-sm text-muted-foreground text-center px-2">{doctor.bio}</p>
                        <div className="flex justify-around pt-2">
                            <div className="text-center">
                                 <Briefcase className="w-5 h-5 mx-auto text-primary mb-1"/>
                                 <p className="text-sm font-semibold">{doctor.experience} years</p>
                                 <p className="text-xs text-muted-foreground">Experience</p>
                            </div>
                             <div className="text-center">
                                 <Wallet className="w-5 h-5 mx-auto text-primary mb-1"/>
                                 <p className="text-sm font-semibold">${doctor.fee}</p>
                                 <p className="text-xs text-muted-foreground">Fee</p>
                            </div>
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
