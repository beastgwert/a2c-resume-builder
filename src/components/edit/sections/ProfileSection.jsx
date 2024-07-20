import SectionHeader from "./SectionHeader";

export default function ProfileSection({profile, onChange, setOpen, isOpen}){
    return (
        <div className="profile-section content-box">
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Profile"
                sectionName="Profile"
                iconName="none"
                isOptional="true"
            />
            <form className={`section-content ${isOpen ? 'open' : ''}`}>
                <textarea id="profile-description" placeholder="Add a profile description" value={profile} onChange={onChange}/>
            </form>
        </div>
    )
}