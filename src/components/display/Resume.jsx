import '../../styles/Resume.css';

export default function Resume({personal, awards, extracurriculars}){
    console.log("checking resume: ", awards.map((award) => award.title));

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
        <div className='display-side' id='pdf-content'>
            <div className="resume-header">
                <p className="personal-1">{personal.name}</p>
                <div className="personal-2">
                    <p>{personal.phoneNumber}</p>
                    <p>◇</p>
                    <p>{personal.address}</p>
                </div>
                <p className="personal-3">{personal.email}</p>
            </div>
            <div className="section-display education-display">
                <p className='education-header'> EDUCATION </p>
                <div className='education-info'>
                    <div className='school info-box'>
                        <p className='title'>{personal.schoolName}</p>
                        <p className='school-date'> {personal.schoolStart} - {personal.schoolEnd}</p>
                    </div>
                </div>

            </div>
            <div className="section-display awards-display">
                <p className='awards-header'> AWARDS AND HONORS</p>
                <div className='awards-list'>
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
            <div className="section-display extracurriculars-display">
                <p className='extracurriculars-header'> EXTRACURRICULAR ACTIVITIES</p>
                    <div className='extracurriculars-list'>
                    {
                        extracurriculars.map((extracurricular) => 
                            <div className='extracurricular info-box'> 
                                <div className='extracurricular-row1'>
                                    <p className='title'>{extracurricular.title}</p>
                                    <div className='extracurricular-numerical-info'>
                                        {
                                            extracurricular.hoursPerWeek == "" ? (
                                                <p></p>
                                            )
                                            :
                                            (
                                            <p className='extracurricular-hours-per-week'>
                                                ({extracurricular.hoursPerWeek} hrs/week)
                                            </p>
                                            )
                                            }
                                            <p className='extracurricular-grade-levels'>{extracurricular.gradeLevels}</p>
                                            
                                        
                                    </div>
                                </div>
                                <p className='extracurricular-description'>{extracurricular.description}</p>
                            </div>
                        )
                    }
                    </div>
            </div>
        </div>
    );
}