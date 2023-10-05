import Alert from 'react-bootstrap/Alert';
import ReactDOM from 'react-dom';
import '../../stylization/css/style.css'

export default function Notification({ message, onClose }) {
    return ReactDOM.createPortal(
        <div className='notification'><Alert variant='success' onClose={onClose} dismissible>
            Adicionado com sucesso
        </Alert>
        </div>,
        document.body
    )
}
