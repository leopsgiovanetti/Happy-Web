import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../images/Logo.svg';
import '../styles/pages/login.css';


export default function Login(){
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
                        <h1 className="login-title"> Fazer Login </h1>
                        <label htmlFor="e-mail">E-mail</label>
                        <input type="email" name="e-mail" id="e-mail" required />
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" required />
                        <div className="form-footer">
                            <div className="remember-check">
                                <input type="checkbox" name="remember" id="remember" />
                                <label htmlFor="remember">Lembrar-me</label>
                                
                            </div>
                            <Link to="">
                                Esqueci minha senha
                            </Link>
                        </div>
                        <button  className="login-button" type="submit">
                            Entrar
                        </button>
                    </div>
                    
                    

                </form>
                

            </div>
        </div>
    )
}