import React from 'react'

const Formulario = () => {

    const [nombre, setNombre] = React.useState('')
    const [apellido, setApellido] = React.useState('')
    const [lista, setLista] = React.useState([])

    const guardarDatos = (e) => {
        e.preventDefault();

        if(!nombre || !apellido){
            alert("Llenar todos los campos!")
        }

        setLista([...lista,{nombre, apellido}])
        e.target.reset()
        setNombre("")
        setApellido("")

    }

    return (
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
            <br />
            <hr />
            <br />
            <div className='container'>
                <h3 className='text-center text-primary'>Usuarios</h3>
                <table>
                    <tr>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>ACCIÓN</th>
                    </tr>
                    {
                        lista.map((item, index) => (
                            <tr key={index}>
                                <td>{item.nombre}</td>
                                <td>{item.apellido}</td>
                                <td className='text-danger'>
                                    <u>ELIMINAR</u>   
                                </td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    )
}

export default Formulario