import Header from "./components/Header";
import CharacterSection from "./components/CharacterSection";
import BotpressChat from "./components/BotpressChat";
import "./App.css";

function App() {
  return (
    <>
      
      <div className="sena-background"></div>

      <Header />

      {/* CONTENEDOR GENERAL */}
      <div
        style={{
          display: "flex",
          width: "95%",
          height: "83vh",
          margin: "40px auto",
          borderRadius: "16px",
          overflow: "hidden",
          background: "white",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* SECCIÓN IZQUIERDA */}
        <div
          style={{
            flex: "0 0 45%",
            background: "linear-gradient(180deg, #eaf4ff 0%, #ffffff 100%)",
            padding: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRight: "1px solid #ddd",
          }}
        >
          <CharacterSection />
        </div>

        {/* SECCIÓN DERECHA (CHAT) */}
        <div
          style={{
            flex: "0 0 55%",
            height: "100%",
            position: "relative",
          }}
        >
          <BotpressChat />
        </div>
      </div>

      {/* Estilos globales para Botpress */}
      <style>{`
        .bp-widget-widget {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
          border-radius: 0 !important;
        }
        
        .bp-widget-inline-iframe {
          width: 100% !important;
          height: 100% !important;
          border: none !important;
          border-radius: 0 !important;
        }
        
        #webchat {
          width: 100% !important;
          height: 100% !important;
        }
        
        .bp-webchat-widget {
          width: 100% !important;
          height: 100% !important;
          max-width: none !important;
        }
      `}</style>
    </>
  );
}

export default App;