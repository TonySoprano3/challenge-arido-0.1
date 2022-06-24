import {React} from 'react';
import { useForm } from "react-hook-form";
import { ageValidator } from "./valiadors";
import './Users.scss';

const Users = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        // defaultValues: {
        //     nombre: 'Luis',
        //     direccion: 'Calle Gran Vía'
        // }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    const incluidPhone = watch('incluidPhone');

    return <section id='users' className='app__users'>
    
       
       
        {/* <p>Nombre: {watch('nombre')}</p> */}
        <form  className='app__form' onSubmit={handleSubmit(onSubmit)}>
        <h2>Users Creator</h2>
            <div className='form-section'>
                <label>User Name</label>
                <input type="text" {...register('name', {
                    required: true,
                    maxLength: 18
                })} />
                {errors.name?.type === 'required' && <p>Required Name</p>}
                {errors.name?.type === 'maxLength' && <p>Required Less Caracters</p>}
            </div>
            <div className='form-section'>
                <label>Adress</label>
                <input type="text" {...register('adress', {
                    required: true
                })} />
            </div>
            <div  className='form-section'>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'pattern' && <p>This Email format is incorrect</p>}
                {errors.email?.type === 'required' && <p>Required</p>}
            </div>
            <div  className='form-section'>
                <label>Age</label>
                <input type="text" {...register('age', {
                    validate: ageValidator
                })} />
                {errors.age && <p>Select a Age between 18-65</p>}
            </div>
            <div  className='form-section'>
                <label>Country</label>
                <select {...register('country',{
                  required: true
                })}>
                    <option value></option>
                    <option value="es">España</option>
                    <option value="it">Italia</option>
                    <option value="ar">Argentina</option>

                    {errors.option?.type === 'required' && <p>Select a Country</p> }
                </select>
             
            </div>
            <div  className='form-section'>
                <label>¿Phone Number?</label>
                <input type="checkbox" {...register('incluidPhone')} />
            </div>
            {incluidPhone && (
                <div  className='form-section'>
                    <label>Number</label>
                    <input type="text" {...register('phone')} />
                </div>
            )}
            <input type="submit" value="Create" className='btn__login' />
           
        </form>
        <p className='app-designed'>by: Lautaro Ortiz - FrontEnd Dev</p>
    </section>
}

export default Users;