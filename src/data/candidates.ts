export type Candidate = {
  name: string;
  profile?: string;
};

export type CandidateResource = {
  label: string;
  href?: string;
  filename?: string;
};

export const candidateSectionCopy = {
  heading: "Nominees Received / Preliminary List, Subject to Screening",
  intro: "A total of",
  directorCount: "eight (8) Directors",
  suffix: "will be elected in this election.",
} as const;

export const candidates: Candidate[] = [
  {
    name: "Como Antonio Suratos (Ret)",
    profile: "/candidates/antonio-suratos.png",
  },
  {
    name: "Mr. Roselio Angeles Mendoza",
    profile: "/candidates/roselio-mendoza.png",
  },
  {
    name: "Col Inocencio G. Silbol (Ret)",
    profile: "/candidates/inocencio-silbol.png",
  },
  {
    name: "Col Germiniano D. Yuson, Jr (Ret)",
    profile: "/candidates/germiniano-yuson.png",
  },
  {
    name: "Col Mapagtapat Ongchangco (Ret)",
    profile: "/candidates/mapagtapat-ongchangco.png",
  },
  {
    name: "Mrs. Soledad Borromeo",
    profile: "/candidates/soledad-borromeo.png",
  },
  {
    name: "Dr. Lourdes Ferrer",
    profile: "/candidates/lourdes-ferrer.png",
  },
  {
    name: "Mr. Jerichoe Cuison Cadungog",
    profile: "/candidates/jerichoe-cadungog.png",
  },
  {
    name: "BGen Vic C. Castro (Ret)",
    profile: "/candidates/vic-castro.png",
  },
  {
    name: "Mrs. Carolyn Demafeliz-Chin",
    profile: "/candidates/carolyn-chin.png",
  },
  {
    name: "Mrs. Charlene L. Biligan",
    profile: "/candidates/charlene-biligan.png",
  },
  {
    name: "LtGen Raul Urgello (Ret)",
    profile: "/candidates/raul-urgello.png",
  },
  {
    name: "Col Jesus Delfin G. Dela Cruz (Ret)",
    profile: "/candidates/jesus-dela-cruz.png",
  },
  {
    name: "BGen Lysias C. Cabusao (Ret)",
    profile: "/candidates/lysias-cabusao.png",
  },
  {
    name: "Col Wilfredo V. Marana (Ret)",
    profile: "/candidates/wilson-marana.png",
  },
  {
    name: "Mr. Ronald Lim",
    profile: "/candidates/ronald-lim.png",
  },
  {
    name: "Mr. Marcial F. Fabula",
    profile: "/candidates/marcial-fabula.png",
  },
  {
    name: "Col Bernardo F. Fabula (Ret)",
    profile: "/candidates/bernardo-fabula.png",
  },
  {
    name: "Col Ricardo Dela Paz (Ret)",
    profile: "/candidates/ricardo-dela-paz.png",
  },
];

export const candidateResources: CandidateResource[] = [
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
