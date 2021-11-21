import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header';

const UserPage = ({ data, handleStatus }) => {
    const navigate = useNavigate();

    let params = useParams();
    const user = data.filter(user => user.id === params.id)[0];
    const handleButtonClick = (id, status) => {
        handleStatus(id, status);
        navigate('/');
    }
    console.log(params, data);
    return (

        <div className='page-wrapper'>
            <Header/>
            <h3>User Details</h3>
            {data.length > 0 &&

                <div className='user-page'>
                    <div className='image-box'><img src={user.Image} /></div>
                    <div className='main-content'>
                        <div className='user-data'>
                            <div className='feild'>
                                <span className='label'>Id</span> <span className='text-data'>{user.id}</span>
                            </div>
                            <div className='feild'>
                                <span className='label'>Name</span> <span className='text-data'>{user.name}</span>

                            </div>
                            <div className='feild'>
                                <span className='label'>Status</span> <span className='text-data' style={{fontWeight:'bold',color:user.status!=='Pending'?user.status==='ShortListed'?'green':'tomato':'#000'}}>{user.status}</span>
                            </div>
                        </div>
                        <div className='button-group'>
                            <button className='primary' onClick={() => handleButtonClick(user.id, 'ShortListed')}>ShortList</button>
                            <button className='danger' onClick={() => handleButtonClick(user.id, 'Rejected')}>Reject</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}
export default UserPage;