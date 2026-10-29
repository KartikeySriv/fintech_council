export function RegTechPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/committees">Committees</a>{" "}
              <span>/</span>RegTech
            </div>
            <span className="pill" style={{ marginBottom: "14px" }}>
              <i></i>RT-02 · Committee
            </span>{" "}
            <h1>RegTech Committee</h1>{" "}
            <p>
              Works on industry issues, representation and growth of the regulatory technology
              ecosystem in India.
            </p>
            <div
              className="actions"
              style={{ display: "flex", gap: "12px", marginTop: "24px", flexWrap: "wrap" }}
            >
              <a
                href="mailto:swati.s@fintechcouncil.in?subject=Joining%20the%20RegTech%20Committee"
                className="btn btn-light"
              >
                Join this committee
              </a>{" "}
              <a href="#work" className="btn btn-ghost">
                See our work
              </a>
            </div>
          </div>
          <div className="ph-art" style={{ maxWidth: "340px" }}>
            <svg viewBox="0 0 300 240" aria-hidden="true">
              <circle
                cx="150"
                cy="120"
                r="110"
                stroke="rgba(255,255,255,.15)"
                fill="none"
                strokeDasharray="3 7"
              ></circle>{" "}
              <path
                d="M150 40l70 26v52c0 44-30 70-70 82-40-12-70-38-70-82V66z"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <path
                d="M118 122l22 22 42-44"
                stroke="#fff"
                strokeWidth="5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <line x1="60" y1="100" x2="240" y2="100" stroke="#fff" strokeOpacity=".6">
                <animate
                  attributeName="y1"
                  values="60;190;60"
                  dur="3s"
                  repeatCount="indefinite"
                ></animate>{" "}
                <animate
                  attributeName="y2"
                  values="60;190;60"
                  dur="3s"
                  repeatCount="indefinite"
                ></animate>
              </line>
            </svg>
          </div>
        </div>
      </section>

      <nav className="subnav">
        <div className="wrap">
          <a href="/committees/digital-lending">Digital Lending</a>{" "}
          <a href="/committees/regtech" className="on">
            RegTech
          </a>{" "}
          <a href="/committees/wealthtech">WealthTech</a>{" "}
          <a href="/committees/insurtech">InsurTech</a>{" "}
          <a href="/committees/credit-bureau">Credit Bureau</a>
        </div>
      </nav>

      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">Focus areas</span> <h2>What this committee works on</h2>{" "}
            <p className="lead">
              <b style={{ color: "var(--charcoal)" }}>Open to:</b> Security, compliance and
              regulatory technology companies. Members help shape the committee's agenda.
            </p>
            <div className="grid-2" style={{ marginTop: "24px", gap: "12px" }}>
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>KYC &amp; CKYC</h4>
              </div>{" "}
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>AML / CFT</h4>
              </div>{" "}
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>Video-KYC</h4>
              </div>{" "}
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>Data protection (DPDP)</h4>
              </div>{" "}
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>Cyber resilience</h4>
              </div>{" "}
              <div className="benefit" style={{ padding: "16px", alignItems: "center" }}>
                <div className="icon-box" style={{ width: "36px", height: "36px" }}>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="5" y="11" width="14" height="10" rx="2"></rect>{" "}
                    <path d="M8 11V7a4 4 0 0 1 8 0v4M12 15v2"></path>
                  </svg>
                </div>{" "}
                <h4 style={{ margin: "0", fontSize: ".92rem" }}>Self-regulatory organisations</h4>
              </div>
            </div>
          </div>
          <div className="reveal">
            <span className="eyebrow">Leadership</span> <h2>Who leads it</h2>{" "}
            <div className="grid-2" style={{ marginTop: "20px" }}>
              <div className="person">
                <div className="avatar">AR</div>{" "}
                <span className="tag" style={{ marginBottom: "10px", display: "inline-block" }}>
                  Chair
                </span>{" "}
                <h4>Ajay Rajan</h4> <div className="org">MD &amp; CEO, Protean e-Gov</div>
              </div>{" "}
              <div className="person">
                <div className="avatar">DS</div>{" "}
                <span className="tag" style={{ marginBottom: "10px", display: "inline-block" }}>
                  Co-Chair
                </span>{" "}
                <h4>Deval Sheth</h4>{" "}
                <div className="org">Managing Director, Asia Pacific, Utimaco</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft" id="work">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Policy work</span> <h2>Representations &amp; sessions</h2>{" "}
              <p className="lead">Recent submissions and knowledge sessions linked to RegTech.</p>
            </div>{" "}
            <a href="/policy" className="btn btn-outline">
              Full policy hub
            </a>
          </div>
          <div className="tracker" id="tracker" data-limit="0">
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Feedback on the draft omnibus framework for recognising SROs for regulated entities
              </h4>
            </div>{" "}
            <div className="sub" data-r="CERSAI reg">
              <div className="top">
                <span className="tag">CERSAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Improving the quality of KYC data in C-KYCR</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Simplification of KYC for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Proposal to introduce Self-V-CIP</h4>
            </div>{" "}
            <div className="sub" data-r="MeitY reg">
              <div className="top">
                <span className="tag">MeitY</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Discussion on the Digital Personal Data Protection Bill, 2022</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Cyber resilience and digital payment security controls for PSOs</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Masterclass</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Masterclass: DPDP and its impact across the fintech ecosystem</h4>
            </div>{" "}
            <div className="sub" data-r="Session insur reg">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Impact of the DPDP Act, 2023 on the insurance sector</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Roundtable</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Roundtable on the proposed IFSCA (Payment Services) Regulations</h4>
            </div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Knowledge sessions</span> <h2>Related webinars</h2>
            </div>{" "}
            <a href="/virtual-events" className="btn btn-ghost">
              All sessions
            </a>
          </div>{" "}
          <div className="web-grid reveal">
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">13</div> <div className="m">Mar 2026</div>
                </div>{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>RE–LSP compliance essentials</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">20</div> <div className="m">Feb 2026</div>
                </div>{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Practical applications of AI in AML &amp; fraud monitoring</h4>{" "}
                <span className="time">3:00–4:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2026">
              <div className="wtop">
                <div>
                  <div className="d">29</div> <div className="m">Jan 2026</div>
                </div>{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Simplification of client onboarding with KRAs</h4>{" "}
                <span className="time">3:00 PM IST · Virtual</span>
              </div>
            </div>{" "}
            <div className="web" data-r="y2025">
              <div className="wtop">
                <div>
                  <div className="d">28</div> <div className="m">May 2025</div>
                </div>{" "}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="6" width="13" height="12" rx="2"></rect>{" "}
                  <path d="M16 10l5-3v10l-5-3"></path>
                </svg>
              </div>{" "}
              <div className="wbody">
                <h4>Updation and periodic updation of KYC</h4>{" "}
                <span className="time">3:30–4:30 PM IST · Virtual</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Other committees</span> <h2>Explore the council</h2>
            </div>
          </div>
          <div className="grid-4 reveal">
            <a href="/committees/digital-lending" className="ccard">
              <span className="code">DL-01</span>{" "}
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
                  <rect x="3" y="6" width="18" height="12" rx="2"></rect>{" "}
                  <path d="M3 10h18M7 15h3"></path>
                </svg>
              </div>{" "}
              <h3>Digital Lending</h3>{" "}
              <p>Growth and fair regulation for P2P, SME, personal and other digital lending.</p>{" "}
              <div className="chair">
                <b>Vibhav Hathi</b>Chair · Co-Founder, OneCard
              </div>
            </a>{" "}
            <a href="/committees/wealthtech" className="ccard">
              <span className="code">WT-03</span>{" "}
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
                  <path d="M3 17l6-6 4 4 8-8M15 7h6v6"></path>
                </svg>
              </div>{" "}
              <h3>WealthTech</h3>{" "}
              <p>
                Investor access, mutual funds, settlement and onboarding across India&#x27;s
                investments ecosystem.
              </p>{" "}
              <div className="chair">
                <b>Srinivas Jain</b>Chair · Executive Director, SBI Funds
              </div>
            </a>{" "}
            <a href="/committees/insurtech" className="ccard">
              <span className="code">IT-04</span>{" "}
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
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"></path>{" "}
                  <path d="M9 12l2 2 4-4"></path>
                </svg>
              </div>{" "}
              <h3>InsurTech</h3>{" "}
              <p>Life, general and health insurance, and aggregators, in a digital-first market.</p>{" "}
              <div className="chair">
                <b>Sarbvir Singh</b>Chair · Joint Group CEO, PB Fintech
              </div>
            </a>{" "}
            <a href="/committees/credit-bureau" className="ccard">
              <span className="code">CB-05</span>{" "}
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
                  <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>{" "}
                  <path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"></path>
                </svg>
              </div>{" "}
              <h3>Credit Bureau</h3>{" "}
              <p>Credit information, inclusion and prudent lending through advocacy.</p>{" "}
              <div className="chair">
                <b>Open for nominations</b>Chair to be announced
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-soft" style={{ paddingTop: "0" }}>
        <div className="wrap">
          <div className="cta-box reveal">
            <div className="art">
              <svg className="net" viewBox="0 0 500 500" fill="none" aria-hidden="true">
                <circle
                  cx="250"
                  cy="250"
                  r="232"
                  stroke="rgba(255,255,255,.12)"
                  strokeDasharray="2 8"
                ></circle>{" "}
                <circle
                  cx="250"
                  cy="250"
                  r="165"
                  stroke="rgba(255,255,255,.28)"
                  strokeDasharray="4 6"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 250 250"
                    to="360 250 250"
                    dur="80s"
                    repeatCount="indefinite"
                  ></animateTransform>
                </circle>{" "}
                <circle cx="250" cy="250" r="96" stroke="rgba(255,255,255,.18)"></circle>{" "}
                <circle cx="307.4" cy="25.2" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="312.3"
                  y="9.8"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  RBI
                </text>{" "}
                <circle cx="461.5" cy="154.7" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="479.8"
                  y="150.5"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  SEBI
                </text>{" "}
                <circle cx="456.4" cy="356.0" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="474.2"
                  y="369.1"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="start"
                >
                  IRDAI
                </text>{" "}
                <circle cx="295.8" cy="477.4" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="299.8"
                  y="501.0"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="middle"
                >
                  NPCI
                </text>{" "}
                <circle cx="100.8" cy="427.6" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="87.9"
                  y="446.9"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  MeitY
                </text>{" "}
                <circle cx="18.1" cy="244.1" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="-1.9"
                  y="247.5"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  CERSAI
                </text>{" "}
                <circle cx="110.0" cy="65.0" r="4" fill="#fff" opacity=".7"></circle>{" "}
                <text
                  x="98.0"
                  y="53.0"
                  fill="rgba(255,255,255,.75)"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="11"
                  textAnchor="end"
                >
                  IBBI
                </text>{" "}
                <path
                  id="p0"
                  d="M250.0 85.0 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="2.60s" repeatCount="indefinite" begin="-0.1s">
                    <mpath href="#p0"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="250.0"
                    cy="85.0"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="250.0" cy="85.0" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="0.0s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="0.0s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="250.0"
                    y="89.0"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Lending
                  </text>
                </g>{" "}
                <path
                  id="p1"
                  d="M392.9 167.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="2.95s" repeatCount="indefinite" begin="-0.5s">
                    <mpath href="#p1"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="392.9"
                    cy="167.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="392.9" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="0.6s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="0.6s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="392.9"
                    y="171.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    InsurTech
                  </text>
                </g>{" "}
                <path
                  id="p2"
                  d="M392.9 332.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="3.30s" repeatCount="indefinite" begin="-0.9s">
                    <mpath href="#p2"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="392.9"
                    cy="332.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="392.9" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="1.2s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="392.9"
                    y="336.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    WealthTech
                  </text>
                </g>{" "}
                <path
                  id="p3"
                  d="M250.0 415.0 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="3.65s" repeatCount="indefinite" begin="-1.3s">
                    <mpath href="#p3"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="250.0"
                    cy="415.0"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="250.0" cy="415.0" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="1.8s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="1.8s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="250.0"
                    y="419.0"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    RegTech
                  </text>
                </g>{" "}
                <path
                  id="p4"
                  d="M107.1 332.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="4.00s" repeatCount="indefinite" begin="-1.7s">
                    <mpath href="#p4"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="107.1"
                    cy="332.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="107.1" cy="332.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="2.4s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="2.4s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="107.1"
                    y="336.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Bureaus
                  </text>
                </g>{" "}
                <path
                  id="p5"
                  d="M107.1 167.5 L250 250"
                  stroke="rgba(255,255,255,.35)"
                  strokeWidth="1.2"
                ></path>{" "}
                <circle r="3.5" fill="#fff">
                  <animateMotion dur="4.35s" repeatCount="indefinite" begin="-2.1s">
                    <mpath href="#p5"></mpath>
                  </animateMotion>
                </circle>{" "}
                <g>
                  <circle
                    cx="107.1"
                    cy="167.5"
                    r="34"
                    fill="rgba(255,255,255,.12)"
                    stroke="rgba(255,255,255,.5)"
                  ></circle>{" "}
                  <circle cx="107.1" cy="167.5" r="34" stroke="#fff" strokeOpacity=".5">
                    <animate
                      attributeName="r"
                      values="34;44;34"
                      dur="4s"
                      begin="3.0s"
                      repeatCount="indefinite"
                    ></animate>{" "}
                    <animate
                      attributeName="stroke-opacity"
                      values=".5;0;.5"
                      dur="4s"
                      begin="3.0s"
                      repeatCount="indefinite"
                    ></animate>
                  </circle>{" "}
                  <text
                    x="107.1"
                    y="171.5"
                    fill="#fff"
                    fontFamily="Plus Jakarta Sans,sans-serif"
                    fontSize="11.5"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    Payments
                  </text>
                </g>{" "}
                <circle cx="250" cy="250" r="62" fill="#fff"></circle>{" "}
                <circle cx="250" cy="250" r="70" stroke="#fff" strokeOpacity=".4"></circle>{" "}
                <text
                  x="250"
                  y="248"
                  fill="#BF1A1F"
                  fontFamily="Plus Jakarta Sans,sans-serif"
                  fontSize="26"
                  fontWeight="800"
                  textAnchor="middle"
                >
                  FCC
                </text>{" "}
                <text
                  x="250"
                  y="268"
                  fill="#7B7D7C"
                  fontFamily="JetBrains Mono,monospace"
                  fontSize="8.5"
                  textAnchor="middle"
                  letterSpacing="1.5"
                >
                  CONVERGENCE
                </text>
              </svg>
            </div>{" "}
            <div style={{ position: "relative" }}>
              <span className="eyebrow">Membership &amp; partnership</span>{" "}
              <h2>Bring your company's voice to the RegTech Committee.</h2>{" "}
              <p>
                Members take part in working groups and regulatory representations based on their
                area of business.
              </p>
              <div className="cta-actions">
                <a href="/apply-membership" className="btn btn-light">
                  Apply for membership
                </a>{" "}
                <a href="/apply-partnership" className="btn btn-ghost">
                  Partner with us
                </a>
              </div>
            </div>
            <ul className="checks">
              <li>Direct input into representations to regulators</li>{" "}
              <li>A seat on sector committees with industry peers</li>{" "}
              <li>Complimentary passes to FCC and IAMAI conferences</li>{" "}
              <li>Members-only roundtables and every FCC report</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
