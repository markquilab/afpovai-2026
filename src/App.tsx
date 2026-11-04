import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  CalendarDays,
  Clock3,
  Menu,
  MapPin,
  UsersRound,
  X,
  type LucideIcon,
} from 'lucide-react'
import './App.css'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardHeader,
} from '@/components/ui/card'
import { featuredAnnouncement } from '@/data/announcement'

type DetailCardProps = {
  icon: LucideIcon
  label: string
  title: string
  description: string
  className?: string
}

function DetailCard({
  icon: Icon,
  label,
  title,
  description,
  className = '',
}: DetailCardProps) {
  return (
    <Card className={`detail-card ${className}`}>
      <CardContent className="detail-card-content">
        <span className="detail-icon" aria-hidden="true">
          <Icon size={20} strokeWidth={1.8} />
        </span>
        <p className="detail-label">{label}</p>
        <h3>{title}</h3>
        <p className="detail-description">{description}</p>
      </CardContent>
    </Card>
  )
}

function App() {
  const announcement = featuredAnnouncement
  const [activeSection, setActiveSection] = useState<'notice' | 'event-details' | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggleRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    let animationFrame = 0

    const updateActiveSection = () => {
      window.cancelAnimationFrame(animationFrame)
      animationFrame = window.requestAnimationFrame(() => {
        const headerHeight = document.querySelector('.site-header')?.getBoundingClientRect().height ?? 0
        const activationLine = headerHeight + 120
        const currentSection = ['event-details', 'notice']
          .map((id) => document.getElementById(id))
          .filter(
            (section): section is HTMLElement =>
              section !== null && section.getBoundingClientRect().top <= activationLine,
          )
          .at(-1)

        if (currentSection?.id === 'notice' || currentSection?.id === 'event-details') {
          setActiveSection(currentSection.id)
        } else {
          setActiveSection(null)
        }
      })
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    if (!menuOpen) return

    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (!(event.target instanceof Node)) return
      if (menuRef.current?.contains(event.target) || menuToggleRef.current?.contains(event.target)) return

      setMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeOnOutsidePointer)
    return () => document.removeEventListener('pointerdown', closeOnOutsidePointer)
  }, [menuOpen])

  return (
    <div className="site-shell" id="hero">
      <header className="site-header">
        <div className="header-inner page-container">
          <a className="brand" href="#hero" aria-label="AFPOVAI announcement home">
            <img
              className="brand-logo"
              src="/afpovai-logo.png"
              alt="AFPOVAI seal"
              width="58"
              height="58"
            />
            <span className="brand-copy">
              <strong>AFPOVAI</strong>
              <span>Member announcement</span>
            </span>
          </a>

          <button
            ref={menuToggleRef}
            className="header-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="page-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>

          <nav
            ref={menuRef}
            className={`header-nav${menuOpen ? ' is-open' : ''}`}
            id="page-navigation"
            aria-label="Page navigation"
          >
            <a
              className={activeSection === 'event-details' ? 'is-active' : undefined}
              href="#event-details"
              aria-current={activeSection === 'event-details' ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Event Details
            </a>
            <a
              className={activeSection === 'notice' ? 'is-active' : undefined}
              href="#notice"
              aria-current={activeSection === 'notice' ? 'location' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              Official Notice
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" aria-labelledby="page-title">
          <div className="hero-decoration hero-decoration-one" aria-hidden="true" />
          <div className="hero-decoration hero-decoration-two" aria-hidden="true" />
          <div className="hero-grid page-container">
            <div className="hero-copy">
              <p className="published-date">Published {announcement.publishedDate}</p>
              <h1 id="page-title">
                <span className="title-intro">Notice of</span>
                AFPOVAI <span className="title-year">2026</span>
                <span className="title-last-line">Board of Directors Election</span>
              </h1>
              <p className="hero-description">
                Notice is hereby given to all members of the Armed Forces of the
                Philippines Officers Village Association, Inc. (AFPOVAI) that the
                Annual Election of the Board of Directors will take place during
                the General Assembly.
              </p>
              <a
                className={buttonVariants({ size: 'lg', className: 'hero-cta' })}
                href="#event-details"
              >
                View event details
                <ArrowDown size={17} aria-hidden="true" />
              </a>
            </div>

            <Card className="event-card">
              <CardHeader className="event-card-header">
                <div className="event-card-topline">
                  <span className="event-card-label">Mark your calendar</span>
                  <CalendarDays size={19} aria-hidden="true" />
                </div>
                <div className="date-lockup" aria-label={announcement.eventDate}>
                  <span className="date-month">DEC</span>
                  <strong>05</strong>
                  <span className="date-year">2026</span>
                </div>
                <p className="event-card-title">Annual General Assembly</p>
                <p className="event-card-subtitle">&amp; Board of Directors Election</p>
              </CardHeader>
              <CardContent className="event-card-content">
                <div className="event-time-row">
                  <span className="event-time-icon" aria-hidden="true">
                    <Clock3 size={18} />
                  </span>
                  <div>
                    <span className="event-detail-label">General Assembly</span>
                    <strong>{announcement.assemblyHours}</strong>
                  </div>
                </div>
                <div className="voting-window">
                  <span>In-person voting</span>
                  <strong>{announcement.votingHours}</strong>
                </div>
                <div className="event-card-location">
                  <MapPin size={17} aria-hidden="true" />
                  <span>Bonifacio Naval Station, Taguig City</span>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="hero-bottom-rule" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <section
          className="details-section page-container"
          id="event-details"
          aria-labelledby="details-title"
        >
          <div className="section-heading">
            <p className="section-eyebrow">The essentials</p>
            <h2 id="details-title">When, where, and why</h2>
            <p>
              Key information for the AFPOVAI Annual General Assembly and
              election.
            </p>
          </div>

          <div className="details-grid">
            <DetailCard
              icon={CalendarDays}
              label="Date & time"
              title={announcement.eventDate}
              description={`General Assembly: ${announcement.assemblyHours}.`}
              className="date-detail-card"
            />
            <DetailCard
              icon={MapPin}
              label="Venue"
              title="Bonifacio Naval Station"
              description={announcement.venue}
              className="venue-detail-card"
            />
            <DetailCard
              icon={UsersRound}
              label="Purpose"
              title="Annual General Assembly"
              description={announcement.purpose}
              className="purpose-detail-card"
            />
          </div>

          <div className="voting-callout">
            <span className="voting-callout-icon" aria-hidden="true">
              <Clock3 size={19} />
            </span>
            <p>
              <strong>In-person voting runs {announcement.votingHours}.</strong>
              <span> The General Assembly takes place from {announcement.assemblyHours}.</span>
            </p>
          </div>
        </section>

        <section
          className="notice-section"
          id="notice"
          aria-labelledby="notice-title"
        >
          <div className="notice-layout page-container">
            <div className="notice-intro">
              <Badge className="notice-badge" variant="secondary">
                Formal notice
              </Badge>
              <h2 id="notice-title">To all AFPOVAI members</h2>
              <p>
                The Election Committee gives notice of the 2026 Board of
                Directors election in accordance with the Association’s
                governing documents.
              </p>
              <div className="notice-stamp" aria-hidden="true">
                <img src="/afpovai-logo.png" alt="" width="84" height="84" />
                <span>AFPOVAI<br />TAGUIG</span>
              </div>
            </div>

            <Card className="notice-card">
              <CardContent className="notice-card-content">
                <dl className="notice-meta">
                  <div>
                    <dt>To</dt>
                    <dd>{announcement.recipient}</dd>
                  </div>
                  <div>
                    <dt>From</dt>
                    <dd>{announcement.author}</dd>
                  </div>
                  <div>
                    <dt>Published Date</dt>
                    <dd>{announcement.publishedDate}</dd>
                  </div>
                  <div className="notice-subject">
                    <dt>Subject</dt>
                    <dd>{announcement.subject}</dd>
                  </div>
                </dl>
                <div className="notice-divider" />
                <p className="notice-body">{announcement.notice}</p>
                <div className="notice-purpose">
                  <span>Purpose</span>
                  <p>{announcement.purpose}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner page-container">
          <div className="footer-brand">
            <img src="/afpovai-logo.png" alt="" width="38" height="38" />
            <div>
              <strong>AFPOVAI</strong>
              <span>Armed Forces of the Philippines Officers Village Association, Inc.</span>
            </div>
          </div>
          <p>Election Committee (ELECOM) · {announcement.publishedDate}</p>
        </div>
      </footer>
    </div>
  )
}

export default App
