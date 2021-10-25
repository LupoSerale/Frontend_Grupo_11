import { useHistory } from 'react-router-dom';

export const CerrarSesion = () => {
    let history = useHistory();
    localStorage.clear();
    history.push('/');
}

export default CerrarSesion;