import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const { register, formState: { errors }, handleSubmit } = useForm()
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [token]  = useToken(user || gUser)

    if(token){
        navigate(from, { replace: true });
    }

    if( loading || gLoading){
        return <Loading></Loading>
    }

    let signInError ;

    if(error || gError){
       signInError  = <p className="text-red-500">{error?.message || gError?.message}</p>
    }
   
    const onSubmit = data =>{ 
        signInWithEmailAndPassword(data.email, data.password) 
       
    };
    
    return (
         <div className='flex justify-center items-center h-screen'>
             <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-primary text-center">Sign In</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input 
                           type="email" 
                           placeholder="Your email"
                           className="input input-bordered w-full max-w-xs"
                           {...register("email",  {
                               required:{
                                    value:true,
                                    message:'Email is required'
                               },
                            pattern: {
                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                              message: 'Provide a valid email' 
                            }
                          })}
                          />
                        <label className="label">
                            {errors.email?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' &&  <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input 
                           type="password" 
                           placeholder="Your password"
                           className="input input-bordered w-full max-w-xs"
                           {...register("password",  {
                               required:{
                                    value:true,
                                    message:'password is required'
                               },
                            minLength: {
                              value: 6,
                              message: 'password must be 6 characters' 
                            }
                          })}
                          />
                        <label className="label">
                            {errors.password?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' &&  <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>

                          {signInError}
                        <form onSubmit={handleSubmit(onSubmit)}> 
                            <input className="btn w-full max-w-xs text-white"  type="Submit" value="Sign In" />
                        </form>
                          <p>New to Doctors Portal ? <Link to="/signup" className="text-primary" >create a account</Link></p>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline btn-primary"
                     onClick={() => signInWithGoogle ()}>
                        Continue with Google
                     </button>
                </div>
            </div>
        </div>
    );
};

export default Login;