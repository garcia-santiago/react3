import React from 'react'

const RowUsuario = ({Id, nombre, apellido, EliminarElemento, GuardarElemento}) => {

    const [editando, setEditando] = React.useState(false);
    const [nuevoNombre, setNuevoNombre] = React.useState(nombre);
    const [nuevoApellido, setNuevoApellido] = React.useState(apellido);

    return (
        <>
            <tr key={Id}>
                {
                    editando ?
                    (
                        <td>
                            <input 
                                type="text" 
                                onChange={(e) => setNuevoNombre(e.target.value.trim())}
                                value={nuevoNombre}

                            />
                        </td>
                    ):
                    (
                        <td>{nombre}</td>
                    )
                }
                {
                    editando ?
                    (
                        <td>
                            <input 
                                type="text" 
                                onChange={(e) => setNuevoApellido(e.target.value.trim())}
                                value={nuevoApellido}
                            />

                        </td>
                    ):
                    (
                        <td>{apellido}</td>
                    )
                }
                {
                    !editando ?
                    (
                        <td>
                            <u 
                                className='text-danger' 
                                role="button" 
                                onClick={event => EliminarElemento(event, Id)}
                            >
                                ELIMINAR
                            </u>   
                        </td>
                    ):
                    (
                        ''
                    )
                }
                {
                    !editando ?
                    (
                        <td>
                            <u 
                                className='text-success' 
                                role="button" 
                                onClick={event => setEditando(true)}
                            >
                                EDITAR
                            </u>   
                        </td>
                    ):
                    (
                        <td>
                            <u 
                                className='text-success' 
                                role="button" 
                                onClick=
                                {
                                    event =>  {
                                        GuardarElemento(event, Id, nuevoNombre, nuevoApellido);
                                        setEditando(false);
                                    }
                                }
                            >
                                GUARDAR
                            </u>   
                        </td>
                    )
                }



            </tr>
        </>
    )
}

export default RowUsuario