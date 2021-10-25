/* eslint-disable array-callback-return */
import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { obtenerUsuarios, eliminarUsuario, editarUsuarios } from '../services/ServicioUsuario';
import { getCurrentUser } from '../services/ServicioAuth';

function Usuario() {

  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(getCurrentUser());
  }, []);

  //Desde aqui codigo API funcional

  //Ejecutar Modal
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  //Función para capturar las acciones (Editar o Eliminar)
  const seleccionarUsuario = (usuario, caso) => {
    setUsuarioSeleccionado(usuario);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  //Función para capturar los datos desde los imputs
  const handleChange = e => {
    const { name, value } = e.target;
    setUsuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    id: '',
    fullName: '',
    email: '',
    password: '',
    date: ''
  });

  //Función para listar los usuarios
  const [usuarios, setUsuarios] = useState([]);
  
  //Funcion para listar todos los usuarios
  useEffect(() => {
    obtenerUsuariosTodos();
  }, [])

  const obtenerUsuariosTodos = async () => {
    let response = await obtenerUsuarios();
    console.log(response);
    setUsuarios(response.data.data);
  }

  //Funcion para eliminar un usuario
  const eliminar = async (id) => {
    await eliminarUsuario(id);
    setModalEliminar(false);
    alert('El usuario <b>' + usuarioSeleccionado.email + '</b> fué Eliminado correctamente!', 'danger');
    obtenerUsuariosTodos();
  }

  //Función para editar el usuario seleccionado  
  const editar = async (usuarioSeleccionado) => {
    await editarUsuarios(usuarioSeleccionado);
    setModalEditar(false);
    obtenerUsuariosTodos();
    alert('El usuario <b>' + usuarioSeleccionado.fullUser + '</b> fué Actualizado correctamente!', 'warning');
  }
  //Hasta aqui codigo API funcional
  const datoAlerta = document.getElementById('Alerta');

  function alert(message, type) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';
    datoAlerta.append(wrapper);
  }

  return (
    <>
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-12">
            <div className="container shadow-lg p-3 mb-5 bg-body rounded">
              <div className="row justify-content-center m-3">
                <div className="App">
                  <h2>Gestion de Usuarios</h2>
                  <br />                 
                  <div id="Alerta"></div>
                  <br />
                  <div className="table-responsive">
                    <table className="table table-bordered table-striped table-hover">
                      <thead className="table table-secondary">
                        <tr>
                          <th>ID</th>
                          <th>Nombre Completo</th>
                          <th>Email</th>
                          {user && (
                            <>
                              <th>Acciones</th>
                            </>)}
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios &&
                          usuarios.map(usuario => (
                            <tr align="justify" key={usuario._id}>
                              <td>{usuario._id}</td>
                              <td>{usuario.fullName}</td>
                              <td>{usuario.email}</td>
                              {user && (
                                <>
                                  <td align="center"><button className="btn btn-danger" onClick={() => seleccionarUsuario(usuario, 'Eliminar')}>Eliminar</button></td>
                                </>)}
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
                            value={usuarioSeleccionado && usuarioSeleccionado._id} />
                          <br />
                          <label>Nombre Completo</label>
                          <textarea
                            className="form-control"
                            rows="5"
                            name="fullUser"
                            value={usuarioSeleccionado && usuarioSeleccionado.fullUser}
                            onChange={handleChange} />
                          <br />
                          <label>Valor Unitario</label>
                          <input
                            className="form-control"
                            type="text"
                            name="valor"
                            value={usuarioSeleccionado && usuarioSeleccionado.valor}
                            onChange={handleChange} />
                          <br />
                          <label>Estado</label>
                          <select
                            className="form-select"
                            name="estado"
                            value={usuarioSeleccionado && usuarioSeleccionado.estado}
                            onChange={handleChange} >
                            <option value="">Seleccione</option>
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                          </select>
                          <br />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-success" onClick={() => editar(usuarioSeleccionado)}>
                          Actualizar
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => setModalEditar(false)}>
                          Cancelar
                        </button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={modalEliminar}>
                      <ModalHeader>
                        <div>
                          <h3>Eliminar Usuario</h3>
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        Estás Seguro que deseas eliminar el usuario <b><i>{usuarioSeleccionado && usuarioSeleccionado.fullUser}</i></b> ? <b className="text-danger">Esta acción no se puede deshacer...</b>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-danger" onClick={() => eliminar(usuarioSeleccionado._id)}>
                          Sí
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setModalEliminar(false)}>
                          No
                        </button>
                      </ModalFooter>
                    </Modal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Usuario;
