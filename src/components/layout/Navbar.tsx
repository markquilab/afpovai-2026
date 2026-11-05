import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return;
      if (
        menuRef.current?.contains(event.target) ||
        menuToggleRef.current?.contains(event.target)
      )
        return;
      setMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="relative mx-auto w-[calc(100%_-_30px)] max-w-[1240px]">
        <div className="flex min-h-[72px] items-center justify-between">
          <a
            className="flex items-center gap-3 no-underline"
            href="#hero"
            aria-label="AFPOVAI announcement home"
          >
            <img
              className="size-12 rounded-full border border-slate-200 bg-white object-contain"
              src="/afpovai-logo.png"
              alt="AFPOVAI seal"
              width="50"
              height="50"
            />
            <span className="grid gap-0.5">
              <strong className="text-sm tracking-widest text-slate-900">
                AFPOVAI
              </strong>
              <span className="text-xs text-slate-600">
                Member announcement
              </span>
            </span>
          </a>

          <button
            ref={menuToggleRef}
            className="rounded-lg border border-slate-200 bg-white p-2 text-slate-800 md:hidden"
            type="button"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="page-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>

        <nav
          ref={menuRef}
          className={`${menuOpen ? "grid" : "hidden"} gap-1 md:absolute md:top-4 md:right-0 md:flex md:gap-8`}
          id="page-navigation"
          aria-label="Page navigation"
        >
          <a
            className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:text-lime-700 md:last:pr-0"
            href="#candidates"
            onClick={() => setMenuOpen(false)}
          >
            Candidates
          </a>
          <a
            className="rounded-lg px-3 py-3 font-medium text-slate-700 hover:text-lime-700 md:last:pr-0"
            href="#activities"
            onClick={() => setMenuOpen(false)}
          >
            Activities
          </a>
        </nav>
      </div>
    </header>
  );
}
