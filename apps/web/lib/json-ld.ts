// Serialize JSON-LD for embedding in a <script> tag. Escaping "<" prevents
// any string in the data (e.g. a product description someone pastes HTML
// into) from closing the script tag early and injecting markup — the
// standard hardening for dangerouslySetInnerHTML JSON-LD blocks.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
