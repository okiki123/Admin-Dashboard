import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from '@mui/icons-material'
import React from 'react'
import './user.css'
const User = () => {
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Edit User</h1>
                <button className='userAddButton'>Create</button>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                    <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="usershowtop"
              className="userShowImg"
            />
            <div className='userShowTopTitle'>
                <span className='userShowUsername'>Adewole Caleb</span>
                <span className='userShowUserTitle'>Software Engineer</span>
            </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Account Details</span>
                        <div className='userShowInfo'>
                        <PermIdentity className='userShowIcon'/>
                        <span className='userShowInfoTitle'>hebronace99</span>
                        </div>
                        <div className='userShowInfo'>
                        <CalendarToday className='userShowIcon'/>
                        <span className='userShowInfoTitle'>10.12.1999</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                        <PhoneAndroid className='userShowIcon'/>
                        <span className='userShowInfoTitle'>+234 9023191978</span>
                        </div>
                        <div className='userShowInfo'>
                        <MailOutline className='userShowIcon'/>
                        <span className='userShowInfoTitle'>hebronace99@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                        <LocationSearching className='userShowIcon'/>
                        <span className='userShowInfoTitle'>Lagos, Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Edit</span>
                    <form className='userUpdateForm'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Username</label>
                                <input type="text" placeholder="hebronace99" className="userUpdateInput"/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Full Name</label>
                                <input type="text" placeholder="Adewole Caleb" className="userUpdateInput"/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Email</label>
                                <input type="text" placeholder="hebronace99@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Telephone Number</label>
                                <input type="text" placeholder="+234 9023191978" className="userUpdateInput"/>
                            </div>
                            <div className='userUpdateItem'>
                                <label>Address</label>
                                <input type="text" placeholder="Lagos, Nigeria" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' className='userUpdateImg'/>
                                <label htmlFor='file'>
                                    <Publish className='userUpdateIcon'/>
                                </label>
                                <input  type='file' id='file' style={{ display: "none"}}/>
                            </div>
                            <button className='userUpdateButton'>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
