
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Bot, HeartPulse } from 'lucide-react';

export default function UserDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Welcome, User!</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-8"
      >
        <div className="flex flex-col items-center gap-2 text-center max-w-md">
          <h3 className="text-2xl font-bold tracking-tight">
            Your Personal Health Hub
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            Everything you need to manage your health is right here. Start by completing your profile or explore our features.
          </p>
          <div className="w-full space-y-4">
            <Link href="/onboarding/user">
                <Button className="w-full">Complete Your Health Profile</Button>
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Link href="/dashboard/user/personal-history" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted">
                        <FileText className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold">Personal History</p>
                            <p className="text-sm text-muted-foreground">View your medical records.</p>
                        </div>
                    </Link>
                    <Link href="/dashboard/user/ai-help" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted">
                        <Bot className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold">AI Help</p>
                            <p className="text-sm text-muted-foreground">Check your symptoms instantly.</p>
                        </div>
                    </Link>
                    <Link href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-muted">
                        <HeartPulse className="h-6 w-6 text-primary" />
                        <div>
                            <p className="font-semibold">Find a Doctor</p>
                            <p className="text-sm text-muted-foreground">Book a consultation.</p>
                        </div>
                    </Link>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
