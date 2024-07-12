import '../../../styles/PersonalSection.css'

export default function PersonalSection({onChange, name, email, phoneNumber, address, schoolName, schoolStart, schoolEnd}){
    return (
        <div className='personal-section'>
            <h2>Personal Information</h2>
            <form>
                <div className='input-group'>
                    <label htmlFor="name">Name </label>
                    <input type="text" id="name" data-key="name" placeholder="Enter first and last name" value={name} onChange={onChange}/>
                </div>
               <div className='input-group'>
                    <label htmlFor="email">Email </label>
                    <input type="email" id="email" data-key="email" placeholder="Enter email" value={email} onChange={onChange}/>
               </div>

                <div className='input-group'>
                    <label htmlFor="phoneNumber">Phone Number </label>
                    <input type="tel" id="phoneNumber" data-key="phoneNumber" placeholder="Enter phone number" value={phoneNumber} onChange={onChange}/>
                </div>

                <div className='input-group'>
                    <label htmlFor="address">Address </label>
                    <input type="text" id="address" data-key="address" placeholder="Enter address" value={address} onChange={onChange}/>
                </div>
                
                <div className='school-info'>
                    <div className='input-group school-title'>
                        <label htmlFor="schoolName">School </label>
                        <input type="text" id="schoolName" data-key="schoolName" placeholder="Enter school" value={schoolName} onChange={onChange}/>
                    </div>
                    
                    <div className='school-dates'>
                        <div className='input-group'>
                            <label htmlFor="schoolStart">Start </label>
                            <input type="text" id="schoolStart" data-key="schoolStart"  value={schoolStart} onChange={onChange}/>
                        </div>
        
                        <div className='input-group' id='schoolEndGroup'>
                            <label htmlFor="schoolEnd">End </label>
                            <input type="text" id="schoolEnd" data-key="schoolEnd" value={schoolEnd} onChange={onChange}/>
                        </div>
                    </div>
                </div>

            </form>
        </div>
    );
}