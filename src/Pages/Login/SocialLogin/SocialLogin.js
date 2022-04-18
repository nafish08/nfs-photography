import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import facebook from '../../../images/icons/facebook.png';
import google from '../../../images/icons/google.png';
import Loading from '../../Shared/Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    if (loading || fbLoading) {
        return <Loading></Loading>;
    }

    if (error || fbError) {
        errorElement =
            <p className='text-danger'>Error: {error?.message}{fbError?.message}</p>
    }

    if (user || fbUser) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='mb-5'>
                <button onClick={() => signInWithGoogle()} className='btn btn-light d-block mx-auto w-100 mb-3 position-relative p-2 btn_style'>
                    <img className='social_icons' src={google} alt='' />
                    <p className='mb-0'>Login with Google</p>
                </button>
                <button onClick={() => signInWithFacebook()} className='btn btn-light d-block mx-auto w-100 position-relative p-2 btn_style'>
                    <img className='social_icons border rounded-circle' src={facebook} alt='' />
                    <p className='mb-0'>Login with Facebook</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;