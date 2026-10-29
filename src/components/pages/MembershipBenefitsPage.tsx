export function MembershipBenefitsPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/members">Membership</a> <span>/</span>
              Benefits
            </div>{" "}
            <h1>Membership Benefits</h1>{" "}
            <p>What your company gets as a member of the Fintech Convergence Council.</p>
          </div>{" "}
          <div className="ph-art">
            <svg viewBox="0 0 300 240" aria-hidden="true">
              <circle
                cx="150"
                cy="120"
                r="110"
                stroke="rgba(255,255,255,.15)"
                fill="none"
                strokeDasharray="3 7"
              ></circle>{" "}
              <rect
                x="60"
                y="62"
                width="180"
                height="114"
                rx="14"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <rect x="80" y="86" width="30" height="22" rx="4" fill="#f1d79a"></rect>{" "}
              <path
                d="M80 140h70M80 154h40"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="210" cy="148" r="12" fill="rgba(255,255,255,.4)"></circle>{" "}
              <circle cx="196" cy="148" r="12" fill="rgba(255,255,255,.25)"></circle>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/members">Our Members</a>{" "}
          <a href="/membership-benefits" className="on">
            Membership Benefits
          </a>{" "}
          <a href="/apply-membership">Apply for Membership</a>
        </div>
      </nav>
      <section>
        <div className="wrap split">
          <div className="reveal">
            <span className="eyebrow">Why join</span>{" "}
            <h2>A seat at the table, and everything around it</h2>{" "}
            <p className="lead">
              Members get a direct line into policy conversations, plus the events, research and
              network that come with being part of IAMAI.
            </p>
            <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="/apply-membership" className="btn btn-primary">
                Apply now
              </a>{" "}
              <a href="/members" className="btn btn-outline">
                See our members
              </a>
            </div>
          </div>
          <div className="mcard-wrap reveal">
            <div className="mcard-back"></div>{" "}
            <div className="mcard">
              <div className="row">
                <div className="chip-ic"></div> <b style={{ fontSize: "1.1rem" }}>FCC</b>
              </div>{" "}
              <div className="num">MEMBER · 2026</div>{" "}
              <div className="row">
                <div>
                  <small>MEMBER OF</small> <b>Fintech Convergence Council</b>
                </div>{" "}
                <small style={{ textAlign: "right" }}>
                  IAMAI <br />
                  INCLUDED
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Benefits</span> <h2>Seven reasons members join</h2>
            </div>
          </div>
          <div className="grid-3 reveal">
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  01
                </span>{" "}
                <h4>Shape regulation</h4>{" "}
                <p>
                  Take part in working groups, committees and regulatory representations based on
                  your area of business.
                </p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 8a2 2 0 0 0 2-2h14a2 2 0 0 0 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 0-2 2H5a2 2 0 0 0-2-2v-2a2 2 0 0 0 0-4z"></path>{" "}
                  <path d="M13 6v12" strokeDasharray="2 2"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  02
                </span>{" "}
                <h4>Conference passes</h4>{" "}
                <p>Complimentary passes to all FCC and IAMAI conferences.</p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 19V5a2 2 0 0 1 2-2h12v18H6a2 2 0 0 1-2-2zM8 7h6M8 11h6"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  03
                </span>{" "}
                <h4>Every report</h4> <p>Access to all FCC reports and research.</p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 11v2a2 2 0 0 0 2 2h2l5 4V5L7 9H5a2 2 0 0 0-2 2zM16 8a5 5 0 0 1 0 8"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  04
                </span>{" "}
                <h4>Share your views</h4>{" "}
                <p>A chance to write for IAMAI's online monthly magazine.</p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="8" r="3"></circle> <circle cx="17" cy="10" r="2.5"></circle>{" "}
                  <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M14 20c0-2.5 1.5-4.5 3-4.5S21 17.5 21 20"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  05
                </span>{" "}
                <h4>Closed-door roundtables</h4>{" "}
                <p>
                  Invitations to FCC and IAMAI roundtables for your business area. These are not
                  open to non-members.
                </p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 13l3 3 7-7M3 12l5 5M21 7l-3-3"></path>{" "}
                  <path d="M2 12l4-4 4 4M22 8l-4 4"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  06
                </span>{" "}
                <h4>Network & grow</h4>{" "}
                <p>
                  Networking and business development through events, committee meetings and AGMs.
                </p>
              </div>
            </div>{" "}
            <div className="benefit">
              <div className="icon-box">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"></path>
                </svg>
              </div>{" "}
              <div>
                <span className="mono" style={{ fontSize: ".7rem", color: "var(--red)" }}>
                  07
                </span>{" "}
                <h4>IAMAI membership</h4> <p>FCC membership includes membership of IAMAI.</p>
              </div>
            </div>
            <a
              href="/apply-membership"
              className="benefit"
              style={{
                background: "var(--red)",
                color: "#fff",
                borderColor: "var(--red)",
                alignItems: "center",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.15rem" }}>Ready to join?</h4>{" "}
                <p style={{ color: "#FBE3E3" }}>Apply in under two minutes →</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div>
            <span className="eyebrow">Process</span> <h2>How membership works</h2>{" "}
            <p className="lead">
              Questions? Call 022-61766666 or write to swati.s@fintechcouncil.in
            </p>
          </div>
          <div className="steps-v reveal">
            <div className="s">
              <span className="n">01</span>{" "}
              <div>
                <h4>Share your details</h4> <p>Fill in the short application form.</p>
              </div>
            </div>{" "}
            <div className="s">
              <span className="n">02</span>{" "}
              <div>
                <h4>We get in touch</h4> <p>The FCC team contacts you about the next steps.</p>
              </div>
            </div>{" "}
            <div className="s">
              <span className="n">03</span>{" "}
              <div>
                <h4>Join committees</h4> <p>Pick the committees that match your business.</p>
              </div>
            </div>{" "}
            <div className="s">
              <span className="n">04</span>{" "}
              <div>
                <h4>Get involved</h4> <p>Take part in representations, roundtables and events.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
