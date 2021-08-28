import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <section className="register vh-100 bg-dark">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <form>
                <div className="form-field p-2">
                        <input className="form-control-lg" type="text" id="username" name="username" placeholder="Username"/>
                    </div>
                    <div className="form-field p-2">
                        <input className="form-control-lg" type="text" id="email" name="email" placeholder="Email "/>
                    </div>
                    <div className="form-field p-2">
                        <input className="form-control-lg" type="password" id="password" name="password" placeholder="Password"/>
                    </div>
                    <div className="form-field text-center p-2">
                        <input type="submit" className="btn btn-outline-light bold"  value="SIGN UP"/>
                    </div>
                    <p className="text-center text-light"> Already have an account? <Link to={'/'} className="link"> Log in </Link> </p>
                </form>
            </div>
        </section>
    )
}

export default Register;