/**
 * Convert FCC page HTML strings into real React JSX page components.
 * Preserves markup, SVG animations, classes, and inline styles.
 */
import fs from "node:fs";
import path from "node:path";
import { parse } from "node-html-parser";
import prettier from "prettier";

const ROOT = path.resolve("src/app");
const OUT_DIR = path.resolve("src/components/pages");

const ATTR_MAP = {
  class: "className",
  for: "htmlFor",
  tabindex: "tabIndex",
  readonly: "readOnly",
  maxlength: "maxLength",
  minlength: "minLength",
  colspan: "colSpan",
  rowspan: "rowSpan",
  cellpadding: "cellPadding",
  cellspacing: "cellSpacing",
  usemap: "useMap",
  frameborder: "frameBorder",
  allowfullscreen: "allowFullScreen",
  autocomplete: "autoComplete",
  autofocus: "autoFocus",
  autoplay: "autoPlay",
  enctype: "encType",
  novalidate: "noValidate",
  crossorigin: "crossOrigin",
  formnovalidate: "formNoValidate",
  "stroke-width": "strokeWidth",
  "stroke-linecap": "strokeLinecap",
  "stroke-linejoin": "strokeLinejoin",
  "stroke-dasharray": "strokeDasharray",
  "stroke-opacity": "strokeOpacity",
  "fill-opacity": "fillOpacity",
  "fill-rule": "fillRule",
  "clip-path": "clipPath",
  "clip-rule": "clipRule",
  "font-family": "fontFamily",
  "font-size": "fontSize",
  "font-weight": "fontWeight",
  "text-anchor": "textAnchor",
  "letter-spacing": "letterSpacing",
  "stop-color": "stopColor",
  "stop-opacity": "stopOpacity",
  "xlink:href": "xlinkHref",
  "xmlns:xlink": "xmlnsXlink",
  "color-interpolation-filters": "colorInterpolationFilters",
  "flood-opacity": "floodOpacity",
  "flood-color": "floodColor",
  "marker-end": "markerEnd",
  "marker-start": "markerStart",
  "marker-mid": "markerMid",
  "paint-order": "paintOrder",
  "shape-rendering": "shapeRendering",
  "vector-effect": "vectorEffect",
  "gradienttransform": "gradientTransform",
  "gradientunits": "gradientUnits",
  "patternunits": "patternUnits",
  "patterntransform": "patternTransform",
  "viewbox": "viewBox",
  "preserveaspectratio": "preserveAspectRatio",
  "attributename": "attributeName",
  "attributetype": "attributeType",
  "calcmode": "calcMode",
  "keytimes": "keyTimes",
  "keypoints": "keyPoints",
  "repeatcount": "repeatCount",
  "repeatdur": "repeatDur",
  "basefrequency": "baseFrequency",
  "numoctaves": "numOctaves",
  "stddeviation": "stdDeviation",
  "specularconstant": "specularConstant",
  "specularexponent": "specularExponent",
  "surfacescale": "surfaceScale",
  "diffuseconstant": "diffuseConstant",
  "edgemode": "edgeMode",
};

const BOOL_ATTRS = new Set([
  "checked",
  "disabled",
  "selected",
  "multiple",
  "required",
  "readOnly",
  "autoFocus",
  "autoPlay",
  "muted",
  "loop",
  "playsInline",
  "controls",
  "default",
  "defer",
  "hidden",
  "noValidate",
  "open",
  "reversed",
  "allowFullScreen",
  "async",
  "autoComplete",
]);

const VOID = new Set([
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
]);

