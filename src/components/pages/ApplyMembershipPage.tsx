export function ApplyMembershipPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/members">Membership</a> <span>/</span>
              Apply
            </div>{" "}
            <h1>Apply for Membership</h1>{" "}
            <p>
              FCC works with all its members to promote the growth of the fintech industry. Tell us
              about your company and we'll get in touch.
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
                x="80"
                y="34"
                width="140"
                height="176"
                rx="12"
                fill="rgba(255,255,255,.12)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></rect>{" "}
              <path
                d="M104 74h92M104 102h92M104 130h60"
                stroke="#fff"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{" "}
              <rect x="104" y="160" width="70" height="26" rx="13" fill="#fff"></rect>{" "}
              <circle cx="218" cy="190" r="26" fill="#fff"></circle>{" "}
              <path
                d="M206 190l8 8 16-16"
                stroke="#BF1A1F"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              ></path>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/members">Our Members</a> <a href="/membership-benefits">Membership Benefits</a>{" "}
          <a href="/apply-membership" className="on">
            Apply for Membership
          </a>
        </div>
      </nav>
      <section className="bg-soft">
        <div
          className="wrap"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr .9fr",
            gap: "40px",
            alignItems: "start",
          }}
          id="formwrap"
        >
          <form className="form-card reveal" data-preview="">
            <p className="lead" style={{ marginBottom: "22px", fontSize: ".98rem" }}>
              Please fill in the form below and we will get in touch with you about the next steps.
            </p>{" "}
            <div className="form-grid">
              <div className="field">
                <label>
                  First name <i>*</i>
                </label>{" "}
                <input type="text" name="First name" required />
              </div>{" "}
              <div className="field">
                <label>
                  Last name <i>*</i>
                </label>{" "}
                <input type="text" name="Last name" required />
              </div>{" "}
              <div className="field">
                <label>
                  Designation <i>*</i>
                </label>{" "}
                <input type="text" name="Designation" required />
              </div>{" "}
              <div className="field">
                <label>
                  Organisation <i>*</i>
                </label>{" "}
                <input type="text" name="Organisation" required />
              </div>{" "}
              <div className="field">
                <label>
                  Work email <i>*</i>
                </label>{" "}
                <input type="email" name="Work email" required />
              </div>{" "}
              <div className="field">
                <label>
                  Phone <i>*</i>
                </label>{" "}
                <input type="tel" name="Phone" required minLength={6} />
              </div>{" "}
              <div className="field full">
                <label>Primary sector</label>{" "}
                <select name="Primary sector">
                  <option value="">Select</option> <option>Digital Lending</option>{" "}
                  <option>Payments</option> <option>InsurTech</option> <option>WealthTech</option>{" "}
                  <option>RegTech</option> <option>Credit Bureau</option>{" "}
                  <option>Bank / NBFC</option> <option>Other</option>
                </select>
              </div>{" "}
              <div className="field full">
                <label>Anything you'd like us to know</label>{" "}
                <textarea name="Anything you'd like us to know"></textarea>
              </div>
            </div>
            <div
              style={{
                marginTop: "22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
                flexWrap: "wrap",
              }}
            >
              <button className="btn btn-primary" type="submit">
                Submit application{" "}
                <svg
                  width="16"
                  height="16"
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
              </button>{" "}
              <span className="form-note" style={{ margin: "0" }}>
                Or write to{" "}
                <a
                  href="mailto:swati.s@fintechcouncil.in"
                  style={{ color: "var(--red)", fontWeight: "700" }}
                >
                  swati.s@fintechcouncil.in
                </a>
              </span>
            </div>
            <div className="form-ok">
              <span className="tick">✓</span>Thanks! The FCC team will get in touch with you about
              the next steps.
            </div>
          </form>
          <aside className="reveal">
            <div className="card">
              <span className="eyebrow">What happens next</span>{" "}
              <div className="steps-v" style={{ marginTop: "20px" }}>
                <div className="s">
                  <span className="n">01</span>{" "}
                  <div>
                    <h4>We review your application</h4>{" "}
                    <p>The membership team looks at your details.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">02</span>{" "}
                  <div>
                    <h4>We reach out</h4> <p>You'll hear from us about the next steps.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">03</span>{" "}
                  <div>
                    <h4>Welcome aboard</h4> <p>Join committees and start taking part.</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginTop: "16px",
                background: "var(--charcoal)",
                color: "#fff",
                border: "0",
              }}
            >
              <h4 style={{ marginBottom: "6px" }}>Need help?</h4>{" "}
              <p style={{ color: "#bbb", fontSize: ".88rem" }}>
                Call{" "}
                <a href="tel:02261766666" style={{ color: "#fff", fontWeight: "700" }}>
                  022-61766666
                </a>{" "}
                or email{" "}
                <a
                  href="mailto:info@fintechcouncil.in"
                  style={{ color: "#fff", fontWeight: "700" }}
                >
                  info@fintechcouncil.in
                </a>
              </p>
            </div>
          </aside>
        </div>
      </section>
      <style>{`@media(max-width:900px){#formwrap{grid-template-columns:1fr!important}}`}</style>
    </>
  );
}
