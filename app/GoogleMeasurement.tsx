"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

const tagManagerId = "GTM-T3P5JRT3";

function ContactEventTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      let contactMethod: "whatsapp" | "email" | null = null;

      if (href.includes("wa.me/")) contactMethod = "whatsapp";
      if (href.startsWith("mailto:")) contactMethod = "email";
      if (!contactMethod) return;

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "generate_lead",
        contact_method: contactMethod,
        link_url: href,
        page_location: window.location.href,
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

export default function GoogleMeasurement() {
  return (
    <>
      <Script id="dixoy-google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${tagManagerId}');
        `}
      </Script>
      <noscript>
        <iframe
          height="0"
          src={`https://www.googletagmanager.com/ns.html?id=${tagManagerId}`}
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
          width="0"
        />
      </noscript>
      <ContactEventTracking />
    </>
  );
}
