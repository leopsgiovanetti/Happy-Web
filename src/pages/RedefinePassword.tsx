import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/Logo.svg';
import '../styles/pages/login.css';


export default function RedefinePassword(){
    return(
        <div id="login-page">
            <div className="content-wrapper">
                <div className="logo-container">
                    <img src={logoImg} width="200" alt="happy" />
                    <div className="location-login">
                        <strong>Curitiba</strong>
                        <span>Paraná</span>
                    </div>
                </div>
                <form action="submit" method="post">
                    <div className="form-container">
                        <h1 className="login-title"> Redefinição de senha </h1>
                        <h2 className="login-subtitle"> Escolha uma nova senha para você acessar o dashboard do Happy</h2>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" required />
                        <label htmlFor="confirm-password">Confirme a senha</label>
                        <input type="password" name="confirm-password" id="confirm-password" required />
                        
                        <button  className="login-button" type="submit">
                            Enviar
                        </button>
                        
                    </div>
                    
                    

                </form>
                

            </div>
        </div>
    )
}