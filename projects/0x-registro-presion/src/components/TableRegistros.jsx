export const TableRegistros = ( registros ) => {


    return(
        <div>
            <h3>registros totales: { registros.length } </h3>
            <table>
                <thead>
                    <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Presión Sistólica</th>
                    <th>Presión Diastólica</th>
                    </tr>
                </thead>
                <tbody>
                    {registros.map((registro, index) => {
                    return (
                        <tr key={index}>
                        <td>{registro.date}</td>
                        <td>{registro.time}</td>
                        <td>{registro.presionSistolica}</td>
                        <td>{registro.presionDiastolica}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </div>
        
    )
}


export default TableRegistros