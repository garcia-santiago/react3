import React from 'react'

const RowUsuario = (props) => {

    const testFNC = () => {
        props.prueba(props.Id);
    }
    return (
        <>
            <tr key={props.Id}>
                <td>{props.nombre}</td>
                <td>{props.apellido}</td>
                <td>
                    <u className='text-danger' role="button" onClick={testFNC}>ELIMINAR</u>   
                </td>
            </tr>
        </>
    )
}

export default RowUsuario