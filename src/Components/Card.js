import React from "react";

const Card = (props) => {
    const { userData } = props;
    return (
        <div className='card-wrapper'>
            <div className='card-content'>
                <div className='image-box'>
                    <img src={userData.Image} />
                </div>
            </div>
            <div className='card-body'>
                <div className='card-text'>
                    <a>{userData.name}</a>
                </div>
            </div>
        </div>
    )
}
export default Card;