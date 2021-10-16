import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';

function LitarUsuarios() {
  const dataUsuarios = [
    { id: 1, nombre: "Mileidis Ruiz", email: "milem19@hotmail.com", role: "Administrador", estado: "Activo" },
    { id: 2, nombre: "Arturo Corpas", email: "corpas196@gmail.com", role: "Supervisor", estado: "Inactivo" },
    { id: 3, nombre: "Ginna Paola Rodriguez", email: "grodriguez47@gmail.com", role: "Administrador", estado: "Activo" },
    { id: 4, nombre: "Mateo Mancera", email: "manceramateo@gmail.com", role: "Vendedor", estado: "Activo" },
    { id: 5, nombre: "Jhon Calderon", email: "jwcalderon2@misena.edu.co", role: "Vendedor", estado: "Activo" },
  ];

  const [data, setData] = useState(dataUsuarios);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: '',
    nombre: '',
    email: '',
    role: '',
    estado: ''
  });
  const seleccionarUsuario = (elemento, caso) => {
    setUsuarioSeleccionado(elemento);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }
  const handleChange = e => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const editar = () => {
    var dataNueva = data;
    dataNueva.map(usuario => {
      if (usuario.id === usuarioSeleccionado.id) {
        usuario.email = usuarioSeleccionado.email;
        usuario.role = usuarioSeleccionado.role;
        usuario.estado = usuarioSeleccionado.estado;
        usuario.nombre = usuarioSeleccionado.nombre;

      }
    });
    setData(dataNueva);
    setModalEditar(false);
  }
  const eliminar = () => {
    setData(data.filter(usuario => usuario.id !== usuarioSeleccionado.id));
    setModalEliminar(false);
  }
  const abrirModalInsertar = () => {
    setUsuarioSeleccionado(null);
    setModalInsertar(true);
  }
  const insertar = () => {
    var valorInsertar = usuarioSeleccionado;
    valorInsertar.id = data[data.length - 1].id + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-10">
            <p className="p-3"></p>
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
              <h2>Gestion de Usuarios</h2>
              <br />
              <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Agregar Usuario</button>
              <br /><br />
              <table className="table table-bordered" class="table table-striped table-hover">
                <thead class="table-light">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(elemento => (
                    <tr>
                      <td>{elemento.id}</td>
                      <td>{elemento.nombre}</td>
                      <td>{elemento.email}</td>
                      <td>{elemento.role}</td>
                      <td>{elemento.estado}</td>
                      <td><button className="btn btn-success" onClick={() => seleccionarUsuario(elemento, 'Editar')}>Editar</button> {"   "}
                        <button className="btn btn-danger" onClick={() => seleccionarUsuario(elemento, 'Eliminar')}>Eliminar</button></td>
                    </tr>
                  ))
                  }
                </tbody>
              </table>
              <Modal isOpen={modalEditar}>
                <ModalHeader>
                  <div>
                    <h3>Editar Usuario</h3>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      name="id"
                      value={usuarioSeleccionado && usuarioSeleccionado.id}
                    />
                    <br />
                    <label>Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="nombre"
                      value={usuarioSeleccionado && usuarioSeleccionado.nombre}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={usuarioSeleccionado && usuarioSeleccionado.email}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Role</label>
                    <input
                      className="form-control"
                      type="text"
                      name="role"
                      value={usuarioSeleccionado && usuarioSeleccionado.role}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Estado</label>
                    <input
                      className="form-control"
                      type="text"
                      name="estado"
                      value={usuarioSeleccionado && usuarioSeleccionado.estado}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-success" onClick={() => editar()}>
                    Actualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setModalEditar(false)}
                  >
                    Cancelar
                  </button>
                </ModalFooter>
              </Modal>
              <Modal isOpen={modalEliminar}>
                <ModalBody>
                  Estás Seguro que deseas eliminar el usuario {usuarioSeleccionado && usuarioSeleccionado.nombre}
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-danger" onClick={() => eliminar()}>
                    Sí
                  </button>
                  <button
                    className="btn btn-secondary"
                    onClick={() => setModalEliminar(false)}
                  >
                    No
                  </button>
                </ModalFooter>
              </Modal>
              <Modal isOpen={modalInsertar}>
                <ModalHeader>
                  <div>
                    <h3>Insertar Usuario</h3>
                  </div>
                </ModalHeader>
                <ModalBody>
                  <div className="form-group">
                    <label>ID</label>
                    <input
                      className="form-control"
                      readOnly
                      type="text"
                      name="id"
                      value={data[data.length - 1].id + 1}
                    />
                    <br />
                    <label>Nombre</label>
                    <input
                      className="form-control"
                      type="text"
                      name="nombre"
                      value={usuarioSeleccionado ? usuarioSeleccionado.nombre : ''}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Email</label>
                    <input
                      className="form-control"
                      type="text"
                      name="email"
                      value={usuarioSeleccionado ? usuarioSeleccionado.email : ''}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Role</label>
                    <input
                      className="form-control"
                      type="text"
                      name="role"
                      value={usuarioSeleccionado ? usuarioSeleccionado.role : ''}
                      onChange={handleChange}
                    />
                    <br />
                    <label>Estado</label>
                    <input
                      className="form-control"
                      type="text"
                      name="estado"
                      value={usuarioSeleccionado ? usuarioSeleccionado.estado : ''}
                      onChange={handleChange}
                    />
                    <br />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <button className="btn btn-success"
                    onClick={() => insertar()}>
                    Insertar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => setModalInsertar(false)}
                  >
                    Cancelar
                  </button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default LitarUsuarios;
