export function getBotResponse(userMessage) {
  const message = userMessage.toLowerCase()
  
  if (message.includes('certificado')) {
    return 'Para solicitar un certificado, necesito que me indiques: <br>1) Tipo de certificado (estudios, notas, competencias)<br>2) Programa de formacion<br>3) Numero de identificacion<br><br>¿Me proporcionas esta informacion?'
  } else if (message.includes('horario')) {
    return 'Para consultar los horarios de tu programa de formacion, necesito que me indiques tu numero de ficha y el nombre del programa. ¿Cual es tu informacion?'
  } else if (message.includes('matricula')) {
    return 'Te puedo ayudar con informacion sobre el proceso de matricula. Esto incluye:<br>- Requisitos de inscripcion<br>- Documentacion necesaria<br>- Fechas importantes<br>- Proceso paso a paso<br><br>¿Que necesitas saber especificamente?'
  } else if (message.includes('constancia')) {
    return 'Las constancias se solicitan a traves de la plataforma SOFIA Plus. Debes ingresar con tu usuario, ir a la seccion "Certificaciones" y seleccionar el tipo de constancia que necesitas. ¿Necesitas ayuda con algun paso especifico?'
  } else {
    return 'Entiendo tu consulta. Estoy aqui para ayudarte con tramites administrativos del SENA como:<br>- Certificados y constancias<br>- Informacion de programas<br>- Horarios de formacion<br>- Proceso de matricula<br>- Y mucho mas<br><br>¿Podrias darme mas detalles sobre lo que necesitas?'
  }
}