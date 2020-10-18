import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/Logo.svg';
import '../styles/pages/login.css';


export default function ForgotPassword(){
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
                        <h1 className="login-title"> Esqueci a senha </h1>
                        <h2 className="login-subtitle"> Sua redefinição de senha será enviada para o e-mail cadastrado.</h2>
                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" name="e-mail" id="e-mail" required />
                        
                        <button  className="login-button" type="submit">
                            Enviar
                        </button>
                        
                    </div>
                    
                    

                </form>
                

            </div>
        </div>
    )
}