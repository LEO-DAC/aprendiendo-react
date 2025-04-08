export const formRegistroPresion = ( registros,contadorRegistros,setContadorRegistros,setRegistros )=> {
    
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
      }
    

    return(
        <div className='formulario' style={{ width: '50%', margin: '0 auto' }}>
        <h2>Registro de Presión</h2>
        <form>
          <label className='label-input'  >Fecha</label>
          <input className='input-class' type='date' />
          <label className='label-input' > Hora</label>
          <input className='input-class' type='time' />
          <label className='label-input' >Presión Sistólica</label>
          <input id='presionSistolica' className='input-class' type='number' />
          <label className='label-input' >Presión Diastólica</label>
          <input id='presionDiastolica' className='input-class' type='number' />
          <button onClick={saveRecord} type='submit'>Guardar</button>
        </form>
      </div>
    )
}


export default formRegistroPresion