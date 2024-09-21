import React from "react";

function Login() {
    return (
        <div className="content">
            <div className="container right-panel-active bg-dark text-white A">
                <div className="container__form container--signup bg-dark text-white B">
                    <form action="#" className="form bg-dark text-white C" id="form1">
                        <h2 class="titlee">Sign Up</h2>
                        <input type="text" placeholder="User" className="input" />
                        <input type="email" placeholder="Email" className="input" />
                        <input type="password" placeholder="Password" className="input" />
                        <button class="btnn">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;