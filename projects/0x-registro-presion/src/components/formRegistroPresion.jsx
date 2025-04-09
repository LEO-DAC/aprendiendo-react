import { useState } from 'react';
import  Button  from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';

export const FormRegistroPresion = ( registros,contadorRegistros,setContadorRegistros,setRegistros )=> {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
    const clearForm = () => {
        document.querySelector('input[type="date"]').value = '';
        document.querySelector('input[type="time"]').value = '';
        document.querySelector('#presionSistolica').value = '';
        document.querySelector('#presionDiastolica').value= '';
      }

    const saveRecord = (e) => {
        setContadorRegistros(contadorRegistros + 1);
        e.preventDefault();
        const date = document.querySelector('input[type="date"]').value;
        const time = document.querySelector('input[type="time"]').value;
        const presionSistolica = document.querySelector('#presionSistolica').value;
        const presionDiastolica = document.querySelector('#presionDiastolica').value;
        const record = {
          date: date,
          time: time,
          presionSistolica: presionSistolica,
          presionDiastolica: presionDiastolica
        }
        registros.push(record);
        setRegistros(registros);
        console.log(registros);
        clearForm();
        handleClose();
      }


    return (

      <div>
          <Button variant="info" onClick={handleShow}>
            agregar registro
          </Button>
   
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Registro de Presión</Modal.Title>
              </Modal.Header>
              <form>
                <Modal.Body>
                  <label className='label-input'  >Fecha</label>
                  <input className='input-class' type='date' />
                  <label className='label-input' > Hora</label>
                  <input className='input-class' type='time' />
                  <label className='label-input' >Presión Sistólica</label>
                  <input id='presionSistolica' className='input-class' type='number' />
                  <label className='label-input' >Presión Diastólica</label>
                  <input id='presionDiastolica' className='input-class' type='number' />
                </Modal.Body>
        
                <Modal.Footer>
                  <Button variant="danger"  onClick={handleClose}>cancelar</Button>
                  <Button variant='primary' onClick={saveRecord} type='submit'>guardar</Button>
                </Modal.Footer>
            </form>
            </Modal>
        </div>
    );
  
}


export default FormRegistroPresion