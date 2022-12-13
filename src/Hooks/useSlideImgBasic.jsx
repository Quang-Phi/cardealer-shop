import { useEffect, useState } from "react";

export default function (listIMG) {
  const [imgActive, setImgActive] = useState(0);

  const mod = (n, m) => {
    const result = n % m;
    return result >= 0 ? result : result + m;
  };

  const imgLeft = mod(imgActive - 1, listIMG.length);
  const imgRight = mod(imgActive + 1, listIMG.length);

  useEffect(() => {
    setTimeout(() => {
      setImgActive((imgActive + 1) % listIMG.length);
    }, 2000);
  }, [imgActive]);

  return [imgActive, imgLeft, imgRight];
}
