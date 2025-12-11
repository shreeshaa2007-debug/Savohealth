
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Bot, AlertTriangle, Stethoscope } from "lucide-react";
import { symptomCheck, type SymptomCheckOutput } from "@/ai/flows/symptom-checker-flow";
import { useToast } from "@/hooks/use-toast";


export default function AiHelpPage() {
    const [symptoms, setSymptoms] = useState('');
    const [response, setResponse] = useState<SymptomCheckOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!symptoms) return;
        setIsLoading(true);
        setResponse(null);

        try {
            const aiResponse = await symptomCheck({ symptoms });
            setResponse(aiResponse);
        } catch (error) {
            console.error("Error getting AI help:", error);
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem getting a response from the AI. Please try again later.",
            });
        }
       
        setIsLoading(false);
    };

    const getSeverityIcon = (severity: SymptomCheckOutput['severity']) => {
        switch (severity) {
            case 'Mild':
                return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
            case 'Moderate':
                return <AlertTriangle className="h-4 w-4 text-orange-500" />;
            case 'Severe':
                return <AlertTriangle className="h-4 w-4 text-red-500" />;
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <div className="flex items-center">
                <h1 className="text-lg font-semibold md:text-2xl">AI Symptom Checker</h1>
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>Describe Your Symptoms</CardTitle>
                    <CardDescription>Enter your symptoms below, and our AI will provide a preliminary analysis and recommendation.</CardDescription>
                </CardHeader>
                <form onSubmit={handleSubmit}>
                    <CardContent>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Textarea 
                                    id="symptoms" 
                                    placeholder="For example: 'I have a persistent headache and a slight fever...'"
                                    value={symptoms}
                                    onChange={(e) => setSymptoms(e.target.value)}
                                    rows={5}
                                />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" disabled={isLoading || !symptoms}>
                            {isLoading ? 'Analyzing...' : 'Get AI Help'}
                        </Button>
                    </CardFooter>
                </form>
            </Card>

            {response && (
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                           <Bot className="h-6 w-6 text-primary"/> AI Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                       <Alert variant={response.severity === 'Severe' ? 'destructive' : 'default'}>
                            <div className="flex items-center gap-2">
                                {getSeverityIcon(response.severity)}
                                <AlertTitle>Severity: {response.severity}</AlertTitle>
                            </div>
                            <AlertDescription>
                                <strong>Potential Diagnosis:</strong> {response.diagnosis}
                            </AlertDescription>
                       </Alert>
                        <div>
                            <h3 className="font-semibold mb-2">Recommendation:</h3>
                            <p className="text-muted-foreground">{response.recommendation}</p>
                        </div>

                        {response.severity !== 'Mild' && (
                             <div className="pt-4 border-t">
                                <h3 className="font-semibold mb-3">Next Steps</h3>
                                 <Button>
                                    <Stethoscope className="mr-2 h-4 w-4" /> Find a Doctor
                                </Button>
                             </div>
                        )}
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
