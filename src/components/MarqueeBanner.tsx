import React, { useEffect, useRef } from 'react';

export const MarqueeBanner: React.FC = () => {
  const textRef = useRef<SVGTextPathElement | null>(null);

  useEffect(() => {
    let animId: number;
    let offset = -2000;

    const step = () => {
      offset += 2;
      if (offset >= 0) {
        offset = -2000;
      }
      if (textRef.current) {
        textRef.current.setAttribute('startOffset', `${offset}`);
      }
      animId = requestAnimationFrame(step);
    };

    step();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const textContent =
    'Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦ Sri-lankan ♦ Homegrown ♦ organic ♦ single-origin ♦ agro-forestry ♦';

  return (
    <section id="marquee" className="marquee_light">
      <svg
        width="100%"
        height="90"
        viewBox="0 0 2400 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full select-none"
      >
        <path
          id="textPath"
          d="M1 11.6793C66.72 8.16933 131.38 26.2993 196.38 36.6393C256.96 46.2793 318.87 49.1593 379.74 41.5593C423.59 36.0893 466.38 24.6293 509.96 17.9393C553.63 11.2393 598.04 9.34933 642.13 12.3093C686.46 15.2793 729.71 24.7893 773.32 32.6893C780.99 34.0793 788.68 35.4093 796.38 36.6393C856.96 46.2793 918.87 49.1593 979.74 41.5593C1001.57 38.8393 1023.2 34.7793 1044.77 30.5193C1066.04 26.3193 1087.53 22.6593 1108.69 18.0993C1129.4 13.6393 1151.56 12.5993 1172.69 11.6193C1194.29 10.6193 1215.94 10.7593 1237.52 12.0493C1281.01 14.6393 1323.28 23.4693 1365.99 31.3893C1376.01 33.2493 1386.05 35.0293 1396.12 36.6393C1456.7 46.2793 1518.61 49.1593 1579.48 41.5593C1623.33 36.0893 1666.12 24.6293 1709.7 17.9393C1753.37 11.2393 1797.78 9.34933 1841.87 12.3093C1886.2 15.2793 1929.45 24.7893 1973.06 32.6893C1980.73 34.0793 1988.42 35.4093 1996.12 36.6393C2056.7 46.2793 2118.61 49.1593 2179.48 41.5593C2253.42 32.3293 2326.05 7.70933 2400.48 11.2793"
          stroke="none"
          fill="transparent"
        />
        <text fill="#0f1c25">
          <textPath href="#textPath" ref={textRef}>
            {textContent}
          </textPath>
        </text>
      </svg>
    </section>
  );
};

