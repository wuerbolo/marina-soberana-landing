import Link from "next/link";
import FunnelStepper from "@/components/FunnelStepper";

export default function AplicarPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-line px-6 py-6">
        <Link href="/" className="font-serif text-lg tracking-tight">
          Soberana
        </Link>
      </header>
      <div className="flex-1">
        <FunnelStepper />
      </div>
    </main>
  );
}
