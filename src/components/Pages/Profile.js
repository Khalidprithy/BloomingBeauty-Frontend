import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Profile = () => {

    const [user] = useAuthState(auth);
    console.log(user)

    return (
        <div>
            <h1 className='text-3xl text-center font-bold text-secondary p-2'>Your Profile</h1>
            <div className='m-2 grid grid-cols-1 md:grid-cols-3'>
                <div className='h-full'>
                    <div className="card h-full">

                        <img className="mask mask-circle w-32 mx-auto" src={user?.photoURL} alt=" Shoes" />

                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{user?.displayName}</h2>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <h1 className='text-xl m-2 font-semibold text-center'>Update your profile</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <input className='mb-3 p-2 rounded-md border-2 hover:border-success' type="text" placeholder="Your name" />
                            <input type="text" placeholder="Your email" className='mb-3 p-2 rounded-md border-2 hover:border-success' />
                            <input type="text" placeholder="Phone number" className='mb-3 p-2 rounded-md border-2 hover:border-success' />
                            <input type="text" placeholder="Company" className='mb-3 p-2 rounded-md border-2 hover:border-success' />
                            <textarea className='mb-3 p-2 rounded-md border-2 hover:border-success h-20' placeholder='Bio' name="bio" id="bio" cols="30" rows="10"></textarea>
                            <button className='btn btn-success'>Update</button>
                        </div>
                    </div>
                </div>
                <div className='hidden md:block'>
                    <div className="card h-full">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/online-registration-4487137-3726287.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;