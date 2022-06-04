import React from 'react'

import './login.styles.css'

export default function login () {
    return (
        <form className='login-form'>
            <input type="text" placeholder='Email' className='input-field'/>
            <input type="password" placeholder='Пароль' className='input-field'/>
            <button className='button-auth'>
                Войти
            </button>
        </form>
    )
}