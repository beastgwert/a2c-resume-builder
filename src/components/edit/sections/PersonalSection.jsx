import '../../../styles/PersonalSection.css'
import '../../../styles/Section.css'
import SectionHeader from "./SectionHeader";

export default function PersonalSection({onChange, name, email, phoneNumber, address, setOpen, isOpen}){
    return (
        <div className='personal-section content-box'>
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Personal Information"
                sectionName="Personal"
                iconName="fas fa-user"
                isOptional="false"
            />
            <form className={`section-content ${isOpen ? 'open' : ''}`}>
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
            </form>
        </div>
    );
}