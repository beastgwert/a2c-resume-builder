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
            />
            <form className={`section-content ${isOpen ? 'open' : ''}`}>
                <textarea id="profile-description" placeholder="Add a profile description" className="h-14" value={profile} onChange={onChange}/>
            </form>
        </div>
    )
}