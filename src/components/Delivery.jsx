import OptionOne from "./delivery/OptionOne";
import Price from "./delivery/Price";
import ProductType from "./delivery/ProductType";

// eslint-disable-next-line react/prop-types
export default function Delivery({ toggleProductType, showProductType }) {
  return (
    <>
      <Price
        toggleProductType={toggleProductType}
        showProductType={showProductType}
      />
      <div className="container">
        {showProductType ? (
          <ProductType />
        ) : (
          <OptionOne toggleProductType={toggleProductType} />
        )}
      </div>
    </>
  );
}
