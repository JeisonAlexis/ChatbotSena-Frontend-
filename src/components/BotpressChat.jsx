import React, { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    if (window.botpress && window.botpress.sendMessage) return

    const injectScript = document.createElement("script")
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js"
    injectScript.async = true
    document.body.appendChild(injectScript)

    injectScript.onload = () => {
      const waitForBotpress = setInterval(() => {
        if (window.botpress) {
          clearInterval(waitForBotpress)
          console.log("🚀 Inicializando Botpress...")

          window.botpress.init({
            botId: "x",
            clientId: "x",
            configuration: {
              version: "v2",
              composerPlaceholder: "Saluda y escribe tu pregunta",
              botName: "Chatbot Administrativo del SENA",
              botAvatar: "x",
              botDescription: "Asistente Administrativo del SENA",
              color: "#31eb54",
              variant: "solid",
              headerVariant: "solid",
              themeMode: "light",
              fontFamily: "inter",
              radius: 4,
              feedbackEnabled: false,
              footer: "Dev: Jeison Alexis R.A.",
              hideWidget: false,
              embeddedChatId: "bp-embedded-webchat",
              soundEnabled: false,
              proactiveMessageEnabled: false,
              proactiveBubbleMessage: "Hi! 👋 Need help?",
              proactiveBubbleTriggerType: "afterDelay",
              proactiveBubbleDelayTime: 10
            }
          })

          
          window.botpress.on("webchat:ready", () => {
            console.log("✅ Botpress completamente listo y funcionando.")
            
          })
        }
      }, 500)
    }

    
    return () => {
      if (window.botpress) {
        window.botpress.destroy()
      }
    }
  }, [])

  return (
    <div
      id="bp-embedded-webchat" 
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "visible",
      }}
    >
      <style>{`
        #bp-embedded-webchat {
          overflow: visible !important;
        }
        #bp-embedded-webchat .bpWebchat {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
          max-height: none !important;
          border-radius: 0 !important;
          top: 0 !important;
          left: 0 !important;
          transform: none !important;
        }
        #bp-embedded-webchat iframe {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
          border-radius: 0 !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
        }
        #bp-embedded-webchat .bpFab {
          display: none !important;
        }
        .bp-header {
          position: relative !important;
          top: 0 !important;
        }
      `}</style>
    </div>
  )
}