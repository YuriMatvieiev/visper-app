import BigCard from "./BigCard";

// eslint-disable-next-line react/prop-types
export default function OptionOne({ toggleProductType }) {
  return (
    <div className="grid grid-cols-1 pt-2 pb-24 md:grid-cols-4 md:py-8 md:gap-x-8 md:gap-y-7">
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
      <BigCard toggleProductType={toggleProductType} />
    </div>
  );
}
