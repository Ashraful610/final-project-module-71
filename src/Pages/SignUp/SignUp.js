import React from 'react';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword,  useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';

const SignUP = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating,updatingError] = useUpdateProfile(auth);
  
      const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    if(user || gUser){
        console.log(user)
    }

    if( loading || gLoading || updating){
        return <Loading></Loading>
    }

    let signInError ;

    if(error || gError || updatingError){
       signInError  = <p className="text-red-500">{error?.message || gError?.message || updatingError?.message}</p>
    }

     

    const onSubmit = async data =>{
        console.log(data)
        await  createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName:data.name  });
        navigate('/appointment')
        console.log('update done')
    };

   
    return (
         <div className='flex justify-center items-center h-screen'>
             <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-2xl font-bold text-primary text-center">Sign Up</h2>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input 
                           type="email" 
                           placeholder="Your name"
                           className="input input-bordered w-full max-w-xs"
                           {...register("name",  {
                               required:{
                                    value:true,
                                    message:'name is required'
                               },
                          })}
                          />
                        <label className="label">
                            {errors.name?.type === 'required' &&  <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>
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
                            <input className="btn w-full max-w-xs text-white"  type="Submit" value="Sign Up" />
                        </form>
                          <p>Already have a account ? <Link to="/login" className="text-primary" >please sign in</Link></p>
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

export default SignUP;