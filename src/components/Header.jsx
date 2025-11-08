import '../styles/Header.css'

function Header() {
  return (
    <header>
      <div className="header-content">
        <div className="logo-section">
          <div className="logo">
            <img 
              src="../SENA-LOGO.svg" 
              alt="SENA Logo" 
              className="logo-image"
            />
          </div>
          <div className="header-text">
            <h1>ChatBot SENA</h1>
            <p>Asistente Administrativo Virtual - Servicio Nacional de Aprendizaje</p>
          </div>
        </div>

        <div className="status-indicator">
          <div className="status-dot"></div>
          <span>En linea</span>
        </div>
      </div>
    </header>
  )
}

export default Header