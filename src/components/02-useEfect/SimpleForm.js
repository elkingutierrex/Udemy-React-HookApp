import React, {useEffect, useState} from 'react'
import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email:''
    })

    const { name, email } = formState;
   
    const handleInputChange = ( { target }) => {
      
        setFormState({
            ...formState,
            [ target.name ]: target.value
        })
    }


    useEffect(() => {
        console.log( 'hey')
       // No se ejecuta si no al principio
    }, [])

    useEffect(() => {
        console.log( 'FormState cambio')
       // Se ejecuta al principio y  estara pendiente del cambio del formulario
    }, [ formState ])

    useEffect(() => {
        console.log( 'Email cambio')
       // Se ejecuta al principio y  solo estara pendiente del cambio del email
    }, [ email ])
    return (
        <>
        <h1>UseEffect</h1>
        <hr/>

        <div className="form-group">
            <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange={ handleInputChange }
                 />
            <input
                type="text"
                name="email"
                className="form-control"
                placeholder="algo@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={ handleInputChange }
                 />
            
        </div>
        </>
    )
}
