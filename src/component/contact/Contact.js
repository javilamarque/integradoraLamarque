import React from "react";
import './Contact.css'
import {useForm} from 'react-hook-form'
import { type } from "@testing-library/user-event/dist/type";



const Contact = () => {
    const { register, handleSubmit, formState:{errors} } = useForm()
    const customSubmit = (data) => {
        console.log(data)
        alert('Felicidades!! gracias por Enviarnos tu consulta')
    }

    return (
        <>
            <h1 className="titulo-form">Dejanos tu Comentario</h1>
            <div className="formInit">
                <span className="form_title">Tu Comentario</span>
                
                <form onSubmit={handleSubmit(customSubmit)}>
                    
                    <div className="form_input">
                        <i className="ri-user-line"></i>
                        <input type='text' placeholder='Nombre' {...register('name', {
                            required: true,
                            minLength: 3
                        })} />
                        {errors.name?.type === 'required' && <small className="fail">Debe Ingresar un Nombre</small>}
                        {errors.name?.type === 'minLength' && <small className="fail">El Nombre no puede contener 2 letras</small>}
                        <span className="bar" />
                    </div>

                    <div className="form_input">
                        <i className="ri-user-line"></i>
                        <input type='mail' placeholder='Email' {...register('mail', {
                            required: true,
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Please enter a valid email',
                            },
                        })} />
                        {errors.mail?.type === 'required' && <small className="fail">Debe ingresar un Mail</small>}
                        {errors.mail?.type === 'pattern' && <small className="fail">El Mail debe Contener un @</small>}
                        <span className="bar" />
                    </div>

                    <div className="form_textarea">
                        <i className="ri-user-line area"><h1>Dejanos tu comentario</h1>
                            <textarea type='text' placeholder="Tu comentario Aqui" {...register('text')} /></i>
                        <span className="bar" />
                    </div>
                    <button type="submit" className="form_button" >Enviar</button>
                    
                </form>
            </div>    
        </>
    )
}

export default Contact;