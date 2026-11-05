import { useEffect, useState } from "react";
import { CalendarDays, Clock3, MapPin } from "lucide-react";
import type { Announcement } from "@/data/announcement";

const electionDay = new Date("2026-12-05T08:00:00+08:00").getTime();

type HeroSectionProps = { announcement: Announcement };

function useElectionCountdown() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const remaining = Math.max(0, electionDay - Date.now());
      setCountdown({
        days: Math.floor(remaining / 86_400_000),
        hours: Math.floor((remaining % 86_400_000) / 3_600_000),
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 60_000);
    return () => window.clearInterval(timer);
  }, []);

  return countdown;
}

export function HeroSection({ announcement }: HeroSectionProps) {
  const countdown = useElectionCountdown();

  return (
    <section
      className="scroll-mt-[82px] bg-[linear-gradient(110deg,#102746_0%,#1c3d68_62%,#234971_100%)] text-white"
      id="event-details"
      aria-labelledby="page-title"
    >
      <div className="mx-auto flex min-h-[629px] w-[calc(100%_-_64px)] max-w-[1240px] flex-col items-center px-0 pt-[72px] pb-[70px] max-md:min-h-0 max-md:w-[calc(100%_-_36px)] max-md:pt-[45px] max-md:pb-12">
        <p className="mb-[22px] rounded-sm bg-[#f2f5e8] px-[17px] py-[9px] text-center text-[.88rem] font-semibold text-[#304715] max-md:mb-[18px] max-md:text-[.75rem]">
          Casting of votes runs {announcement.votingHours}.
        </p>
        <h1 className="m-0 max-w-[1084px] text-center text-[clamp(2.35rem,4vw,3.55rem)] leading-[1.15] font-bold tracking-[-.045em] text-white max-md:text-[clamp(2rem,8vw,3rem)]">
          AFPOVAI <span className="text-[#c4d96b]">2026</span>: Board of
          Directors Election
        </h1>

        <div
          className="mt-[34px] grid w-full max-w-[1084px] grid-cols-3 rounded-lg bg-white p-6 text-[#43546e] max-lg:px-[14px] max-md:mt-[26px] max-md:grid-cols-1 max-md:px-5 max-md:py-[13px]"
          aria-label="Election event details"
        >
          <article className="grid min-h-[68px] grid-cols-[42px_minmax(0,1fr)] content-start gap-x-[13px] border-r-2 border-[#e1e3e1] px-6 first:pl-0 last:border-0 last:pr-0 max-lg:grid-cols-[34px_minmax(0,1fr)] max-lg:gap-x-[9px] max-lg:px-[14px] max-md:min-h-[82px] max-md:grid-cols-[40px_minmax(0,1fr)] max-md:border-r-0 max-md:border-b max-md:border-[#e1e3e1] max-md:px-0 max-md:py-3 max-md:last:border-b-0">
            <span className="row-span-2 grid size-10 place-items-center rounded-[9px] bg-[#f1f5e8] text-[#547000] max-lg:size-[34px] max-md:size-[38px]">
              <CalendarDays size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <small className="mb-1 block text-[10px] font-semibold text-[#61718a] uppercase">
                Date &amp; time
              </small>
              <strong className="block text-[20px] leading-[1.2] font-bold text-[#43546e] max-lg:text-base">
                {announcement.eventDate}
              </strong>
              <p className="mt-[14px] mb-0 text-[12px] leading-[1.4] text-[#435772] max-md:mt-1">
                {announcement.assemblyHours}.
              </p>
            </div>
          </article>

          <article className="grid min-h-[68px] grid-cols-[42px_minmax(0,1fr)] content-start gap-x-[13px] border-r-2 border-[#e1e3e1] px-6 last:border-0 last:pr-0 max-lg:grid-cols-[34px_minmax(0,1fr)] max-lg:gap-x-[9px] max-lg:px-[14px] max-md:min-h-[82px] max-md:grid-cols-[40px_minmax(0,1fr)] max-md:border-r-0 max-md:border-b max-md:border-[#e1e3e1] max-md:px-0 max-md:py-3 max-md:last:border-b-0">
            <span className="row-span-2 grid size-10 place-items-center rounded-[9px] bg-[#f1f5e8] text-[#547000] max-lg:size-[34px] max-md:size-[38px]">
              <Clock3 size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <small className="mb-1 block text-[10px] font-semibold text-[#61718a] uppercase">
                Casting of votes
              </small>
              <strong className="block text-[20px] leading-[1.2] font-bold text-[#43546e] max-lg:text-base">
                {announcement.votingHours}
              </strong>
              <p className="mt-[14px] mb-0 text-[12px] leading-[1.4] text-[#435772] max-md:mt-1">
                Annual General Assembly: {announcement.assemblyHours}.
              </p>
            </div>
          </article>

          <article className="grid min-h-[68px] grid-cols-[42px_minmax(0,1fr)] content-start gap-x-[13px] px-6 last:border-0 last:pr-0 max-lg:grid-cols-[34px_minmax(0,1fr)] max-lg:gap-x-[9px] max-lg:px-[14px] max-md:min-h-[82px] max-md:grid-cols-[40px_minmax(0,1fr)] max-md:px-0 max-md:py-3">
            <span className="row-span-2 grid size-10 place-items-center rounded-[9px] bg-[#f1f5e8] text-[#547000] max-lg:size-[34px] max-md:size-[38px]">
              <MapPin size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <small className="mb-1 block text-[10px] font-semibold text-[#61718a] uppercase">
                Venue
              </small>
              <strong className="block text-[20px] leading-[1.2] font-bold text-[#43546e] max-lg:text-base">
                {announcement.venue}
              </strong>
            </div>
          </article>
        </div>

        <div
          className="mt-[54px] text-center max-md:mt-[34px]"
          aria-label={`${countdown.days} days and ${countdown.hours} hours until the event`}
        >
          <p className="mb-4 text-[.95rem] text-[#e1e8f0]">
            The Countdown Is On!
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex size-[120px] flex-col items-center justify-center rounded-[17px] border-2 border-[#d5dfed] max-md:size-[100px]">
              <strong className="text-[2.7rem] leading-none font-semibold text-[#c5d96d] max-md:text-[2.35rem]">
                {countdown.days}
              </strong>
              <span className="mt-[5px] text-[.62rem] text-[#f0f3f7] uppercase">
                Days
              </span>
            </div>
            <div className="flex size-[120px] flex-col items-center justify-center rounded-[17px] border-2 border-[#d5dfed] max-md:size-[100px]">
              <strong className="text-[2.7rem] leading-none font-semibold text-[#c5d96d] max-md:text-[2.35rem]">
                {countdown.hours}
              </strong>
              <span className="mt-[5px] text-[.62rem] text-[#f0f3f7] uppercase">
                Hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
