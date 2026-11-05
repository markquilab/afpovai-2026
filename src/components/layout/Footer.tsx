type FooterProps = { publishedDate: string };

export function Footer({ publishedDate }: FooterProps) {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto flex min-h-24 w-[calc(100%_-_30px)] max-w-[1240px] flex-col items-start justify-between gap-4 py-5 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <img
            className="size-10 rounded-full border border-white/30 bg-white object-contain"
            src="/afpovai-logo.png"
            alt=""
            width="38"
            height="38"
          />
          <div className="grid gap-1">
            <strong className="text-xs tracking-widest">AFPOVAI</strong>
            <span className="max-w-72 text-xs text-slate-300">
              Armed Forces of the Philippines Officers Village Association, Inc.
            </span>
          </div>
        </div>
        <p className="ml-[52px] text-xs text-slate-300 md:ml-0">
          ELECOM 2026 · {publishedDate}
        </p>
      </div>
    </footer>
  );
}
