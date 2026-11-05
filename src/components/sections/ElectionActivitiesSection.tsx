const activities: { date: string; description: string; current?: boolean }[] = [
  {
    date: "Nov 3",
    description: "Submission and Approval of election guidelines.",
  },
  {
    date: "Nov 4",
    description:
      "Announcement: General announcement of election (fbgroups, posters, gcs).",
  },
  {
    date: "Nov 5",
    description:
      "Posting/distribution of the election guidelines, proxy forms and preliminary list of qualified voters (fbgroups, posters, gcs).",
    current: true,
  },
  {
    date: "Nov 6",
    description:
      "Filing of petitions for inclusion and/or exclusion of names in the final list of voters.",
  },
  {
    date: "Nov 11",
    description:
      "Filing of comments and/or opposition to the petition for inclusion and/or exclusion of names in the final list of qualified members (until 3PM).",
  },
];

export function ElectionActivitiesSection() {
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
          {activities.map((activity) => (
            <article
              className={`flex min-h-[70px] items-center gap-5 border-b border-slate-300 px-2 py-3 last:border-0 md:gap-10 ${activity.current ? "bg-[#f0f4e4]" : ""}`}
              key={activity.date}
            >
              <span
                className={`flex h-9 w-[100px] shrink-0 items-center justify-center rounded-sm border text-sm font-semibold ${activity.current ? "border-[#8ca90c] bg-[#8ca90c] text-white" : activity.date === "Nov 6" || activity.date === "Nov 11" ? "border-slate-600 bg-slate-600 text-white" : "border-slate-500 text-slate-600"}`}
              >
                {activity.date}
              </span>
              <p
                className={`text-sm ${activity.current ? "text-base text-[#344915]" : "text-slate-600"}`}
              >
                {activity.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
