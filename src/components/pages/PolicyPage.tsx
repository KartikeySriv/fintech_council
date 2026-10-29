export function PolicyPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/policy">Policy &amp; Research</a>{" "}
              <span>/</span>Policy
            </div>{" "}
            <h1>Policy</h1>{" "}
            <p>
              How FCC carries the industry's voice to regulators and government: representations,
              consultation responses and concept notes.
            </p>
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
                x="70"
                y="30"
                width="130"
                height="170"
                rx="10"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M92 66h86M92 90h86M92 114h60"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <circle cx="200" cy="176" r="38" fill="#fff"></circle>{" "}
              <circle
                cx="200"
                cy="176"
                r="28"
                stroke="#BF1A1F"
                strokeWidth="2"
                fill="none"
                strokeDasharray="3 4"
              ></circle>{" "}
              <text
                x="200"
                y="181"
                fill="#BF1A1F"
                fontSize="12"
                fontWeight="800"
                textAnchor="middle"
                fontFamily="Plus Jakarta Sans"
              >
                FCC
              </text>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/policy" className="on">
            Policy
          </a>{" "}
          <a href="/research">Research</a>
        </div>
      </nav>
      <section>
        <div className="wrap split" style={{ alignItems: "start" }}>
          <div className="reveal">
            <span className="eyebrow">At a glance</span> <h2>Where our representations go</h2>{" "}
            <p className="lead">
              Count of representations listed on this page, by regulator or government body.
            </p>
            <div style={{ marginTop: "22px", display: "flex", gap: "28px", flexWrap: "wrap" }}>
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>36</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>representations</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>7</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>bodies engaged</div>
              </div>{" "}
              <div>
                <b style={{ fontSize: "2rem", fontWeight: "800" }}>7</b>{" "}
                <div style={{ color: "var(--muted)", fontSize: ".85rem" }}>policy sessions</div>
              </div>
            </div>
          </div>
          <div className="card reveal">
            <div className="hbar">
              <div className="r">
                <b>RBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="100%"></div>
                </div>{" "}
                <span className="v">18</span>
              </div>{" "}
              <div className="r">
                <b>IRDAI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="39%"></div>
                </div>{" "}
                <span className="v">7</span>
              </div>{" "}
              <div className="r">
                <b>SEBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="33%"></div>
                </div>{" "}
                <span className="v">6</span>
              </div>{" "}
              <div className="r">
                <b>NPCI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="11%"></div>
                </div>{" "}
                <span className="v">2</span>
              </div>{" "}
              <div className="r">
                <b>CERSAI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>{" "}
              <div className="r">
                <b>IBBI</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>{" "}
              <div className="r">
                <b>MeitY</b>{" "}
                <div className="track">
                  <div className="fill" data-w="6%"></div>
                </div>{" "}
                <span className="v">1</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Concept notes</span> <h2>Key representations</h2>{" "}
              <p className="lead">
                In-depth notes setting out the industry's position on major regulatory questions.
              </p>
            </div>
          </div>
          <div className="filters" data-filter-for="notes">
            <button className="chip active" data-f="all">
              All
            </button>{" "}
            <button className="chip" data-f="RBI">
              RBI
            </button>{" "}
            <button className="chip" data-f="SEBI">
              SEBI
            </button>{" "}
            <button className="chip" data-f="IRDAI">
              IRDAI
            </button>
          </div>
          <div id="notes" style={{ display: "grid", gap: "12px" }}>
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Fintech LSPs: the case for a better data access framework</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>FLDG: a lever for financial inclusion</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="SEBI wealth">
              <div className="doc">SEBI</div>{" "}
              <div>
                <h4>
                  Framework for platforms providing execution-only services in direct plans of
                  mutual funds
                </h4>{" "}
                <p>Representation · SEBI · WealthTech</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Guidelines on digital lending: industry representation</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Industry challenges and recommendations in MSME lending</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="SEBI wealth">
              <div className="doc">SEBI</div>{" "}
              <div>
                <h4>Two-factor authentication for mutual fund unit transactions</h4>{" "}
                <p>Representation · SEBI · WealthTech</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Regulatory framework for Digital Financial Service Providers</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="IRDAI insur">
              <div className="doc">IRDAI</div>{" "}
              <div>
                <h4>Key industry recommendations for IRDAI&#x27;s consideration</h4>{" "}
                <p>Representation · IRDAI · InsurTech</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Representation against RBI regulations for lending against e-gold</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="RBI lend">
              <div className="doc">RBI</div>{" "}
              <div>
                <h4>Industry concerns regarding peer-to-peer (P2P) lending</h4>{" "}
                <p>Representation · RBI · Digital Lending</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>{" "}
            <div className="rep" data-r="SEBI wealth">
              <div className="doc">SEBI</div>{" "}
              <div>
                <h4>Nomination for mutual fund unit holders</h4>{" "}
                <p>Representation · SEBI · WealthTech</p>
              </div>{" "}
              <a
                href="https://www.fintechcouncil.in/policy.php"
                target="_blank"
                rel="noopener"
                className="go link-arrow"
              >
                Read{" "}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="sec-head">
            <div>
              <span className="eyebrow">Activity log</span>{" "}
              <h2>Recent submissions &amp; sessions</h2>
            </div>
          </div>
          <div className="filters" data-filter-for="tracker">
            <button className="chip active" data-f="all">
              All <span className="n">32</span>
            </button>{" "}
            <button className="chip" data-f="RBI">
              RBI <span className="n">11</span>
            </button>{" "}
            <button className="chip" data-f="SEBI">
              SEBI <span className="n">3</span>
            </button>{" "}
            <button className="chip" data-f="IRDAI">
              IRDAI <span className="n">6</span>
            </button>{" "}
            <button className="chip" data-f="NPCI">
              NPCI <span className="n">2</span>
            </button>{" "}
            <button className="chip" data-f="MeitY">
              MeitY <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="CERSAI">
              CERSAI <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="IBBI">
              IBBI <span className="n">1</span>
            </button>{" "}
            <button className="chip" data-f="Session">
              Knowledge sessions <span className="n">7</span>
            </button>
          </div>{" "}
          <div className="tracker" id="tracker" data-limit="12">
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>PAN verification access for Lending Service Providers</h4>
            </div>{" "}
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
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry feedback on T+0 settlement</h4>
            </div>{" "}
            <div className="sub" data-r="IBBI lend">
              <div className="top">
                <span className="tag">IBBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Submission of information for unsecured loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Simplification of KYC for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>UPI mandate and UPI AutoPay</h4>
            </div>{" "}
            <div className="sub" data-r="NPCI lend">
              <div className="top">
                <span className="tag">NPCI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Streamlining e-mandate registration for MSMEs</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Aggregation of loan products from multiple lenders</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Industry representation on insurance literacy</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>New PAN verification system deadline</h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Proposal to introduce Self-V-CIP</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Suggestions on gold loans</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Impact of recent regulations on the securitisation market</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Digital lending guidelines: direct disbursal of funds</h4>
            </div>{" "}
            <div className="sub" data-r="SEBI wealth">
              <div className="top">
                <span className="tag">SEBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Blocking of funds for trading in the secondary market (2023)</h4>
            </div>{" "}
            <div className="sub" data-r="MeitY reg">
              <div className="top">
                <span className="tag">MeitY</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Discussion on the Digital Personal Data Protection Bill, 2022</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Draft IRDAI (Bima Sugam Insurance E-Marketplace) Regulations, 2024</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Representation on Bima Vahak guidelines</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI bureau">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>
                Support for CICs on overlaps between the CIC (Regulation) Act, 2005 and the DPDPA
              </h4>
            </div>{" "}
            <div className="sub" data-r="RBI reg">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Cyber resilience and digital payment security controls for PSOs</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to IIB data for insurance intermediaries</h4>
            </div>{" "}
            <div className="sub" data-r="IRDAI insur">
              <div className="top">
                <span className="tag">IRDAI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>ISNP: digital advertising</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>FLDG on KCC lending</h4>
            </div>{" "}
            <div className="sub" data-r="RBI lend">
              <div className="top">
                <span className="tag">RBI</span> <span className="status">Submitted</span>
              </div>{" "}
              <h4>Access to data ecosystem for AgriFintech</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Masterclass</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Masterclass: DPDP and its impact across the fintech ecosystem</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Empowering MSMEs: OCEN in lending&#x27;s digital transformation</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Workshop</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Account Aggregator as a growth accelerator for lending, with Sahamati</h4>
            </div>{" "}
            <div className="sub" data-r="Session insur reg">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Impact of the DPDP Act, 2023 on the insurance sector</h4>
            </div>{" "}
            <div className="sub" data-r="Session wealth">
              <div className="top">
                <span className="tag g">Webinar</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Financial services and gift cards on ONDC</h4>
            </div>{" "}
            <div className="sub" data-r="Session reg">
              <div className="top">
                <span className="tag g">Roundtable</span> <span className="status">Held</span>
              </div>{" "}
              <h4>Roundtable on the proposed IFSCA (Payment Services) Regulations</h4>
            </div>{" "}
            <div className="sub" data-r="Session lend">
              <div className="top">
                <span className="tag g">Outreach</span> <span className="status">Held</span>
              </div>{" "}
              <h4>NPCI Fintech Outreach Programme, with PCI</h4>
            </div>
          </div>
          <div className="center mt-28">
            <button className="btn btn-outline" data-more-for="tracker">
              Show all
            </button>
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
              <h2>Have a seat at the table where fintech policy is shaped.</h2>{" "}
              <p>
                Join FCC as a member, or partner with us on events, research and industry
                programmes.
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
