export function ApplyPartnershipPage() {
  return (
    <>
      <section className="page-hero grid-bg">
        <div className="wrap">
          <div>
            <div className="crumbs">
              <a href="/">Home</a> <span>/</span> <a href="/partners">Partnership</a> <span>/</span>
              Apply
            </div>{" "}
            <h1>Apply for Partnership</h1>{" "}
            <p>
              As an industry voice that upholds best practice and promotes access to markets and
              discussions, we invite you to partner with FCC.
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
              <circle
                cx="110"
                cy="120"
                r="52"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>{" "}
              <circle
                cx="190"
                cy="120"
                r="52"
                fill="rgba(255,255,255,.15)"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></circle>{" "}
              <path d="M150 86a52 52 0 0 1 0 68a52 52 0 0 1 0-68z" fill="#fff" opacity=".85"></path>
            </svg>
          </div>
        </div>
      </section>
      <nav className="subnav">
        <div className="wrap">
          <a href="/partners">Our Partners</a>{" "}
          <a href="/partnership-benefits">Partnership Benefits</a>{" "}
          <a href="/apply-partnership" className="on">
            Apply for Partnership
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
                  Email <i>*</i>
                </label>{" "}
                <input type="email" name="Email" required />
              </div>{" "}
              <div className="field">
                <label>Phone</label> <input type="tel" name="Phone" minLength={6} />
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
                <label>Sector / field</label> <input type="text" name="Sector / field" />
              </div>{" "}
              <div className="field">
                <label>
                  Your location <i>*</i>
                </label>{" "}
                <input type="text" name="Your location" required />
              </div>{" "}
              <div className="field">
                <label>Website link</label> <input type="url" name="Website link" />
              </div>{" "}
              <div className="field">
                <label>LinkedIn page</label> <input type="url" name="LinkedIn page" />
              </div>{" "}
              <div className="field full">
                <label>Brief on the kind of work you do</label>{" "}
                <textarea name="Brief on the kind of work you do"></textarea>
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
                  href="mailto:s.yashaswi@fintechcouncil.in"
                  style={{ color: "var(--red)", fontWeight: "700" }}
                >
                  s.yashaswi@fintechcouncil.in
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
              <span className="eyebrow">How partnership works</span>{" "}
              <div className="steps-v" style={{ marginTop: "20px" }}>
                <div className="s">
                  <span className="n">01</span>{" "}
                  <div>
                    <h4>Tell us about you</h4> <p>Share your organisation and the work you do.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">02</span>{" "}
                  <div>
                    <h4>Explore fit</h4> <p>We find programmes where we can work together.</p>
                  </div>
                </div>{" "}
                <div className="s">
                  <span className="n">03</span>{" "}
                  <div>
                    <h4>Launch together</h4> <p>Co-create events, sessions and initiatives.</p>
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
