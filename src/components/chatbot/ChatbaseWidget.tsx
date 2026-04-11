import Script from "next/script";

/**
 * [Chatbase](https://www.chatbase.co/) AI Agent embed widget.
 *
 * Set `NEXT_PUBLIC_CHATBASE_BOT_ID` in `.env` / `.env.local` with
 * the chatbot ID from: Dashboard → AI Agent → Deploy → Chat Widget → Embed.
 */
export function ChatbaseWidget() {
  const botId = process.env.NEXT_PUBLIC_CHATBASE_BOT_ID?.trim() ?? "Boj0cxEtUfuEMipZw31jO";

  if (!botId) return null;

  return (
    <Script
      id="chatbase-embed"
      strategy="lazyOnload"
      dangerouslySetInnerHTML={{
        __html: `
(function(){if(!window.chatbase||window.chatbase("getState")!=="initialized"){window.chatbase=function(){if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)};window.chatbase=new Proxy(window.chatbase,{get:function(target,prop){if(prop==="q"){return target.q}return function(){return target(prop,...arguments)}}})}var onLoad=function(){var script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id=${JSON.stringify(botId)};script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}else{window.addEventListener("load",onLoad)}})();
`,
      }}
    />
  );
}
