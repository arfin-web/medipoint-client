import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logOut, admin } = useAuth();
    console.log(user);
    const history = useHistory()
    const signIn = () => {
        history.push('/signin')
    }
    const signUp = () => {
        history.push('/signup')
    }

    return (
        <>
            <div className="container-fluid bg-white text-muted">
                <div className="container py-1">
                    <div className="row">
                        <div className="col-lg-2 col-md-4 col-6">
                            <p><i className="fas fa-phone-alt"></i> +880174584</p>
                        </div>
                        <div className="col-lg-6 col-md-4 col-6">
                            <p><i className="fas fa-envelope-open"></i> arfin@gmail.com</p>
                        </div>
                        {
                            user ? <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                <button className="btn bg-warning fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    Dashboard
                                </button>

                                <div className="offcanvas offcanvas-start bg-dark" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                    <div className="offcanvas-header overflow-hidden">
                                        <p className="offcanvas-title fs-4 text-white" id="offcanvasExampleLabel">Dashboard</p>
                                        <button type="button" className="btn-close text-reset bg-warning" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="card bg-dark">
                                        <img src={user?.photoURL} className="card-img-top img-fluid img-thumbnail rounded-circle w-50 bg-dark" alt="profile" />
                                        <div className="card-body overflow-hidden">
                                            <p className="card-title fs-4 text-warning">{user?.displayName}</p>
                                            <p className="card-text text-muted">{user?.email}</p>
                                        </div>
                                        <ul className="list-group list-group-flush">
                                            {
                                                admin && <>
                                                    <li className="list-group-item overflow-hidden bg-dark">
                                                        <NavLink className="nav-link text-warning" to="/makeadmin"><i className="fas fa-user-shield fs-5"></i> Make Admin</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden bg-dark">
                                                        <NavLink className="nav-link text-warning" to="/addappoinments"><i className="fas fa-plus-circle fs-5"></i> Add Appoinments</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden bg-dark">
                                                        <NavLink className="nav-link text-warning" to="/Manageappointments"><i className="fas fa-tasks fs-5"></i> Manage Appointments</NavLink>
                                                    </li>
                                                    <li className="list-group-item overflow-hidden bg-dark">
                                                        <NavLink className="nav-link text-warning" to="/orders"><i className="fas fa-dumpster fs-5"></i> All Orders</NavLink>
                                                    </li>
                                                </>
                                            }
                                            <li className="list-group-item overflow-hidden bg-dark">
                                                <NavLink className="nav-link text-warning" to="/myorders"><i className="fas fa-dumpster-fire fs-5"></i> My Orders</NavLink>
                                            </li>
                                            <li className="list-group-item overflow-hidden bg-dark">
                                                <NavLink className="nav-link text-warning" to="/makereviews"><i className="fas fa-marker fs-5"></i> Give Review</NavLink>
                                            </li>
                                            <li className="list-group-item overflow-hidden bg-dark">
                                                <NavLink className="nav-link text-warning" to="/pay"><i className="fab fa-cc-amazon-pay fs-5"></i> Payment</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <button onClick={logOut} type="button" className="btn bg-white text-dark btn-sm fw-bold">Sign Out</button>
                            </div>
                                : <div className="col-lg-4 col-md-4 col-12 d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button onClick={signIn} type="button" className="btn bg-warning text-dark btn-sm fw-bold">Sign In</button>
                                    <button onClick={signUp} type="button" className="btn bg-warning text-dark btn-sm fw-bold">Sign Up</button>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/home"><p className="fw-bold text-warning logo h4 overflow-hidden">MediPoint</p></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/slots">Slots</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;