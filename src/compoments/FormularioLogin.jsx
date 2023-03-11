import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useState } from 'react';


function FormularioLogin() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section class="login-form">

        <div class="contenedor card-login">

          <div class="contenido-login">
            <h2 class="titulo-informacion degradado-verde">Iniciar Sesión</h2>
            <input type="text" required={true} id="username" name="username" className="input-login" placeholder="Usuario" />
            <input type="password" required={true} id="password" name="password" className="input-login" placeholder="Contraseña" />
            <input type="submit" value="Iniciar Sesión" className="button-form" />
            <Button className="registro-link" variant="link" onClick={handleShow}>¿No tienes cuenta?</Button>
          </div>

        </div>
      </section>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className=" display-6 degradado-verde ">Registro de cuenta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
            <label
              className="p-2 col-form-label"
              htmlFor="nombre">
              Ingrese el nombre
            </label>
            <div className="p-2 col-sm-8">
              <input
                className="input-nueva text-center form-control "
                type="text"
                id="nombre"
                placeholder='Nombre'
              />
            </div>
          </div>

          <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
                        <label
              className="p-2 col-form-label"
              htmlFor="usuario">
              Ingrese el usuario
            </label>
            <div className="p-2 col-sm-8">
              <input
                className="input-nueva text-center form-control "
                type="text"
                id="usuario"
                placeholder='Usuario'
              />
            </div>
          </div>
             <div className="form-group  d-flex flex-column justify-content-center align-items-center py-2">
            <label
              className="p-2 col-form-label"
              htmlFor="password">
             Ingrese la contraseña
            </label>
            <div className="p-2 col-sm-8">
              <input
                className="input-nueva text-center form-control "
                type="password"
                id="password"
                placeholder='Contraseña'
              />
            </div>
            <Button  className="modal-buttons my-2" variant="primary">Registrar</Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-buttons" variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default FormularioLogin
