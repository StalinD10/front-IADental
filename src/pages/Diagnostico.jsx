import { useDropzone } from 'react-dropzone';
import { useMemo, useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import icon from "../img/icon4.png"
import icon2 from "../img/icon5.png"
import icon3 from "../img/icon6.png"


const urlValidador = "http://localhost:8090/api/predictor/validateImage";
const urlDiagnostico = "http://localhost:8090/api/predictor/predictImage";
const baseStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "3rem",
  borderWidth: 2,
  borderRadius: 2,
  borderColor: "#1073BA",
  borderStyle: "dashed",
  backgroundColor: "#e1e1e1",
  color: "#bdbdbd",
  outline: "none",
  transition: "border .24s ease-in-out"
};

const activeStyle = {
  borderColor: "#2196f3"
};

const acceptStyle = {
  borderColor: "#00e676"
};

const rejectStyle = {
  borderColor: "#ff1744"
};

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {

  display: "inline-flex",
  borderRadius: "1.2rem",

  marginBottom: 8,
  marginRight: 8,
  width: "auto",
  height: 200,
  padding: 4,
  margin: "1rem",
  boxSizing: "border-box"

};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
  borderRadius: "1.2rem",

};


function Diagnostico(props) {

  const [files, setFiles] = useState([]);
  const [respuestaValidador, setRespuestaValidador] = useState("");
  const [respuestaDiagnostico, setRespuestaDiagnostico] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingDiagnostico, setIsLoadingDiagnostico] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
    acceptedFiles,
    open
  } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
      'image/jpg': [],
    },
    noClick: true,
    noKeyboard: true,
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file)
          })
        )
      );
    }

  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {})
    }),
    [isDragActive, isDragReject]
  );

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      files.forEach(file => URL.revokeObjectURL(file.preview));
    },
    [files]

  );

  const filepath = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));


  async function handleEnviar() {
    const imagen = files[0];

    const formData = new FormData();
    formData.append('image', imagen, imagen.name);

    try {
      setIsLoading(true);
      const respuesta = await fetch(`${urlValidador}`, {
        method: 'POST',
        mode: 'cors',
        body: formData,
      });
      const data1 = await respuesta.json();
      if (data1 === 0) {
        setRespuestaValidador('Imagen no válida');
      } else if (data1 === 1) {
        setRespuestaValidador('Imagen válida');
      }
      console.log(respuestaValidador)
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
    setShowButton(false);
    return null;

  }


  async function handleDiagnosticar() {
    const imagen = files[0];
    const formData = new FormData();
    formData.append('image', imagen, imagen.name);
    setIsLoadingDiagnostico(true);
    try {
      const respuesta2 = await fetch(
        `${urlDiagnostico}`,
        {
          method: "POST",
          mode: "cors",
          body: formData,

        }
      );
      const data2 = await respuesta2.json();
      setRespuestaDiagnostico(data2.diagnostic);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingDiagnostico(false);
    }
   
    return null;
  }

  return (
    <div>
      <section className="contenedor">
        <div className="iconos">
          <div className="icono">
            <img src={icon} alt="imagen icono" />
            <h3>1. Verifica el formato de la radiografía</h3>
            <p>Asegúrate que la imagen de tu radiografía periapical esté en  los siguientes formatos: PNG, JPG, o JPEG.</p>
          </div>
          <div className="icono">
            <img src={icon3} alt="imagen icono" />
            <h3>2. Sube o arrastra la radiografía</h3>
            <p>Puedes arrastrar la imagen, usando "Drag and Drop", o simplemente elegir la opción de selector de imágenes
              para seleccionar y subir tu radiografía</p>
          </div>
          <div className="icono">
            <img src={icon2} alt="imagen icono" />
            <h3>3. Click en diagnosticar</h3>
            <p>Una vez subida la imagen, puedes obtener el diagnóstico haciendo click en diagnosticar.</p>
          </div>
        </div>
      </section>

      <h2 className='degradado-verde text-center'> Sube  o arrastra tu radiografía aquí</h2>
      <div className="container">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Usa drag and drop</p>
          <Button className="modal-buttons" variant="dark" onClick={() => {
            open();
            setShowButton(true);
          }}>
            Selector de imágenes

          </Button>

        </div>

        <div className='text-center'>

        </div>

        <aside>
          <h3 className='py-2 degradado-verde' >Tu radiografía: </h3>

          <ul>{filepath}</ul>
        </aside>
        <aside style={thumbsContainer}>{thumbs}</aside>
        <div className='text-center'>
          {showButton && (
            <Button className="modal-buttons my-5" variant="primary" disabled={files.length === 0} id="diagnosticarButton" onClick={handleEnviar}>
              Validar
            </Button>
          )}
        </div>
        <aside>
          {isLoading ? (
            <div className="spinner"></div>
          ) : respuestaValidador === "Imagen válida" ? (
            <div className='card'>
              <h3 className='degradado-verde text-center'>
                {respuestaValidador}
              </h3>
              <div className='text-center'>
                <Button className="modal-buttons my-1 text-ce" variant="primary" id="diagnosticarButton" onClick={handleDiagnosticar}>
                  Diagnosticar
                </Button>
              </div>
            </div>
          ) : (
            <div className='card'>
              <h3 className='degradado-verde text-center'>
                {respuestaValidador}
              </h3>
            </div>
          )}
        </aside>
        <aside>
          {isLoadingDiagnostico ? (
            <div className="spinner"></div>
          ) : (

            <h2 className='py-5 degradado-verde text-center'>{respuestaDiagnostico}</h2>

          )}

        </aside>
      </div>

    </div>
  )
}

export default Diagnostico