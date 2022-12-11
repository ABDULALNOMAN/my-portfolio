import React from 'react';

const Skill = () => {
    return (
        <div className='flex flex-row border justify-between'>
            <div className='flex flex-col w-1/2 h-full justify-between '>
                <div>
                    <progress className="progress progress-primary w-56" value="10" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-primary w-56" value="10" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-primary w-56" value="40" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-primary w-56" value="70" max="100"></progress>
                </div>
                <div>
                    <progress className="progress progress-primary w-56" value="100" max="100"></progress>
                </div>
            </div>
            <div className='w-1/2 h-full'>
                <img src={skill} alt="" />
            </div>
        </div>
    );
};

export default Skill;