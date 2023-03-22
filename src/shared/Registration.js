
// external import 
import React, { useEffect } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// internal import 
import { UserContext } from '../App';

// Full name, email, age,
// address, phone, profile picture, nid picture, password, confirm password,
// vehicle type ( car, bike)


const Registration = (props) => {
    const { userTypes } = props;
    const [user, setUser] = useContext(UserContext)
    const navigate = useNavigate();
    console.log(props)

    const { register, formState: { errors }, handleSubmit, reset } = useForm();


    useEffect(() => {
        if (user._id) {
            navigate('/billings');
            toast.success('Welcome to Hero-Rider');
        }
    }, [user, navigate])


    const onSubmit = async (data) => {
        data.userTypes = userTypes
        if (data.password !== data.confirmpassword) {
            alert("Password Didn't Match")
            return
        }
        // axios.post(`http://localhost:5000/api/registration`, { data })
        //     .then(res => {
        //         if (res.data.message) {
        //             reset()
        //         } else {
        //             toast.warn('Sorry For This Issues Try again Later')
        //         }
        //     })
        console.log(data)
    };
    return (
        <div className='registration font-oswald'>
            <div className='flex items-center flex-col w-full  md:w-[40%] p-10 justify-center mx-auto border rounded-md mt-20'>
                <img width="50px" src="https://i.ibb.co/XzhVF9g/TEPCO-Power-Grid-symbol-svg-removebg-preview-1.png" alt="company_logo" />
                <h2 className='text-center font-bold'>Hero-Rider</h2>
                <h2 className='text-center text-red-500 text-2xl'>Registration</h2>


                <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
                    <div>
                        <label className="label">
                            <span className="text-md">Full Name</span>
                        </label>

                        <input id='name' name="name" type="name" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: "Name Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.name?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.name?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label ">
                            <span className="text-md">Email</span>
                        </label>
                        <input id='email' name="email" type="text" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: "Email Required"
                                },
                                pattern: {
                                    value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                                    message: "Email Should Be a Valid Email"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.email?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.email?.message}</span>}
                            {errors?.email?.type === 'pattern' && <span className="label-text-alt text-red-400 font-bold">{errors?.email?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Your Address</span>
                        </label>

                        <input id='address' name="address" type="address" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("address", {
                                required: {
                                    value: true,
                                    message: "Address is Required"
                                }
                            })}
                        />
                        <label classaddress="label">
                            {errors?.address?.type === 'required' && <span className="label-text-alt text-red-500 font-bold">{errors?.address?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Select Vehicle Type</span>
                        </label>
                        <select className="select select-bordered w-full rounded-sm border border-gray-300 focus:outline-none mt-2" {...register("cartype", {
                            required: {
                                value: true,
                                message: "drivinglicense Required"
                            }
                        })}>
                            <option>Car</option>
                            <option>Bike</option>
                        </select>
                        <label className="label">
                            {errors?.cartype?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.cartype?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Password</span>
                        </label>

                        <input id='password' name="password" type="password" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Value Should Be Minimum 6 Digit"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.password?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.password?.message}</span>}
                            {errors?.password?.type === 'minLength' && <span className="label-text-alt text-red-400 font-bold">{errors?.password?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Confirm Password</span>
                        </label>

                        <input id='confirmpassword' name="confirmpassword" type="confirmpassword" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("confirmpassword", {
                                required: {
                                    value: true,
                                    message: "Confirm Password Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: "Value Should Be Minimum 6 Digit"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.confirmpassword?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.confirmpassword?.message}</span>}
                            {errors?.confirmpassword?.type === 'minLength' && <span className="label-text-alt text-red-400 font-bold">{errors?.confirmpassword?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">NID Card Picture</span>
                        </label>

                        <input id='nidcardpicture' name="nidcardpicture" type="file" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("nidcardpicture", {
                                required: {
                                    value: true,
                                    message: "Nid Card Picture is Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.nidcardpicture?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.nidcardpicture?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Profile Picture</span>
                        </label>

                        <input id='profilepicture' name="profilepicture" type="file" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("profilepicture", {
                                required: {
                                    value: true,
                                    message: "Profile Picture is Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.profilepicture?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.profilepicture?.message}</span>}
                        </label>
                    </div>

                    {
                        userTypes === 'Rider' && <div>
                            <div>
                                <label className="label">
                                    <span className="text-md">Car Name</span>
                                </label>

                                <input id='carname' name="carname" type="carname" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                                    {...register("carname", {
                                        required: {
                                            value: true,
                                            message: "Carname is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.carname?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.carname?.message}</span>}
                                </label>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="text-md">Car Model</span>
                                </label>

                                <input id='carmodel' name="carmodel" type="carmodel" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                                    {...register("carmodel", {
                                        required: {
                                            value: true,
                                            message: "carmodel Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.carmodel?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.carmodel?.message}</span>}
                                </label>
                            </div>

                            <div>
                                <label className="label">
                                    <span className="text-md">Name Plate</span>
                                </label>

                                <input id='nameplate' name="nameplate" type="nameplate" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                                    {...register("nameplate", {
                                        required: {
                                            value: true,
                                            message: "Nameplate is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.nameplate?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.nameplate?.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-md">Driving License Picture</span>
                                </label>

                                <input id='drivinglicense' name="drivinglicense" type="file" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                                    {...register("drivinglicense", {
                                        required: {
                                            value: true,
                                            message: "Driving License Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.drivinglicense?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.drivinglicense?.message}</span>}
                                </label>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="text-md">Area</span>
                                </label>

                                <input id='area' name="area" type="area" className="input w-full  rounded-sm border border-gray-300 focus:outline-none mt-2"
                                    {...register("area", {
                                        required: {
                                            value: true,
                                            message: "Area is Required"
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors?.area?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.area?.message}</span>}
                                </label>
                            </div>
                        </div>
                    }

                    <div>
                        <label className="label">
                            <span className="text-md">Phone</span>
                        </label>

                        <input id='phone' name="phone" type="phone" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: "Phone Number Required"
                                },
                                minLength: {
                                    value: 11,
                                    message: "Value Should Be Minimum 11 Digit"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.phone?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.phone?.message}</span>}
                            {errors?.phone?.type === 'minLength' && <span className="label-text-alt text-red-400 font-bold">{errors?.phone?.message}</span>}
                        </label>
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-md">Age</span>
                        </label>

                        <input id='age' name="age" type="age" className="input w-full rounded-sm border border-gray-300 focus:outline-none mt-2"
                            {...register("age", {
                                required: {
                                    value: true,
                                    message: "Age is Required"
                                }
                            })}
                        />
                        <label className="label">
                            {errors?.age?.type === 'required' && <span className="label-text-alt text-red-400 font-bold">{errors?.age?.message}</span>}
                        </label>
                    </div>


                    <p className='text-center'>Already Registered ?<Link className='text-decoration-none text-red-500' to="/login"> Please Login</Link></p>
                    <input className='btn bg-red-800 border-none w-full mt-5 rounded-sm' type="submit" value="Register" />
                </form>
            </div>
        </div>
    );
};
export default Registration;