const PAGE_MAP = [
  { file: "page.tsx", component: "HomePage", active: "/" },
  { file: "about/page.tsx", component: "AboutPage", active: "/about" },
  { file: "annual-report/page.tsx", component: "AnnualReportPage", active: "/annual-report" },
  { file: "committees/page.tsx", component: "CommitteesPage", active: "/committees" },
  {
    file: "committees/digital-lending/page.tsx",
    component: "DigitalLendingPage",
    active: "/committees/digital-lending",
  },
  {
    file: "committees/regtech/page.tsx",
    component: "RegTechPage",
    active: "/committees/regtech",
  },
  {
    file: "committees/wealthtech/page.tsx",
    component: "WealthTechPage",
    active: "/committees/wealthtech",
  },
  {
    file: "committees/insurtech/page.tsx",
    component: "InsurTechPage",
    active: "/committees/insurtech",
  },
  {
    file: "committees/credit-bureau/page.tsx",
    component: "CreditBureauPage",
    active: "/committees/credit-bureau",
  },
  { file: "members/page.tsx", component: "MembersPage", active: "/members" },
  {
    file: "membership-benefits/page.tsx",
    component: "MembershipBenefitsPage",
    active: "/membership-benefits",
  },
  {
    file: "apply-membership/page.tsx",
    component: "ApplyMembershipPage",
    active: "/apply-membership",
  },
  { file: "partners/page.tsx", component: "PartnersPage", active: "/partners" },
  {
    file: "partnership-benefits/page.tsx",
    component: "PartnershipBenefitsPage",
    active: "/partnership-benefits",
  },
  {
    file: "apply-partnership/page.tsx",
    component: "ApplyPartnershipPage",
    active: "/apply-partnership",
  },
  { file: "policy/page.tsx", component: "PolicyPage", active: "/policy" },
  { file: "research/page.tsx", component: "ResearchPage", active: "/research" },
  { file: "live-events/page.tsx", component: "LiveEventsPage", active: "/live-events" },
  {
    file: "virtual-events/page.tsx",
    component: "VirtualEventsPage",
    active: "/virtual-events",
  },
  { file: "contact/page.tsx", component: "ContactPage", active: "/contact" },
];

function camelAttr(name) {
  const lower = name.toLowerCase();
  if (ATTR_MAP[lower]) return ATTR_MAP[lower];
  if (ATTR_MAP[name]) return ATTR_MAP[name];
  // data-* and aria-* stay as-is
  if (lower.startsWith("data-") || lower.startsWith("aria-")) return lower;
  // SVG/SMIL attrs that are already camelCase-ish
  if (name.includes("-")) {
    return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
  return name;
}

function styleToJsx(styleStr) {
  const entries = styleStr
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean)
    .map((decl) => {
      const i = decl.indexOf(":");
      if (i < 0) return null;
      let prop = decl.slice(0, i).trim();
      const val = decl.slice(i + 1).trim();
      if (prop.startsWith("--")) {
        return `"${prop}": ${JSON.stringify(val)}`;
      }
      prop = prop.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      return `${prop}: ${JSON.stringify(val)}`;
    })
    .filter(Boolean);
  return `{{${entries.join(", ")}}}`;
}

function escapeJsxText(text) {
  return text
    .replace(/\{/g, "&#123;")
    .replace(/\}/g, "&#125;");
}

function attrsToJsx(el) {
  const parts = [];
  for (const [rawName, rawVal] of Object.entries(el.attributes)) {
    const name = camelAttr(rawName);
    if (name === "style") {
      parts.push(`style=${styleToJsx(rawVal)}`);
      continue;
    }
    if (BOOL_ATTRS.has(name) || BOOL_ATTRS.has(rawName)) {
      // presence means true; empty string or attribute name also true
      if (rawVal === "" || rawVal === rawName || rawVal === "true") {
        parts.push(`${name}`);
      } else {
        parts.push(`${name}={${JSON.stringify(rawVal !== "false")}}`);
      }
      continue;
    }
    // numeric-looking SVG attrs can stay as strings (React accepts both)
    parts.push(`${name}=${JSON.stringify(rawVal)}`);
  }
  return parts.length ? " " + parts.join(" ") : "";
}

function serialize(node, indent = 0) {
  const pad = "  ".repeat(indent);
  if (node.nodeType === 3) {
    // text
    const text = node.rawText;
    if (!text) return "";
    // preserve whitespace-ish text that matters
    if (/^\s+$/.test(text)) {
      // collapse pure whitespace between block tags to newline
      return "\n";
    }
    return escapeJsxText(text);
  }
  if (node.nodeType === 8) {
    // comment
    return `{/* ${node.rawText.replace(/\*\//g, "* /")} */}`;
  }
  if (node.nodeType !== 1) return "";

  const tag = node.rawTagName;
  if (!tag) {
    return node.childNodes.map((c) => serialize(c, indent)).join("");
  }

  // Drop style tags — already in fcc.css / page extras; keep as JSX style element if page-specific
  if (tag.toLowerCase() === "style") {
    const css = node.text.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
    return `${pad}<style>{\`${css}\`}</style>\n`;
  }

  const attrs = attrsToJsx(node);
  const children = node.childNodes || [];

  if (VOID.has(tag.toLowerCase())) {
    return `${pad}<${tag}${attrs} />`;
  }

  if (children.length === 0) {
    return `${pad}<${tag}${attrs}></${tag}>`;
  }

  // Single text child — keep inline
  if (children.length === 1 && children[0].nodeType === 3) {
    const t = escapeJsxText(children[0].rawText);
    return `${pad}<${tag}${attrs}>${t}</${tag}>`;
  }

  const inner = children.map((c) => serialize(c, indent + 1)).join("");
  return `${pad}<${tag}${attrs}>\n${inner}\n${pad}</${tag}>`;
}

