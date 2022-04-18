import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import Loading from '../../Shared/Loading/Loading';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    if (loading) {
        return <Loading></Loading>;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        let email = emailRef.current.value;
        let password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email.');
        }
    }

    return (
        <div className='container w-25 mx-auto text-center'>
            <h2 className='mt-5 mb-4 text-uppercase'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <p className='text-danger'>{error ? 'Email or Passwrod Incorrect' : ''}</p>
                <div className='main_div'>
                    <Button variant="dark w-100 mb-5 fw-bold" type="submit">
                        Login
                    </Button>
                </div>
                <p>New to NFS Photography? <Link to='/register' className='text-primary text-decoration-none' onClick={navigateRegister}>Register</Link></p>
                <p>Forget your password?<Button variant='link text-decoration-none' onClick={resetPassword}>Reset</Button></p>
                <SocialLogin></SocialLogin>
                <ToastContainer></ToastContainer>
            </Form>
        </div>
    );
};

export default Login;