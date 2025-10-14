import { BottomNav } from "@/components/app/BottomNav";

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="pb-16 md:pb-0">{children}</main>
      <BottomNav />
    </>
  );
}
