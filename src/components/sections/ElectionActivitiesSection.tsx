import { useEffect, useState } from "react";

const activities = [
  {
    date: "Nov 3",
    startDate: "2026-11-03",
    endDate: "2026-11-03",
    description: "Draft 2026 election guidelines.",
  },
  {
    date: "Nov 4",
    startDate: "2026-11-04",
    endDate: "2026-11-04",
    description:
      "Announcement: General announcement of election (posters, gcs).",
  },
  {
    date: "Nov 5",
    startDate: "2026-11-05",
    endDate: "2026-11-05",
    description:
      "Posting/distribution of the election guidelines, proxy forms and preliminary list of qualified voters (posters, gcs).",
  },
  {
    date: "Nov 6 - 10",
    startDate: "2026-11-06",
    endDate: "2026-11-10",
    description:
      "Filing of petitions for inclusion and/or exclusion of names in the final list of voters.",
  },
  {
    date: "Nov 9 - 11",
    startDate: "2026-11-09",
    endDate: "2026-11-11",
    description:
      "Filing of comments and/or opposition to the petition for inclusion and/or exclusion of names in the final list of qualified voters (until 3PM).",
  },  
  {
    date: "Nov 4 - 12",
    startDate: "2026-11-04",
    endDate: "2026-11-12",
    description: "Filing/submission of Certificates of Candidacy",
  },
  {
    date: "Nov 4 - 11",
    startDate: "2026-11-04",
    endDate: "2026-11-11",
    description: "Posting of preliminary list of qualified candidates",
  },
  {
    date: "Nov 12 - 14",
    startDate: "2026-11-12",
    endDate: "2026-11-14",
    description:
      "Filing of petitions for disqualification of candidates (until 3:00 PM)",
  },
  {
    date: "Nov 15 - 17",
    startDate: "2026-11-15",
    endDate: "2026-11-17",
    description:
      "Filing of comments and/or opposition to the petition for disqualification of candidate/s",
  },
  {
    date: "Nov 18",
    startDate: "2026-11-18",
    endDate: "2026-11-18",
    description: "Posting of certified and final list of qualified voters/candidates",
  },
  {
    date: "Nov 19 - 28",
    startDate: "2026-11-19",
    endDate: "2026-11-28",
    description: "Distribution of Notice of Election",
  },
  {
    date: "Nov 30 - Dec 3",
    startDate: "2026-11-30",
    endDate: "2026-12-03",
    description: "Campaign Period of the Candidates",
  },
  {
    date: "Nov 27 - Dec 3",
    startDate: "2026-11-27",
    endDate: "2026-12-03",
    description: "Filing/validation of proxy forms until 3PM",
  },
  {
    date: "Dec 5",
    startDate: "2026-12-05",
    endDate: "2026-12-05",
    description: "ELECTION Proper",
  },
] as const;

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
          2026 Election Activities
        </h2>
        <div>
          {activities.map((activity) => {
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
