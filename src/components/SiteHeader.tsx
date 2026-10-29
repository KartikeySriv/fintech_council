import Link from "next/link";

type NavItem = {
  href: string;
  label: string;
  match?: string[];
  children?: { href: string; label: string; small: string }[];
};

const NAV: NavItem[] = [
  { href: "/", label: "Home", match: ["/"] },
  {
    href: "/about",
    label: "About",
    match: ["/about", "/annual-report"],
    children: [
      { href: "/about", label: "About Us", small: "Who we are and how we work" },
      { href: "/about#council", label: "Governing Council", small: "Leadership of FCC" },
      { href: "/annual-report", label: "Annual Reports", small: "Our year in review" },
    ],
  },
  {
    href: "/committees",
    label: "Committees",
    match: ["/committees"],
    children: [
      { href: "/committees/digital-lending", label: "Digital Lending", small: "DL-01" },
      { href: "/committees/regtech", label: "RegTech", small: "RT-02" },
      { href: "/committees/wealthtech", label: "WealthTech", small: "WT-03" },
      { href: "/committees/insurtech", label: "InsurTech", small: "IT-04" },
      { href: "/committees/credit-bureau", label: "Credit Bureau", small: "CB-05" },
    ],
  },
  {
    href: "/members",
    label: "Membership",
    match: ["/members", "/membership-benefits", "/apply-membership"],
    children: [
      { href: "/members", label: "Our Members", small: "175+ companies" },
      { href: "/membership-benefits", label: "Membership Benefits", small: "What you get" },
      { href: "/apply-membership", label: "Apply for Membership", small: "Join the council" },
    ],
  },
  {
    href: "/partners",
    label: "Partnership",
    match: ["/partners", "/partnership-benefits", "/apply-partnership"],
    children: [
      { href: "/partners", label: "Our Partners", small: "Who we work with" },
      { href: "/partnership-benefits", label: "Partnership Benefits", small: "Why partner with FCC" },
      { href: "/apply-partnership", label: "Apply for Partnership", small: "Start a conversation" },
    ],
  },
  {
    href: "/policy",
    label: "Policy & Research",
    match: ["/policy", "/research"],
    children: [
      { href: "/policy", label: "Policy", small: "Representations to regulators" },
      { href: "/research", label: "Research", small: "Reports and whitepapers" },
    ],
  },
  {
    href: "/live-events",
    label: "Events",
    match: ["/live-events", "/virtual-events"],
    children: [
      { href: "/live-events", label: "Live Events", small: "GFF and in-person events" },
      { href: "/virtual-events", label: "Virtual Events", small: "Webinars and knowledge sessions" },
    ],
  },
  { href: "/contact", label: "Contact", match: ["/contact"] },
];

function Chevron() {
  return (
    <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M2 4l3 3 3-3" />
    </svg>
  );
}

function isActive(active: string, item: NavItem) {
  if (!item.match) return false;
  if (item.href === "/" && active === "/") return true;
  if (item.href === "/") return false;
  return item.match.some((m) => active === m || active.startsWith(`${m}/`));
}

export function SiteHeader({ active }: { active: string }) {
  return (
    <header className="nav">
      <div className="row1">
        <div className="wrap">
          <Link href="/" className="brand" aria-label="FCC home">
            <div className="brand-mark">FCC</div>
            <div className="brand-text">
              <strong>Fintech Convergence Council</strong>
              <span>An IAMAI initiative · Since 2018</span>
            </div>
          </Link>
          <div className="hdr-right">
            <div className="hdr-links">
              <a href="mailto:info@fintechcouncil.in">info@fintechcouncil.in</a>
              <span>·</span>
              <a href="https://linkedin.com/company/69219060/" target="_blank" rel="noopener">
                LinkedIn
              </a>
              <a href="https://twitter.com/FCCUpdates" target="_blank" rel="noopener">
                X
              </a>
              <a
                href="https://www.facebook.com/Fintech-Convergence-Council-FCC-442712016473770/"
                target="_blank"
                rel="noopener"
              >
                Facebook
              </a>
            </div>
            <Link href="/apply-membership" className="btn btn-primary btn-sm nav-cta">
              Become a Member
            </Link>
          </div>
        </div>
      </div>
      <nav className="mainnav" aria-label="Main">
        <div className="wrap">
          <ul className="menu">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={isActive(active, item) ? "active" : undefined}>
                  {item.label}
                  {item.children ? <Chevron /> : null}
                </Link>
                {item.children ? (
                  <ul className="dropdown">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href}>
                          {child.label}
                          <small>{child.small}</small>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
