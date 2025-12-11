'use server';
/**
 * @fileOverview An AI flow for checking and analyzing user-reported symptoms.
 * 
 * - symptomCheck - A function that handles the symptom analysis process.
 * - SymptomCheckInput - The input type for the symptomCheck function.
 * - SymptomCheckOutput - The return type for the symptomCheck function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const SymptomCheckInputSchema = z.object({
  symptoms: z.string().describe('The symptoms described by the user.'),
  language: z.string().describe('The language the user is communicating in (e.g., "English", "Spanish", "French").'),
});
export type SymptomCheckInput = z.infer<typeof SymptomCheckInputSchema>;

const SymptomCheckOutputSchema = z.object({
  diagnosis: z.string().describe('A potential diagnosis based on the symptoms.'),
  severity: z.enum(['Mild', 'Moderate', 'Severe']).describe('The estimated severity of the condition.'),
  recommendation: z.string().describe('A recommended course of action, such as rest, consulting a doctor, or visiting an emergency room.'),
});
export type SymptomCheckOutput = z.infer<typeof SymptomCheckOutputSchema>;


export async function symptomCheck(input: SymptomCheckInput): Promise<SymptomCheckOutput> {
    return symptomCheckFlow(input);
}


const prompt = ai.definePrompt({
    name: 'symptomCheckPrompt',
    input: { schema: SymptomCheckInputSchema },
    output: { schema: SymptomCheckOutputSchema },
    prompt: `You are a helpful medical assistant AI. A user is providing their symptoms in {{{language}}}. 
    
    Your entire response must be in {{{language}}}.
    
    Symptoms: {{{symptoms}}}

    Based on these symptoms, provide a potential diagnosis, estimate the severity (Mild, Moderate, or Severe), and give a clear recommendation.
    
    - If the symptoms seem minor (like a common cold), classify severity as "Mild" and suggest rest and hydration.
    - If the symptoms are persistent or concerning (like a lasting fever), classify severity as "Moderate" and recommend consulting a doctor.
    - If the symptoms are critical (like chest pain or difficulty breathing), classify severity as "Severe" and strongly recommend visiting the nearest hospital or calling emergency services immediately.

    Provide a concise and clear analysis in {{{language}}}.`,
});

const symptomCheckFlow = ai.defineFlow(
    {
        name: 'symptomCheckFlow',
        inputSchema: SymptomCheckInputSchema,
        outputSchema: SymptomCheckOutputSchema,
    },
    async (input) => {
        const { output } = await prompt(input);
        if (!output) {
            throw new Error("Unable to get a response from the AI.");
        }
        return output;
    }
);
