import React from "react"
import './header.styles.css'
import {useNavigate} from 'react-router'
import basket from '../../images/basket.svg'
import heart from '../../images/heart.svg'
import me from '../../images/me.svg'

function Header() {
    const navigate = useNavigate();

    const changeRoute = (url) => {
        if (url) {
            navigate(`/${url}`)
        }
        else {
            navigate('/')
        }
    }

    return (
        <div className={'header'}>
            <span className={'header__brand'} onClick={()=>changeRoute()}>
                CARAMEL.STORE
            </span>
            <ul className={'header__menu'}>
                <li className={'li_shop'}>
                    <span onClick={()=>changeRoute('shop')}>
                        Каталог
                    </span>

                </li>
                <li className={'li_about'}>
                    <span onClick={()=>changeRoute('about')}>
                        О нас
                    </span>
                </li>
                <li className={'li_contacts'}>
                    <span onClick={()=>changeRoute('contacts')}>
                        Контакты
                    </span>
                </li>
                <li>
                    <span className={'menu__separator'}>
                        |
                    </span>
                </li>
                <li className={'menu__images'} onClick={()=>changeRoute('liked')}>
                    <img src={heart} alt=""/>
                </li>
                <li className={'menu__images'} onClick={()=>changeRoute('basket')}>
                    <img src={basket} alt=""/>
                </li>
                <li className={'menu__images'} onClick={()=>changeRoute('login')}>
                    <img src={me} alt=""/>
                </li>
            </ul>
        </div>
    );
}

export default Header;
