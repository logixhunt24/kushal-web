// src/components/layout/ConditionalWrapper.jsx
import Layout from "./Layout";
import SimpleLayout from "./SimpleLayout";

/**
 * Chooses which layout to render based on the user‑agent.
 * If the page is being displayed inside a mobile WebView (common strings
 * like "ReactNativeWebView", "WebView", or a custom identifier you set in the
 * native app), we render SimpleLayout (no NavBar / Footer). Otherwise we render
 * the full Layout with Header and Footer – this is the default for normal
 * browsers.
 */
export default function ConditionalWrapper({ children }) {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isWebView = /(ReactNativeWebView|WebView|KushalApp)/i.test(ua);
  return isWebView ? <SimpleLayout>{children}</SimpleLayout> : <Layout>{children}</Layout>;
}
