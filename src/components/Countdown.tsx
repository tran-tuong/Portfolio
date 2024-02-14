import React, { ReactElement, useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { DateTime } from "luxon";

import CountdownCard from "./CountdownCard";
import useIsMounted from "./hooks/useIsMounted";

interface CurrentPrevious {
  current: Countdown;
  previous: Countdown | null;
}

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getTimeLeft = (startDate: DateTime): Countdown => {
  const now = DateTime.local();
  const { days, hours, minutes, seconds } = now.diff(startDate, [
    "days",
    "hours",
    "minutes",
    "seconds",
  ]);
  return {
    days: Math.max(0, Math.trunc(days)),
    hours: Math.max(0, Math.trunc(hours)),
    minutes: Math.max(0, Math.trunc(minutes)),
    seconds: Math.max(0, Math.trunc(seconds)),
  };
};

const useCountdown = (startDate: DateTime): CurrentPrevious => {
  const initial = getTimeLeft(startDate);
  const [{ current, previous }, setCountdown] = useState<CurrentPrevious>({
    current: initial,
    previous: null,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(({ current }) => {
        return {
          previous: current,
          current: getTimeLeft(startDate),
        };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [startDate]);

  return { previous, current };
};

const Countdown = (): ReactElement => {
  const firstDate = new Date("11/11/2023 00:00:00");
  const secondDate = new Date();
  const firstDateInMs = firstDate.getTime();
  const secondDateInMs = secondDate.getTime();
  const differenceBtwDates = secondDateInMs - firstDateInMs;
  const aDayInMs = 24 * 60 * 60 * 1000;
  const daysDiff = Math.floor(differenceBtwDates / aDayInMs);
  const remainingMs = differenceBtwDates % aDayInMs;
  const hoursDiff = Math.floor(remainingMs / (60 * 60 * 1000));
  const minutesDiff = Math.floor(
    (remainingMs % (60 * 60 * 1000)) / (60 * 1000)
  );
  const secondsDiff = Math.floor((remainingMs % (60 * 1000)) / 1000);

  const isMounted = useIsMounted();
  const router = useRouter();
  const defaultTime = useMemo(
    () =>
      DateTime.local().minus({
        days: daysDiff,
        hours: hoursDiff,
        minutes: minutesDiff,
        seconds: secondsDiff,
      }),
    []
  );
  const initialDate = router.query?.date
    ? DateTime.fromISO(
        Array.isArray(router.query.date)
          ? router.query.date[0]
          : router.query.date
      )
    : null;
  const { current, previous } = useCountdown(
    initialDate?.isValid ? initialDate : defaultTime
  );

  if (!isMounted) return <></>;

  return (
    <div className="flex space-x-10 lg:space-x-8 md:space-x-5 sm:space-x-3">
      <CountdownCard
        id={`days${current.days}-${previous?.days}`}
        label="DAYS"
        key={`days${current.days}-${previous?.days}`}
        current={current.days}
        previous={previous?.days}
      />
      <CountdownCard
        id={`hours${current.hours}-${previous?.hours}`}
        label="HOURS"
        key={`hours${current.hours}-${previous?.hours}`}
        current={current.hours}
        previous={previous?.hours}
      />
      <CountdownCard
        id={`minutes${current.minutes}-${previous?.minutes}`}
        label="MINUTES"
        key={`minutes${current.minutes}-${previous?.minutes}`}
        current={current.minutes}
        previous={previous?.minutes}
      />
      <CountdownCard
        id={`seconds${current.seconds}-${previous?.seconds}`}
        label="SECONDS"
        key={`seconds${current.seconds}-${previous?.seconds}`}
        current={current.seconds}
        previous={previous?.seconds}
      />
    </div>
  );
};
export default Countdown;
