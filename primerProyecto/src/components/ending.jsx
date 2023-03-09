import { React } from "react";

export const ending = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h4>About</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Agustina</a></li>
                            <li><a href="#">Casarone</a></li>
                            <li><a href="#">Camada 7</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Services</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">Primer Parcial</a></li>
                            <li><a href="#">Front ENd III</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h4>Contact Us</h4>
                        <ul className="list-unstyled">
                            <li><a href="#">React</a></li>
                            <li><a href="#">Vite</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <p>Copyright &copy; Examen 2023</p>
                    </div>
                    <div className="col-md-4">
                        <ul className="list-inline social-buttons">
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-twitter"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-facebook"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="#">
                                    <i className="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default ending;