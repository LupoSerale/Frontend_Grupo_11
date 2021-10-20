import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import { obtenerProductos, eliminarProducto, crearProductos, editarProductos } from '../services/ServicioProducto';
import NumberFormat from "react-number-format";


function Producto() {
  //Desde aqui codigo API funcional

  //Ejecutar Modal
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);

  //Función para capturar las acciones (Editar o Eliminar)
  const seleccionarProducto = (producto, caso) => {
    setProductoSeleccionado(producto);
    (caso === 'Editar') ? setModalEditar(true) : setModalEliminar(true)
  }

  //Función para capturar los datos desde los imputs
  const handleChange = e => {
    const { name, value } = e.target;
    setProductoSeleccionado((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }
  const [productoSeleccionado, setProductoSeleccionado] = useState({
    id: '',
    descripcion: '',
    valor: '',
    estado: ''
  });

  //Función para listar los productos
  const [productos, setProductos] = useState([])
  useEffect(() => {
    obtenerProductosTodos();
  }, [])

  const obtenerProductosTodos = async () => {
    let response = await obtenerProductos();
    console.log(response);
    setProductos(response.data.data);
  }

  //Funcion para eliminar un producto
  const eliminar = async (id) => {
    await eliminarProducto(id);
    setModalEliminar(false);
    alert('El producto <b>' + productoSeleccionado.descripcion + '</b> fué Eliminado correctamente!', 'danger');
    obtenerProductosTodos();
  }

  //Función para crear un nuevo producto
  const abrirModalInsertar = () => {
    setProductoSeleccionado(null);
    setModalInsertar(true);
  }
  const crear = async (productoSeleccionado) => {
    await crearProductos(productoSeleccionado);
    setModalInsertar(false);
    alert('El producto <b>' + productoSeleccionado.descripcion + '</b> fué Ingresado correctamente!', 'success');
    obtenerProductosTodos();
  }

  //Función para editar el producto seleccionado  
  const editar = async (productoSeleccionado) => {
    await editarProductos(productoSeleccionado);
    setModalEditar(false);
    obtenerProductosTodos();
    alert('El producto <b>' + productoSeleccionado.descripcion + '</b> fué Actualizado correctamente!', 'warning');
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
                  <div className="table-responsive">
                    <h2>Gestion de Productos</h2>
                    <br />
                    <button className="btn btn-success" onClick={() => abrirModalInsertar()}>Nuevo Producto</button>
                    <br />
                    <br />
                    <div id="Alerta"></div>
                    <br />
                    <table className="table table-bordered table-striped table-hover">
                    <thead className="table table-secondary">
                        <tr>
                          <th>ID</th>
                          <th>Descripcion</th>
                          <th>Valor Unitario</th>
                          <th>Estado</th>
                          <th colSpan="2">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productos.map(producto => (
                          <tr align="justify" key={producto._id}>
                            <td>{producto._id}</td>
                            <td>{producto.descripcion}</td>
                            <td><NumberFormat value={producto.valor} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                            <td>{producto.estado ? "Disponible" : "No disponible"}</td>
                            <td align="center"><button className="btn btn-success" onClick={() => seleccionarProducto(producto, 'Editar')}>Editar</button></td>
                            <td align="center"><button className="btn btn-danger" onClick={() => seleccionarProducto(producto, 'Eliminar')}>Eliminar</button></td>
                          </tr>
                        ))
                        }
                      </tbody>
                    </table>
                    <Modal isOpen={modalEditar}>
                      <ModalHeader>
                        <div>
                          <h3>Editar Producto</h3>
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
                            value={productoSeleccionado && productoSeleccionado._id} />
                          <br />
                          <label>Descripcion</label>
                          <textarea
                            className="form-control"
                            rows="5"
                            name="descripcion"
                            value={productoSeleccionado && productoSeleccionado.descripcion}
                            onChange={handleChange} />
                          <br />
                          <label>Valor Unitario</label>
                          <input
                            className="form-control"
                            type="text"
                            name="valor"
                            value={productoSeleccionado && productoSeleccionado.valor}
                            onChange={handleChange} />
                          <br />
                          <label>Estado</label>
                          <select
                            className="form-select"
                            name="estado"
                            value={productoSeleccionado && productoSeleccionado.estado}
                            onChange={handleChange} >
                            <option value="">Seleccione</option>
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                          </select>
                          <br />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-success" onClick={() => editar(productoSeleccionado)}>
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
                          <h3>Eliminar Producto</h3>
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        Estás Seguro que deseas eliminar el producto <b><i>{productoSeleccionado && productoSeleccionado.descripcion}</i></b> ? <b className="text-danger">Esta acción no se puede deshacer...</b>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-danger" onClick={() => eliminar(productoSeleccionado._id)}>
                          Sí
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={() => setModalEliminar(false)}>
                          No
                        </button>
                      </ModalFooter>
                    </Modal>
                    <Modal isOpen={modalInsertar}>
                      <ModalHeader>
                        <div>
                          <h3>Nuevo Producto</h3>
                        </div>
                      </ModalHeader>
                      <ModalBody>
                        <div className="form-group">
                          <label>Descripcion</label>
                          <textarea
                            className="form-control"
                            rows="5"
                            name="descripcion"
                            value={productoSeleccionado ? productoSeleccionado.descripcion : ''}
                            onChange={handleChange}
                          />
                          <br />
                          <label>Valor Unitario</label>
                          <input
                            className="form-control"
                            type="text"
                            name="valor"
                            value={productoSeleccionado ? productoSeleccionado.valor : ''}
                            onChange={handleChange}
                          />
                          <br />
                          <label>Estado</label>
                          <select
                            className="form-select"
                            name="estado"
                            value={productoSeleccionado ? productoSeleccionado.estado : ''}
                            onChange={handleChange}>
                            <option value="">Seleccione</option>
                            <option value="true">Disponible</option>
                            <option value="false">No Disponible</option>
                          </select>
                          <br />
                        </div>
                      </ModalBody>
                      <ModalFooter>
                        <button className="btn btn-success"
                          onClick={() => crear(productoSeleccionado)}>
                          Insertar
                        </button>
                        <button className="btn btn-danger"
                          onClick={() => setModalInsertar(false)}>
                          Cancelar
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
export default Producto;
