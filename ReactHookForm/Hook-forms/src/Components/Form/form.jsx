import React from 'react';
import { useForm } from "react-hook-form";

const Formulario = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

	return <div>
	<h2>Formulario</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
    <div>
        <label>Nombre</label>
        <input type="text" { ...register('name', {
            required: true,
            maxLength: 10
        })}/>
    </div>
    <div>
        <label>Apellidos</label>
        <input type="text" { ...register('Apellidos')} />
    </div>
    <div>
        <label>Email</label>
        <input type="text" { ...register('Email')}/>
    </div>
    <div>
        <label>Edad</label>
        <input type="text" { ...register('edad')}/>
    </div>
    <div>
        <label>Pais</label>
        <select>
            <option value="es">España</option>
            <option value="po">Portugal</option>
            <option value="it">Italia</option>
        </select>
    </div>
    <input type="submit" value="Enviar"/>
    </form>
    </div>
}

export default Formulario;