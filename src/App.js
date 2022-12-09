import './App.css';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <div className='container-primary'>
        <h1>Aplicaciones móviles</h1>
        <Description
          image='carnet'
          name='Carnet de control de mascotas'
          code='Dart'
          description='La aplicación tiene por objetivo reemplazar el típico carnet físico que por lo general es de papel o de carton que tiende 
          a un deterioro fácil' />
        <Description
          image='cobros'
          name='Cobros y Deudas'
          code='Java'
          description="La presente aplicación ayuda con el correcto manejo de finanzas personales como pueden ser préstamos pequeños.
          No se requiere estar conectado a Internet para su uso.
          La aplicación cuenta con diferentes acciones posibles, entre ellas están:
          - Estado 'Activo', 'Vencido' o 'Eliminado' dependiendo de la fecha fijada o si se encuentra en la papelera de reciclaje. 
          - Realiza copias de seguridad de forma local.
          - Buscar por nombre o apellido del registro.
          - Lista Todos lo registros por defecto, no obstante si se desea se podrá listar Solo Cobros o Solo Deudas.
          - Agregar un número de teléfono del Cobro o Deuda.
          - Enviar mensaje de WhatsApp.
          - Realizar llamadas con costos adicionales dependiendo de su operadora.
          - Modificar datos de un Cobro o Deuda.
          - Aumentar cantidad de dinero.
          - Registrar un pago de dinero.
          - En caso de eliminar un Cobro o Deuda se mantendrán en la parte de 'Papelera' hasta que sean eliminados definitivamente.
          - En caso de eliminar definitivamente un Cobro o Deuda, se eliminará con todos los datos y registros.
          - Genera un reporte del Cobro o Deuda detallando 'Fecha', 'Pago o Registro' y
          
          'Descripción'." />
        <Description
          image='herramientas'
          name='Herramientas de Texto'
          code='Dart'
          description="La aplicación cuenta con varias herramientas posibles, entre ellas están:
          - Creación, modificación y eliminación de notas.
          - Lector de códigos QR y códigos de barras ya sea por medio de la cámara del teléfono o por imagen de galería.
          - Creación de códigos QR con la opción de almacenar en galería.
          - Traductor de texto disponible para varios idiomas.
          - Reconocimiento de texto ya sea por medio de la cámara del teléfono o por imagen de galería.
          - Reconocimiento de voz a texto con opción de guardar como nota o traducir
          a otro idioma.
          - Convertir texto a voz con opción de elegir varios acentos de idiomas.
          - Reconocimiento de texto en archivos PDF con opción de traducir o escuchar.
          - Activar o desactivar las animaciones integradas en la aplicación.
          - Activar o desactivar el modo oscuro de la aplicación.
          
          En caso de encontrar fallas en la aplicación, con el propósito de evitar bajas calificaciones en la tienda, por favor, enviar su comentario por correo electrónico." />
      </div>
    </div>
  );
}

export default App;
