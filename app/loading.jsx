import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen px-4 md:px-10 py-10 space-y-10">

      {/* ================= HERO SKELETON ================= */}
      <section className="flex flex-col items-center text-center space-y-4 py-20">

        <Skeleton className="h-12 w-[80%] md:w-[50%]" />

        <Skeleton className="h-4 w-[70%] md:w-[40%]" />

        <div className="flex gap-3 mt-4">
          <Skeleton className="h-10 w-32 rounded-md" />
          <Skeleton className="h-10 w-40 rounded-md" />
        </div>

      </section>

      {/* ================= GRID SKELETON ================= */}
      <section className="grid md:grid-cols-3 gap-6">

        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl space-y-3"
          >
            <Skeleton className="h-5 w-2/3" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
        ))}

      </section>

      {/* ================= CARD LIST SKELETON ================= */}
      <section className="space-y-4">

        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 border p-4 rounded-xl"
          >
            <Skeleton className="h-12 w-12 rounded-full" />

            <div className="space-y-2 flex-1">
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
        ))}

      </section>

    </main>
  );
}