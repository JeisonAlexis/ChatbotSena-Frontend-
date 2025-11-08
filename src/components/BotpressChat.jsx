import React, { useEffect } from "react"

export default function BotpressChat() {
  useEffect(() => {
    // Si ya está cargado, no repetir
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
            botId: "252b29c0-5c1d-4166-9026-29c04c65e0de",
            clientId: "b6cb02cd-8f24-424e-bfa6-c0bf5037575f",
            configuration: {
              version: "v2",
              composerPlaceholder: "Saluda y escribe tu pregunta",
              botName: "Chatbot Administrativo del SENA",
              botAvatar: "https://files.bpcontent.cloud/2025/11/03/14/20251103142032-UGYT9QZ0.png",
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
              // Configuraciones específicas para embedded
              embeddedChatId: "bp-embedded-webchat",
              soundEnabled: false,
              proactiveMessageEnabled: false,
              proactiveBubbleMessage: "Hi! 👋 Need help?",
              proactiveBubbleTriggerType: "afterDelay",
              proactiveBubbleDelayTime: 10
            }
          })

          // Esperar a que esté listo
          window.botpress.on("webchat:ready", () => {
            console.log("✅ Botpress completamente listo y funcionando.")
            // No abrir automáticamente si está embedido
            // window.botpress.open()
          })
        }
      }, 500)
    }

    // Cleanup function
    return () => {
      if (window.botpress) {
        window.botpress.destroy()
      }
    }
  }, [])

  return (
    <div
      id="bp-embedded-webchat" // Cambiado para coincidir con embeddedChatId
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