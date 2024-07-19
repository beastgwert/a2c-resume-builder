import '../../styles/Resume2.css';
import { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume2 = forwardRef(({personal, awards, extracurriculars, profile}, ref) => {
    return (
        <div className='resume2 display-side content-box flex p-0' id='pdf-content' ref={ref}>
            <div className="resume2-left w-2/5">
                <div className='resume2-personal'>
                    <p className='resume2-name font-semibold text-xl'>{personal.name}</p>
                    <div>
                        <i className="fas fa-envelope"></i>
                        <p className='resume2-email text-base'>{personal.email}</p>
                    </div>

                    <div>
                        <i className="fas fa-phone"></i>
                        <p className='resume2-phone text-base'>{personal.phoneNumber}</p>
                    </div>
                    <div>
                        <i className='fas fa-location-dot'></i>
                        <p className='resume2-address text-base'>{personal.address}</p>
                    </div>
                </div>

                <div className='resume2-profile'>
                    <h2 className='title'> Profile </h2>
                    <p>{profile}</p>
                </div>
            </div>
            <div className="resume2-right flex-auto">

            </div>
        </div>
    )
})

export default Resume2;