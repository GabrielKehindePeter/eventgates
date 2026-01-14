import HeroWithCard from "@/components/HeroWithCard";


// Force Next.js to treat this page as dynamic
export const dynamic = "force-dynamic";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return <HeroWithCard />;
}
