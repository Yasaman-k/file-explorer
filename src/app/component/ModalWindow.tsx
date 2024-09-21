'use client'
interface Props {
    isOpen?: boolean;
    onClose: () => void;
    title?: boolean
}

const ModalWindow: React.FC<Props> = ({ isOpen, onClose, title }) => {
    return (
        <div className="modal-container">
            <input type="text" />
            <button onClick={onClose} >
                &times;
            </button>

        </div>
    )
}
export default ModalWindow;