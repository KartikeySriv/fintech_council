"use client";

import Link from "next/link";
import { FormEvent } from "react";

export function SiteFooter() {
  function onSubscribe(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const input = e.currentTarget.querySelector("input");
    if (!input) return;
    input.value = "";
    input.placeholder = "Thanks! You're on the list.";
  }

  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <div>
            <Link href="/" className="brand">
              <div className="brand-mark">FCC</div>
              <div className="brand-text">
                <strong>Fintech Convergence Council</strong>
                <span>An IAMAI initiative</span>
              </div>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 300 }}>
              Bringing policymakers, regulators and the fintech industry together to grow financial
              services across India.
            </p>
            <div className="soc">
              <a
                href="https://linkedin.com/company/69219060/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener"
              >
                in
              </a>
              <a href="https://twitter.com/FCCUpdates" aria-label="X" target="_blank" rel="noopener">
                𝕏
              </a>
              <a
                href="https://www.facebook.com/Fintech-Convergence-Council-FCC-442712016473770/"
                aria-label="Facebook"
                target="_blank"
                rel="noopener"
              >
                f
              </a>
            </div>
          </div>
          <div>
            <h5>About</h5>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/about#council">Governing Council</Link>
              </li>
              <li>
                <Link href="/annual-report">Annual Reports</Link>
              </li>
              <li>
                <Link href="/committees">Committees</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Work</h5>
            <ul>
              <li>
                <Link href="/policy">Policy</Link>
              </li>
              <li>
                <Link href="/research">Research</Link>
              </li>
              <li>
                <Link href="/live-events">Live Events</Link>
              </li>
              <li>
                <Link href="/virtual-events">Virtual Events</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Join</h5>
            <ul>
              <li>
                <Link href="/members">Our Members</Link>
              </li>
              <li>
                <Link href="/membership-benefits">Membership Benefits</Link>
              </li>
              <li>
                <Link href="/apply-membership">Apply for Membership</Link>
              </li>
              <li>
                <Link href="/partners">Partnerships</Link>
              </li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <p>
              301-A, Godrej Two, Pirojshanagar,
              <br />
              Vikhroli, Mumbai 400079
            </p>
            <p style={{ marginTop: 10 }}>
              <a href="tel:02261766666">022-61766666</a>
              <br />
              <a href="mailto:info@fintechcouncil.in">info@fintechcouncil.in</a>
            </p>
            <form className="newsletter" onSubmit={onSubscribe}>
              <input type="email" placeholder="Get FCC updates" aria-label="Email" />
              <button type="submit" className="btn btn-primary btn-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Fintech Convergence Council. All rights reserved.</span>
          <span>An initiative of the Internet and Mobile Association of India</span>
        </div>
      </div>
    </footer>
  );
}
