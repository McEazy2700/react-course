function Modal (props) {
    function confirmlHandler(){
        props.onConfirm();
    }
    function cancelHandler(){
        props.onCancel();
    }


    return (
        <div className="modal">
            <p>Are You Sure</p>
            <button className="btn btn--alt" onClick={cancelHandler}>Cancel</button>
            <button className="btn" onClick={confirmlHandler}>Confirm</button>
        </div>
    );
}

export default Modal;