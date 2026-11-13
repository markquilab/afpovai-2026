import { useEffect, useState } from "react";
import {
  electionActivities,
  electionActivitiesTitle,
} from "@/data/electionActivities";

function getTodayInManila() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Manila",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export function ElectionActivitiesSection() {
  const [today, setToday] = useState(getTodayInManila);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setToday(getTodayInManila());
    }, 60_000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="bg-background py-16 md:py-[68px]"
      aria-labelledby="activities"
      id="election-activities"
    >
      <div className="mx-auto w-[calc(100%_-_30px)] max-w-[1240px]">
        <h2
          className="mb-5 scroll-mt-20 text-center text-2xl font-bold tracking-tight text-slate-800 md:text-3xl"
          id="activities"
        >
          {electionActivitiesTitle}
        </h2>
        <div>
          {electionActivities.map((activity) => {
            const isCurrent = activity.startDate <= today && today <= activity.endDate;
            const isPast = activity.endDate < today;

            return (
              <article
                className={`flex min-h-[70px] items-center gap-5 border-b border-slate-300 px-2 py-3 md:gap-10 ${isCurrent ? "bg-[#f0f4e4]" : ""}`}
                key={`${activity.startDate}-${activity.description}`}
              >
                <span
                  className={`flex h-9 w-[112px] shrink-0 items-center justify-center whitespace-nowrap rounded-sm border text-sm font-semibold ${isCurrent ? "border-[#8ca90c] bg-[#8ca90c] text-white" : isPast ? "border-slate-400 bg-transparent text-slate-600" : "border-slate-600 bg-slate-600 text-white"}`}
                  aria-current={isCurrent ? "date" : undefined}
                >
                  {activity.date}
                </span>
                <p
                  className={`text-sm ${isCurrent ? "text-base text-[#344915]" : "text-slate-600"}`}
                >
                  {activity.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
