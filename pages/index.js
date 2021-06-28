import Head from "next/head";
import { useState } from "react";
import { SketchPicker } from "react-color";
export default function Home() {
  const [color, setColor] = useState("#fff");
  const handleChange = (e) => {
    setColor(e);
  };
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{ backgroundColor: `${color.hex}` }}
    >
      <Head>
        <title>Custom Color Picker</title>
      </Head>
      <SketchPicker
        color={color}
        onChangeComplete={setColor}
        onChange={handleChange}
      />
      {color.hex}
    </div>
  );
}
