
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Check, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const insurancePlans = [
    {
        id: 'basic',
        name: 'Basic Health',
        price: '$50/mo',
        description: 'Essential coverage for individuals seeking peace of mind for common medical needs.',
        features: [
            'Emergency Room Visits',
            'Annual Check-ups',
            'Basic Prescriptions Coverage',
            'Telehealth Services',
        ],
        popular: false,
    },
    {
        id: 'family',
        name: 'Family Health Plus',
        price: '$120/mo',
        description: 'Comprehensive coverage designed to protect the health of your entire family.',
        features: [
            'All features from Basic Health',
            'Pediatric and Maternity Care',
            'Specialist Visit Coverage',
            'Expanded Prescription Drug List',
            'Dental & Vision (Optional Add-on)',
        ],
        popular: true,
    },
    {
        id: 'premium',
        name: 'Premium Wellness',
        price: '$180/mo',
        description: 'Our top-tier plan for complete health and wellness coverage with premium benefits.',
        features: [
            'All features from Family Health Plus',
            'Zero Deductible on Specialist Visits',
            'Advanced Diagnostic Imaging',
            'Mental Health & Therapy Sessions',
            'Wellness & Gym Membership Perks',
        ],
        popular: false,
    }
];

export default function InsurancePage() {
  return (
    <div className="flex flex-col gap-6">
        <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Find Your Insurance Plan</h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {insurancePlans.map(plan => (
                <Card key={plan.id} className={cn("flex flex-col", plan.popular && "border-primary border-2 shadow-lg")}>
                     {plan.popular && (
                        <div className="flex justify-center -mt-3">
                            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                                <Star className="h-4 w-4" />
                                Most Popular
                            </div>
                        </div>
                    )}
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                        <CardDescription className="px-4">{plan.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow space-y-6">
                        <div className="text-center">
                            <span className="text-4xl font-bold">{plan.price}</span>
                        </div>
                        <ul className="space-y-3 text-sm text-muted-foreground">
                           {plan.features.map((feature, index) => (
                               <li key={index} className="flex items-center gap-3">
                                   <Check className="h-5 w-5 text-green-500" />
                                   <span>{feature}</span>
                               </li>
                           ))}
                        </ul>
                    </CardContent>
                    <CardFooter>
                        <Button className="w-full" variant={plan.popular ? 'default' : 'outline'}>
                            Choose Plan
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    </div>
  )
}
