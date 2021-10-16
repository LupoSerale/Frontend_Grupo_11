Frontend Grupo 11

Integrantes:
Brian Mateo Mancera Martínez 
Arturo Fernando Corpas Ulloa
Ginna Paola Rodriguez Beltrán
Jhon Wilmer Calderón Madrid
Mileidis Ruiz Morelos 

Link trello: https://trello.com/b/mDwrZimB/scrum

Descripción general
Login y registro a cargo de Ginna Rodríguez:
Se realizó la interfaz de login y registro, en el login se trabajó con el api de Google para realizar la validación de ingreso con gmail. En el registro se realizó un formulario apoyandose en bootstrap y sweet alert. Se organizaron los archivos por medio de route en la pestaña de app.jsx y se organizaron los componentes.

Módulo de productos a cargo de Jhon Calderón
Se realizó el modulo de productos, que consta de Nuevo producto, edicion, listar los productos, se trabaja en Rect se importan las librerias import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'font-awesome/css/font-awesome.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

Módulo de ventas a cargo de Arturo Corpas
Se realizó el modulo de registro con todas las partes que se pidieron, al igual que la parte en que se editar la venta que tiene la lista desplegable para realizar el cambio, pues al principio use Css puro sin la integración al react, tenia un estilo diferente ya que tenia diferentes fondos, pero la idea es que se viera acorde y que tuviera un estilo unificado, así que se escogió el uso del Bootstrap y se lo añadí al react, ya con la implementación creo que podemos ir añadiendo y/o corrigiendo....así mismo añadirle JavaScript para que al momento de colocar el valor total y la cantidad, me genere el valor de la venta total, inconvenientes: la lluvia generó problemas de luz por 2 días al igual que la falla por momentos del servicio de internet.

Módulo de usuarios a cargo de Mileidis Ruiz
Se realizó el modulo de Usuarios, que consta de listar los Usuarios registrados usando hooks,se crean modales para los botones de Agregar nuevo usuario, editar y eliminar usuarios, se trabaja en Rect se importan las librerias import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";