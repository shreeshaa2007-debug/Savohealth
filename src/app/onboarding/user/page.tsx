
"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useRouter } from 'next/navigation';


export default function UserOnboardingPage() {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [bmi, setBmi] = useState<number | null>(null);
    const router = useRouter();

    const calculateBmi = () => {
        const h = parseFloat(height);
        const w = parseFloat(weight);
        if (h > 0 && w > 0) {
            const bmiValue = w / ((h / 100) * (h / 100));
            setBmi(bmiValue);
        } else {
            setBmi(null);
        }
    };

    const handleContinue = () => {
        // Here you would save the data and then navigate
        router.push('/dashboard/user');
    }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Complete Your Health Profile</CardTitle>
          <CardDescription>
            This information will help us personalize your experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="age">Your Age</Label>
              <Input id="age" type="number" placeholder="e.g., 30" value={age} onChange={e => setAge(e.target.value)} />
            </div>
             <div className="space-y-2">
              <Label htmlFor="height">Height (cm)</Label>
              <Input id="height" type="number" placeholder="e.g., 175" value={height} onChange={e => setHeight(e.target.value)} onBlur={calculateBmi} />
            </div>
          </div>
           <div className="grid grid-cols-1">
            <div className="space-y-2">
              <Label htmlFor="weight">Weight (kg)</Label>
              <Input id="weight" type="number" placeholder="e.g., 70" value={weight} onChange={e => setWeight(e.target.value)} onBlur={calculateBmi}/>
            </div>
          </div>
          {bmi !== null && (
            <div className="text-center p-4 bg-muted rounded-lg">
                <p className="font-semibold">Your BMI is: {bmi.toFixed(2)}</p>
                <p className="text-sm text-muted-foreground">
                    {bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : bmi < 30 ? "Overweight" : "Obesity"}
                </p>
            </div>
          )}
          <div className="space-y-2">
            <Label>Lifestyle</Label>
            <RadioGroup defaultValue="sedentary" className="flex space-x-4">
              <div>
                <RadioGroupItem value="sedentary" id="sedentary" />
                <Label htmlFor="sedentary" className="ml-2">Sedentary</Label>
              </div>
              <div>
                <RadioGroupItem value="active" id="active" />
                <Label htmlFor="active" className="ml-2">Active</Label>
              </div>
              <div>
                <RadioGroupItem value="very-active" id="very-active" />
                <Label htmlFor="very-active" className="ml-2">Very Active</Label>
              </div>
            </RadioGroup>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleContinue}>Continue to Dashboard</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
