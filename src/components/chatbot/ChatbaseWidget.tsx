"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

/**
 * [Chatbase](https://www.chatbase.co/) AI Agent embed widget.
 * Loads after idle, first tap/scroll, or 4s — whichever comes first.
 */
export function ChatbaseWidget() {
  const botId = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID?.trim();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!botId) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      setReady(true);
    };

    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(load, { timeout: 4000 })
        : undefined;
    const timeoutId = window.setTimeout(load, 4000);

    window.addEventListener("pointerdown", load, { once: true });
    window.addEventListener("keydown", load, { once: true });
    window.addEventListener("scroll", load, { once: true, passive: true });

    return () => {
      if (idleId != null && "cancelIdleCallback" in window) {
        window.cancelIdleCallback(idleId);
      }
      window.clearTimeout(timeoutId);
      window.removeEventListener("pointerdown", load);
      window.removeEventListener("keydown", load);
      window.removeEventListener("scroll", load);
    };
  }, [botId]);

  if (!botId || !ready) return null;

  return (
    <Script
      id="chatbase-embed"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=function(){if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get:function(target,prop){if(prop==="q"){return target.q}return function(){return target(prop,...arguments)}}})}var onLoad=function(){var script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id=${JSON.stringify(botId)};script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
`,
      }}
    />
  );
}
