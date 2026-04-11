import Script from "next/script";

/** Minified OpenWidget bootstrap from ChatBot publish snippet — loads cdn.openwidget.com/openwidget.js */
const OPENWIDGET_BOOT =
  ";(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:\"2.0\",on:function(){i([\"on\",c.call(arguments)])},once:function(){i([\"once\",c.call(arguments)])},off:function(){i([\"off\",c.call(arguments)])},get:function(){if(!e._h)throw new Error(\"[OpenWidget] You can't use getters before load.\");return i([\"get\",c.call(arguments)])},call:function(){i([\"call\",c.call(arguments)])},init:function(){var n=t.createElement(\"script\");n.async=!0,n.type=\"text/javascript\",n.src=\"https://cdn.openwidget.com/openwidget.js\",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))";

/**
 * [ChatBot](https://www.chatbot.com/) floating widget (OpenWidget).
 *
 * Set in `.env.local`:
 * - `NEXT_PUBLIC_CHATBOT_ORGANIZATION_ID` — from Publish → tracking code (`organization_id`)
 * - `NEXT_PUBLIC_CHATBOT_TEMPLATE_ID` — widget id (`template_id` in the snippet)
 */
export function ChatBotWidget() {
  const orgId = process.env.NEXT_PUBLIC_CHATBOT_ORGANIZATION_ID?.trim();
  const templateId = process.env.NEXT_PUBLIC_CHATBOT_TEMPLATE_ID?.trim();

  if (!orgId || !templateId) {
    return null;
  }

  return (
    <>
      <Script
        id="chatbot-com-openwidget"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.__ow = window.__ow || {};
window.__ow.organizationId = ${JSON.stringify(orgId)};
window.__ow.template_id = ${JSON.stringify(templateId)};
window.__ow.integration_name = "manual_settings";
window.__ow.product_name = "chatbot";
${OPENWIDGET_BOOT}
`,
        }}
      />
      <noscript>
        Enable JavaScript to use the assistant powered by{" "}
        <a href="https://www.chatbot.com/">ChatBot</a>.
      </noscript>
    </>
  );
}
