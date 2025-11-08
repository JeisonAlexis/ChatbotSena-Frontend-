import "../styles/CharacterSection.css";
import { useState, useEffect } from "react";

function CharacterSection() {
  const [isWebchatReady, setIsWebchatReady] = useState(false);
  const [hasStartedConversation, setHasStartedConversation] = useState(false);

  const faqQuestions = [
    "¿Cómo puedo realizar mi inscripción en el SENA?",
    "¿Qué documentos necesito para matricularme?",
    "¿Cuáles son los programas vituales titulados de formación disponibles?",
    "¿Cuáles son los cursos cortos vituales disponibles?",
    "¿Cómo consulto mi horario de clases?",
    "¿Dónde puedo ver mis calificaciones?",
    "¿Qué hacer si olvidé mi contraseña en Sofia Plus?",
    "¿Cuando son la proximas convocatorias del SENA?",
    "¿Cuales son los roles que maneja el SENA?",
    "¿En que casos no me puedo inscribir en el SENA?",
  ];

  const sendQuestionToBot = async (question) => {
    if (!window.botpress || !window.botpress.sendMessage) {
      console.warn("⚠️ Botpress aún no está listo.");
      return;
    }

    try {
      if (!hasStartedConversation) {
        console.log(
          "🟢 Nueva conversación detectada. Enviando saludo inicial..."
        );
        await window.botpress.sendMessage("Hola");
        setHasStartedConversation(true);

        const waitForReply = new Promise((resolve) => {
          const listener = (event) => {
            if (event.detail?.type === "message") {
              console.log("✅ El bot respondió al saludo.");
              window.removeEventListener("message", listener);
              resolve();
            }
          };
          window.addEventListener("message", listener);
        });

        await Promise.race([
          waitForReply,
          new Promise((r) => setTimeout(r, 5000)),
        ]);
      }

      await window.botpress.sendMessage(question);
      window.botpress.open();
      console.log("📤 Pregunta enviada al chatbot:", question);
    } catch (error) {
      console.error("❌ Error al enviar mensaje a Botpress:", error);
    }
  };

  useEffect(() => {
    const waitForBotpress = setInterval(() => {
      if (
        window.botpress &&
        typeof window.botpress.sendMessage === "function"
      ) {
        setIsWebchatReady(true);
        clearInterval(waitForBotpress);
        console.log("✅ Botpress listo para recibir mensajes.");
      }
    }, 500);

    return () => clearInterval(waitForBotpress);
  }, []);

  return (
    <div className="character-section">
      <div className="faq-section">
        <h3>Preguntas Frecuentes</h3>
        <div className="faq-grid">
          {faqQuestions.map((question, index) => (
            <button
              key={index}
              className="faq-question"
              onClick={() => sendQuestionToBot(question)}
              disabled={!isWebchatReady}
            >
              {question}
            </button>
          ))}
        </div>
      </div>

      <div className="welcome-message">
        <h2>¿Quien soy y que puedo hacer por ti?</h2>
        <br></br>
        <p>
          👋 ¡Hola Aprendiz/Aspirante! Soy el Asistente
          Administrativo Virtual del SENA, un chatbot diseñado para acompañarte
          en todos tus trámites y consultas relacionadas con nuestros procesos
          administrativos.
        </p>
      </div>
    </div>
  );
}

export default CharacterSection;




