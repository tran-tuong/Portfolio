import React, { ReactElement } from "react";

const padStart = (number: number): string => {
  return number.toString().padStart(2, "0");
};

interface Props {
  id: string;
  label: string;
  current?: number;
  previous?: number;
}

const CountdownCard = ({
  id,
  label,
  current,
  previous,
}: Props): ReactElement => {
  return (
    <div>
      <div className="relative perspective">
        {/* Top Half Static */}
        <div className="relative rounded-t-lg h-[6rem] w-[13rem] md:h-10 md:w-20 overflow-hidden brightness-80">
          <p className="absolute top-[3.75rem] md:top-[22px] left-0 right-0 text-center text-theme_softRed text-7xl md:text-3xl font-bold">
            {typeof current === "undefined" ? "" : padStart(current)}
          </p>
          <svg width="100%" height="100%">
            <mask id={`${id}-m`} fill="#fff">
              <rect id={`${id}-r`} width="100%" height="100%" />
              <circle r="8" fill="#000" cx="0" cy="100%" />
              <circle r="8" fill="#000" cx="100%" cy="100%" />
            </mask>
            <use
              href={`#${id}-r`}
              fill="hsl(236, 21%, 26%)"
              mask={`url(#${id}-m)`}
            />
          </svg>
        </div>

        {/* Bottom Half Static */}
        <div className="relative rounded-b-lg h-[6rem] w-[13rem] md:h-10 md:w-20 overflow-hidden">
          <p
            className="absolute bottom-[3.75rem] md:bottom-[22px] left-0 right-0 text-center text-theme_softRed text-7xl md:text-3xl font-bold"
            data-testid={id}
          >
            {typeof previous === "undefined" ? "" : padStart(previous)}
          </p>
          <svg width="100%" height="100%">
            <mask id={`${id}-m2`} fill="#fff">
              <rect id={`${id}-r2`} width="100%" height="100%" />
              <circle r="8" fill="#000" cx="0" cy="0" />
              <circle r="8" fill="#000" cx="100%" cy="0" />
            </mask>
            <use
              href={`#${id}-r2`}
              fill="hsl(236, 21%, 26%)"
              mask={`url(#${id}-m2)`}
            />
          </svg>
        </div>

        <p className="text-base md:text-xxs text-center text-theme_grayishBlue font-bold tracking-widest pt-7 md:pt-0">
          {label}
        </p>

        {previous !== current && (
          <>
            <div className="absolute top-0 left-0 rounded-t-lg h-[6rem] w-[13rem] md:h-10 md:w-20 overflow-hidden brightness-80 animate-flipTop origin-bottom preserve-3d backface-hidden">
              <div className="relative h-[6rem] md:h-10">
                <p className="absolute top-[3.75rem] md:top-[22px] left-0 right-0 text-center text-theme_softRed text-7xl md:text-3xl font-bold">
                  {typeof previous === "undefined" ? "" : padStart(previous)}
                </p>
                <svg width="100%" height="100%">
                  <mask id={`${id}-mbottom`} fill="#fff">
                    <rect id={`${id}-rbottom`} width="100%" height="100%" />
                    <circle r="8" fill="#000" cx="0" cy="100%" />
                    <circle r="8" fill="#000" cx="100%" cy="100%" />
                  </mask>
                  <use
                    href={`#${id}-rbottom`}
                    fill="hsl(236, 21%, 26%)"
                    mask={`url(#${id}-mbottom)`}
                  />
                </svg>
              </div>
            </div>

            <div className="absolute top-[6rem] md:top-10 left-0 rounded-b-lg h-[6rem] w-[13rem] md:h-10 md:w-20 overflow-hidden animate-flipBottom origin-top preserve-3d backface-hidden">
              <div className="relative h-[6rem] md:h-10">
                <p className="absolute bottom-[3.75rem] md:bottom-[22px] left-0 right-0 text-center text-theme_softRed text-7xl md:text-3xl font-bold">
                  {typeof current === "undefined" ? "" : padStart(current)}
                </p>
                <svg width="100%" height="100%">
                  <mask id={`${id}-m2bottom`} fill="#fff">
                    <rect id={`${id}-r2bottom`} width="100%" height="100%" />
                    <circle r="8" fill="#000" cx="0" cy="0" />
                    <circle r="8" fill="#000" cx="100%" cy="0" />
                  </mask>
                  <use
                    href={`#${id}-r2bottom`}
                    fill="hsl(236, 21%, 26%)"
                    mask={`url(#${id}-m2bottom)`}
                  />
                </svg>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CountdownCard;
