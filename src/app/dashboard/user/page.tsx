
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function UserDashboard() {
  return (
    <>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Welcome, User!</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no health data yet
          </h3>
          <p className="text-sm text-muted-foreground">
            Complete your health profile to get started.
          </p>
          <Link href="/onboarding/user">
            <Button className="mt-4">Complete Profile</Button>
          </Link>
        </div>
      </div>
    </>
  );
}
