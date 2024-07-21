import '../../styles/Resume2.css';
import { forwardRef, useRef } from "react";
import { useReactToPrint } from "react-to-print";

const Resume2 = forwardRef(({personal, education, awards, extracurriculars, profile}, ref) => {

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    function formatDate(date){
        if(date == null) return '';
        const year = parseInt(date.slice(0, 4));
        const month = parseInt(date.slice(5)) - 1;
        const curDate = new Date();
        
        if(year < curDate.getFullYear() - 4 || year > curDate.getFullYear() + 4) return '';
        return months[month] + ' ' + year;
    }

    return (
        <div className='resume2 display-side content-box flex p-0' id='pdf-content' ref={ref}>
            <div className="resume2-left w-1/3">
                <div className='resume2-personal'>
                    <p className='resume2-name font-bold text-xl'>{personal.name}</p>
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

                <div className='resume2-education'>
                    <h2 className='title'> Education </h2>
                    <p className='font-semibold'>{education.schoolName},</p>
                    <p className='italic'>{education.city}, {education.state}</p>
                    <p> Class of {education.schoolEnd}  |  {education.gpa} GPA</p>
                </div>
            </div>
            <div className="resume2-right flex-auto">
                <div className="resume2-awards section">
                    <p className='resume2-section-header'> Awards & Honors</p>
                    <div className='resume2-awards-list'>
                        {
                            awards.map((award) => 
                                <div className='award info-box'> 
                                    <p className='title'>{award.title}</p>
                                    <p className='award-date'>{formatDate(award.date)}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
                

                <div className="resume2-extracurriculars section">
                    <p className='resume2-section-header'> Extracurricular Activities</p>
                    <div className='extracurriculars-list'>
                        {
                            extracurriculars.map((extracurricular) => 
                                <div className='resume2-extracurricular'>
                                    <div className='resume2-extracurriculars-row1 flex gap-2'>
                                        <p className='font-semibold'>{extracurricular.title}, </p>
                                        <p>{extracurricular.gradeLevels} </p>
                                    </div>
                                    <p className='italic'>{extracurricular.hoursPerWeek} hours/week</p>
                                    <div className='resume2-extracurricular-description leading-tight' dangerouslySetInnerHTML={{__html: extracurricular.description}}></div>
                                </div>
                            )
                        }
                    </div>
                </div>

            </div>
        </div>
    )
})

export default Resume2;