import React, { useEffect } from 'react'
import RowUsuario from './RowUsuario'

const Formulario = () => {

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [Id, setId] = React.useState(0)
    const [lista, setLista] = React.useState([])

    React.useEffect(() => {
        console.log(lista)
    }, [lista])

    const guardarDatos = (e) => {
        e.preventDefault();

        if(!nombre || !apellido){
            alert("Llenar todos los campos!")
        }
        else{
            setId(Math.floor(Math.random() * (999999 - 100000) + 100000))
            setLista([...lista,{nombre, apellido, Id}])
            e.target.reset()
            setNombre("")
            setApellido("")
            setId(0)
        }

    }

    const EliminarElemento = (event, idEliminar) => {
        const arrayWithoutD = lista.filter(function (item) {
            return item.Id !== idEliminar;
        });
        setLista(arrayWithoutD)
    }
    const GuardarElemento = (event, idGuardar, nuevoNombre, nuevoApellido) => {
        const indexElemento = lista.findIndex((elemento => elemento.Id == idGuardar));

        lista[indexElemento].nombre = nuevoNombre
        lista[indexElemento].apellido = nuevoApellido
        setNombre(' ')
    }

    return (
        <>
            <div className='container mt-4'>
                <h2 className='text-primary text-center mb-3'>
                    <u>Formulario de Registro de Usuarios</u>
                </h2>
                <form onSubmit={guardarDatos}>
                    <input 
                        type="text" 
                        placeholder='Ingrese su Nombre'
                        className='form-control mb-3'
                        onChange={(e) => setNombre(e.target.value.trim())}
                    />
                    <input 
                        type="text" 
                        placeholder='Ingrese su Apellido'
                        className='form-control mb-3'
                        onChange={(e) => setApellido(e.target.value.trim())}
                    />
                    <div className="d-grid gap-2">
                        <button type='submit' className='btn btn-outline-dark'>Registrar</button>
                    </div>
                </form>
            </div>
            <br />
            <hr />
            <br />
            <div className='container'>
                <h3 className='text-center text-primary'>
                    <u>Usuarios</u> 
                </h3>
                <table>
                    <tbody>
                            {
                                lista.length > 0 ?
                                (
                                    <tr>
                                        <th>NOMBRE</th>
                                        <th>APELLIDO</th>
                                    </tr>
                                ):
                                ('')
                            }
                            {
                                lista.length > 0 ? 
                                    (

                                        lista.map((item, index) => (
                                            <RowUsuario 
                                                EliminarElemento = {EliminarElemento}
                                                GuardarElemento = {GuardarElemento}
                                                nombre={item.nombre} 
                                                apellido={item.apellido} 
                                                Id={item.Id}
                                                key={index}
                                            />
                                        ))
                                    ):
                                    (
                                        <tr>
                                            <td colSpan="3" className='border-0'>
                                                <h4 className='text-danger'>No hay registros!</h4>
                                            </td>
                                        </tr>

                                    ) 
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Formulario