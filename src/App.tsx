import { useState } from 'react';
import { HuePicker, AlphaPicker, RGBColor, ColorResult } from 'react-color';

function App() {
// Initialisez l'état avec un objet RGBColor qui inclut l'alpha
  const [color, setColor] = useState<RGBColor>({ r: 255, g: 0, b: 0, a: 1 });

  // Utilisez ColorResult au lieu de any pour le type de l'argument de la fonction
  const handleHueChange = (color: ColorResult) => {
    setColor(color.rgb);
  };

  const handleAlphaChange = (color: ColorResult) => {
    setColor(color.rgb);
  };

  return (
    <div>
      <HuePicker color={`rgba(${color.r},${color.g},${color.b},${color.a})`} onChange={handleHueChange} />
      <AlphaPicker color={`rgba(${color.r},${color.g},${color.b},${color.a})`} onChange={handleAlphaChange} />
      <p>La couleur sélectionnée est : rgba({color.r}, {color.g}, {color.b}, {color.a})</p>
    </div>
  );
}

export default App
