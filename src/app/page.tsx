import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background p-8">
      <div className="text-center max-w-2xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Stethoscope className="h-16 w-16 text-primary" />
          <h1 className="text-6xl font-bold text-foreground ml-4">SavoHealth</h1>
        </div>
        <p className="mt-4 text-lg leading-8 text-muted-foreground">
          Your personal health companion. AI-powered insights, doctor consultations, and pharmacy at your fingertips.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/login/user">
            <Button size="lg" variant="default">
              User Login
            </Button>
          </Link>
          <Link href="/login/doctor">
            <Button size="lg" variant="outline">
              Doctor Login
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
