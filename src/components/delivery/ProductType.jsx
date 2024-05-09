import SmallCard from "./SmallCard";

export default function ProductType() {
  return (
    <div className="grid grid-cols-1 pt-2 pb-24 md:grid-cols-2 md:py-8 md:gap-x-8 md:gap-y-8">
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
      <SmallCard />
    </div>
  );
}
