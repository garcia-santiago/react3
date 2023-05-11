import React from 'react'
import RowUsuario from './RowUsuario'

const Formulario = () => {

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [Id, setId] = React.useState(0)
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault();

        if(!nombre || !apellido){
            alert("Llenar todos los campos!")
        }
        else{
            const x = Math.floor(Math.random() * (999999 - 100000) + 100000)
            setId(x)
            setLista([...lista,{nombre, apellido, Id}])
            // e.target.reset()
            // setNombre("")
            // setApellido("")
        }

    }

    const Prueba = (idEliminar) => {
        console.log(idEliminar)
        const arrayWithoutD = lista.filter(function (item) {
            return item.Id !== idEliminar;
        });
        console.log(arrayWithoutD)
        // setLista(arrayWithoutD)
    }

    return (
        <>
            <div className='container'>
                <h2 className='text-primary text-center'>Formulario de Registro de Usuarios</h2>
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
                <h3 className='text-center text-primary'>Usuarios</h3>
                <table>
                    <tbody>

                        <tr>
                            <th>NOMBRE</th>
                            <th>APELLIDO</th>
                            <th>ACCIÓN</th>
                        </tr>

                            {
                                lista.map((item, index) => (
                                    <RowUsuario 
                                        prueba = {Prueba()}
                                        nombre={item.nombre} 
                                        apellido={item.apellido} 
                                        id={item.Id}
                                        key={index}
                                    />
                                ))
                            }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Formulario