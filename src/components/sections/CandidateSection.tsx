import { Download, UserRound } from "lucide-react";

const candidates = [
  "Antonio Suratos",
  'Roselio Mendoza',
  "Inocencio G Silbol",
  "Col Germiniano D Yuson Jr",
  "Mapagtapat Ongchangco",
  "Ma. Soledad Borromeo",
  "Lourdes Ferrer",
  "Jerichoe Cuison Cadungog",
  "Vic C. Castro",
  "Carolyn Denafeliz-Chin",
  "Charlene Biligan",
  "Raul Urgello",
  "Jesus Delfin Dela Cruz",
  "Lysias Cabusao",
  "Col Wilfredo Marana",
  "Ronald Lim",
  "Marcial Fabula",
  "Bernardo Fabula",
  "Col Ricardo D. Dela Paz"
];
const resources = [
  {
    label: "Election Guidelines",
    href: "/2026AFPOVAIElectionGuidelinesV2.0_final.pdf",
    filename: "2026AFPOVAIElectionGuidelinesV2.0_final.pdf",
  },
  {
    label: "RA 9904",
    href: "/RA_9904_Department%20Circular%20No.%202024-018.pdf",
    filename: "RA_9904_Department_Circular_No_2024-018.pdf",
  },
  {
    label: "Proxy Form",
    href: "/2026AFPOVAIElection_ProxyForm.pdf",
    filename: "2026AFPOVAIElection_ProxyForm.pdf",
  },
  {
    label: "Certificate of Candidacy",
    href: "/2026AFPOVAIElection_CertificateOfCandidacy.pdf",
    filename: "2026AFPOVAIElection_CertificateOfCandidacy.pdf",
  },
];

export function CandidateSection() {
  return (
    <section
      className="scroll-mt-[48px] bg-[#edf2ef] pb-16 pt-8 md:pb-[72px]"
      id="candidates"
      aria-labelledby="candidates-heading"
    >
      <div className="mx-auto w-[calc(100%_-_30px)] max-w-[1306px]">
        <div className="mb-6 flex flex-col items-center text-center">
          <div className="mb-8 flex w-full flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3">
            {resources.map((resource) => {
              const className = resource.href
                ? "flex w-full items-center justify-center gap-2 rounded-[8px] border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:border-slate-500 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700 sm:w-auto sm:py-4"
                : "flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-[8px] border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-medium text-slate-400 shadow-sm sm:w-auto sm:py-4";

              return resource.href ? (
                <a
                  className={className}
                  href={resource.href}
                  download={resource.filename}
                  aria-label={`Download ${resource.label}`}
                  key={resource.label}
                >
                  {resource.label}
                  <Download size={18} aria-hidden="true" />
                </a>
              ) : (
                <button
                  className={className}
                  type="button"
                  disabled
                  aria-label={`${resource.label} download will be available when the file is added`}
                  key={resource.label}
                >
                  {resource.label}
                  <Download size={18} className="text-slate-400" aria-hidden="true" />
                </button>
              );
            })}
          </div>
          <h2
            className="mb-1 text-[22px] font-bold leading-tight tracking-tight text-slate-800 sm:text-[26px]"
            id="candidates-heading"
          >
            Nominees Received / Preliminary List, Subject to Screening
          </h2>
          <p className="text-sm text-slate-600">
            A total of <b>eight (8) Directors</b> will be elected in this election.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 md:gap-4">
          {candidates.map((name) => (
            <article
              className="flex min-h-32 items-center gap-4 rounded-md bg-white p-6"
              key={name}
            >
              <span
                className="grid size-20 shrink-0 place-items-center rounded-full bg-slate-200 text-slate-500"
                aria-hidden="true"
              >
                <UserRound size={31} strokeWidth={1.5} />
              </span>
              <div>
                {/* <span className="mb-1 inline-block rounded bg-slate-600 px-2 py-1 text-xs font-semibold text-white">
                  Ballot No. {candidates.indexOf(name) + 1}
                </span> */}
                <h3 className="font-semibold text-slate-800">{name}</h3>
                {/* <p className="mt-1 text-sm text-slate-600">AKA: Juaning</p> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
