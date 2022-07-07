import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';


function Todo(props) {
    const [modalIsOpen, setModalIsOpen ] = useState(false);


    function deleteHandler () {
        setModalIsOpen(true);
    }

    function cancelHandler() {
        setModalIsOpen(false)
    }

  return (
    <div className="card">
    <h2>{props.text}</h2>
    <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
    </div>
    {modalIsOpen && <Modal onCancel={cancelHandler} onConfirm={cancelHandler} />}
    {modalIsOpen && <Backdrop onClick={cancelHandler}/>}
    </div>
  );
}

export default Todo;
