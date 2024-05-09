import { useState } from "react";
import Delivery from "./components/Delivery";
import Header from "./components/Header";

function App() {
  const [showProductType, setShowProductType] = useState(false);

  const toggleProductType = () => {
    setShowProductType(!showProductType);
  };

  return (
    <div className="font-roboto min-h-screen bg-white dark:bg-dark-bg ">
      <Header showProductType={showProductType} />
      <Delivery
        toggleProductType={toggleProductType}
        showProductType={showProductType}
      />
    </div>
  );
}

export default App;
