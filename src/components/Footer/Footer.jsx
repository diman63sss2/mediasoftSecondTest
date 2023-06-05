import React from 'react';
import cl from './Footer.module.css';

const Footer = () => {
    return (
        <div className={cl.footer}>
            <div className="container">
                <a target="_blank" href='https://samara.hh.ru/resume/72f301e4ff09395a310039ed1f504475664f52' className={cl.link}>
                    Разработчик: Сушков Дмитрий Олегович
                </a>
            </div>
        </div>
    );
};

export default Footer;