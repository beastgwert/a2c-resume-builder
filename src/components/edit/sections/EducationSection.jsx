import '../../../styles/EducationSection.css'
import '../../../styles/Section.css'
import SectionHeader from "./SectionHeader";

export default function EducationSection({onChange, education, setOpen, isOpen}){
    return (
        <div className='education-section content-box'>
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Education"
                sectionName="Education"
                iconName="fas fa-book"
                isOptional="false"
            />
            <form className={`section-content ${isOpen ? 'open' : ''}`}>
                <div className='school-info'>
                    <div className='input-group school-title'>
                        <label htmlFor="schoolName">School </label>
                        <input type="text" id="schoolName" data-key="schoolName" placeholder="Enter school" value={education.schoolName} onChange={onChange}/>
                    </div>
                    
                    <div className='school-dates'>
                        <div className='input-group'>
                            <label htmlFor="schoolStart">Start </label>
                            <input type="text" id="schoolStart" data-key="schoolStart" placeholder='xxxx' value={education.schoolStart} onChange={onChange}/>
                        </div>
        
                        <div className='input-group' id='schoolEndGroup'>
                            <label htmlFor="schoolEnd">End </label>
                            <input type="text" id="schoolEnd" data-key="schoolEnd" placeholder='xxxx' value={education.schoolEnd} onChange={onChange}/>
                        </div>
                    </div>
                </div>
                <div className='input-group school-gpa'>
                    <label htmlFor="schoolGpa">GPA </label>
                    <input type="text" id="schoolGpa" data-key="gpa" placeholder="x.xx" value={education.gpa} onChange={onChange}/>
                </div>
                <div className='school-location'>
                    <div className='input-group school-city'>
                        <label htmlFor="schoolCity">City </label>
                        <input type="text" id="schoolCity" data-key="city" placeholder="Enter city" value={education.city} onChange={onChange}/>
                    </div>
                    <div className='input-group school-state'>
                        <label htmlFor="schoolState">State </label>
                        <input type="text" id="schoolState" data-key="state" placeholder="Enter state" value={education.state} onChange={onChange}/>
                    </div>
                </div>
            </form>
        </div>
    )
}