import { Download, UserRound } from "lucide-react";

const ballotNumbers = Array.from({ length: 9 }, (_, index) => index + 1);
const resources = ["Election Guidelines", "RA 9904", "Proxy Form", "Certificate of Candidacy"];

export function CandidateSection() {
  return (
    <section
      className="bg-[#edf2ef] py-16 md:py-[72px]"
      aria-labelledby="candidates"
    >
      <div className="mx-auto w-[calc(100%_-_30px)] max-w-[1240px]">
        <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2
              className="mb-1 scroll-mt-20 text-2xl font-bold tracking-tight text-slate-800 md:text-3xl"
              id="candidates"
            >
              Meet the Candidates
            </h2>
            <p className="text-sm text-slate-600">
              A total of <b>eight (8) Directors</b> will be elected in this election.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {resources.map((resource) => (
              <button
                className="flex items-center gap-2 rounded-[8px] border border-slate-200 bg-slate-100 px-4 py-4 text-sm font-medium text-slate-400 shadow-sm disabled:cursor-not-allowed disabled:opacity-100"
                type="button"
                disabled
                aria-label={`${resource} download is not available`}
                key={resource}
              >
                {resource}
                <Download
                  size={18}
                  className="text-slate-400"
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {ballotNumbers.map((ballotNumber) => (
            <article
              className="flex min-h-32 items-center gap-4 rounded-md bg-white p-6"
              key={ballotNumber}
            >
              <span
                className="grid size-20 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-500"
                aria-hidden="true"
              >
                <UserRound size={31} strokeWidth={1.5} />
              </span>
              <div>
                <span className="mb-1 inline-block rounded bg-slate-600 px-2 py-1 text-xs font-semibold text-white">
                  Ballot No. {ballotNumber}
                </span>
                <h3 className="font-semibold text-slate-800">Juan Dela Cruz</h3>
                <p className="mt-1 text-sm text-slate-600">AKA: Juaning</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