function extractHtmlString(source) {
  const marker = "const html = ";
  const start = source.indexOf(marker);
  if (start < 0) throw new Error("const html not found");
  let i = start + marker.length;
  while (source[i] === " " || source[i] === "\n") i++;
  const quote = source[i];
  if (quote !== '"' && quote !== "'" && quote !== "`") {
    throw new Error("Unexpected html literal");
  }
  i++;
  let out = "";
  let escaped = false;
  if (quote === "`") {
    while (i < source.length) {
      const ch = source[i++];
      if (escaped) {
        out += ch;
        escaped = false;
        continue;
      }
      if (ch === "\\") {
        escaped = true;
        continue;
      }
      if (ch === "`") break;
      out += ch;
    }
    return out;
  }
  // double/single quoted with escapes
  while (i < source.length) {
    const ch = source[i++];
    if (escaped) {
      if (ch === "n") out += "\n";
      else if (ch === "r") out += "\r";
      else if (ch === "t") out += "\t";
      else if (ch === "\\") out += "\\";
      else if (ch === '"') out += '"';
      else if (ch === "'") out += "'";
      else if (ch === "u") {
        const hex = source.slice(i, i + 4);
        out += String.fromCharCode(parseInt(hex, 16));
        i += 4;
      } else if (ch === "x") {
        const hex = source.slice(i, i + 2);
        out += String.fromCharCode(parseInt(hex, 16));
        i += 2;
      } else out += ch;
      escaped = false;
      continue;
    }
    if (ch === "\\") {
      escaped = true;
      continue;
    }
    if (ch === quote) break;
    out += ch;
  }
  return out;
}

function extractMetadataBlock(source) {
  const m = source.match(/export const metadata: Metadata = \{[\s\S]*?\};/);
  return m ? m[0] : null;
}

async function convertPage(entry) {
  const pagePath = path.join(ROOT, entry.file);
  const source = fs.readFileSync(pagePath, "utf8");
  const html = extractHtmlString(source);
  const meta = extractMetadataBlock(source);

  // Wrap in a root so fragment parsing is stable
  const root = parse(`<div id="__root">${html}</div>`, {
    lowerCaseTagName: false,
    comment: true,
    blockTextElements: {
      script: true,
      noscript: true,
      style: true,
      pre: true,
    },
  });
  const container = root.querySelector("#__root");
  const jsxBody = container.childNodes.map((c) => serialize(c, 3)).join("\n");

  const componentCode = `export function ${entry.component}() {
  return (
    <>
${jsxBody}
    </>
  );
}
`;

  const pageCode = `import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteInteractions } from "@/components/SiteInteractions";
import { ${entry.component} } from "@/components/pages/${entry.component}";

${meta || `export const metadata: Metadata = { title: "FCC" };`}

export default function Page() {
  return (
    <>
      <SiteHeader active=${JSON.stringify(entry.active)} />
      <main>
        <${entry.component} />
      </main>
      <SiteFooter />
      <SiteInteractions />
    </>
  );
}
`;

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const componentPath = path.join(OUT_DIR, `${entry.component}.tsx`);

  let formattedComponent = componentCode;
  let formattedPage = pageCode;
  try {
    formattedComponent = await prettier.format(componentCode, {
      parser: "typescript",
      printWidth: 100,
      singleQuote: false,
    });
    formattedPage = await prettier.format(pageCode, {
      parser: "typescript",
      printWidth: 100,
      singleQuote: false,
    });
  } catch (err) {
    console.warn("prettier failed for", entry.component, err.message);
  }

  fs.writeFileSync(componentPath, formattedComponent, "utf8");
  fs.writeFileSync(pagePath, formattedPage, "utf8");
  console.log(
    "✓",
    entry.component,
    `(${Math.round(formattedComponent.length / 1024)}kb)`,
  );
}

async function main() {
  // Ensure node-html-parser is available
  try {
    await import("node-html-parser");
  } catch {
    console.error("Install node-html-parser first");
    process.exit(1);
  }

  for (const entry of PAGE_MAP) {
    await convertPage(entry);
  }

  // barrel export
  const barrel = PAGE_MAP.map((e) => `export { ${e.component} } from "./${e.component}";`).join(
    "\n",
  );
  fs.writeFileSync(path.join(OUT_DIR, "index.ts"), barrel + "\n", "utf8");
  console.log("\nDone. Converted", PAGE_MAP.length, "pages.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
