import { useState } from 'react';
import { TShirt } from '../../components/TShirt';
import { TShirtSetup } from '../../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [TShirtType, setTShirtType] = useState("normalShortSleeve")
  const [TShirtColor, setTShirtColor] = useState("yellow")
  const [TShirtPrint, setTShirtPrint] = useState("Lenka je super!")

  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt type={TShirtType} color={TShirtColor} print={TShirtPrint} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup 
            onTypeChange={setTShirtType}
            onColorChange={setTShirtColor}
            onPrintChange={setTShirtPrint}
          />
        </div>
      </div>
    </div>
  );
};
