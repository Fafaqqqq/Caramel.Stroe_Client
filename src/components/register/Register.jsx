import React from 'react';


export default function Register() {
    return (
        <form className='login-form'>
            <input type="text" placeholder='Имя' className='input-field'/>
            <input type="text" placeholder='Фамилия' className='input-field'/>
            <input type="text" placeholder='Email' className='input-field'/>
            <input type="text" placeholder='Дата рождения (дд/мм/гг)' className='input-field'/>
            <input type="password" placeholder='Пароль' className='input-field'/>
            <input type="password" placeholder='Повторите пароль' className='input-field'/>
            <button className='button-auth'>
                Войти
            </button>
        </form>
    )
}