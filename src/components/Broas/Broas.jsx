import "./Broas.sass";
import broa1 from "../../assets/IMG-20250831-WA0023.png";
import broa2 from "../../assets/IMG-20250831-WA0020.png";
import broa3 from "../../assets/IMG-20250831-WA0019.png";
import broa4 from "../../assets/IMG-20250831-WA0018.png";
import broa5 from "../../assets/IMG-20250831-WA0024.png";
import broa6 from "../../assets/IMG-20250831-WA0015.png";
import broa7 from "../../assets/IMG-20250831-WA0042.png";
import { useEffect, useRef } from "react";

export default function Broas() {
  const images = [broa1, broa2, broa3, broa4, broa5, broa6, broa7];

  return (
    <div className="containerBroas">
      <div className="carousel">
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Broa ${(index % images.length) + 1}`}
            className={`broa broa${(index % images.length) + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
