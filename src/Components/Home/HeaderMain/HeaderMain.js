import React from 'react';
import chair from '../../../images/chair.png'
const HeaderMain = () => {
    return (
        <main  style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Starts Here. </h1>
                <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur 
                    adipisicing elit. Accusantium earum deserunt 
                    in blanditiis iure? Blanditiis quod, pariatur,
                     ea repudiandae fuga architecto, id 
                    eum reprehenderit nesciunt repellendus 
                    illo molestiae quia veniam?</p>
                    <button class="btn btn-outline-success" type="button">Get Appoinment</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;