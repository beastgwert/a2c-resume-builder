
export default function SectionHeader({sectionName, sectionTitle, isOpen, setOpen}){
    return (
        <div className="section-header" onClick={() => setOpen(isOpen ? null : sectionName)}>
            <h2>{sectionTitle}</h2>
            <h2 className={`expand-arrow stretch ${isOpen ? "open" : ""}`}>v</h2>
        </div>
    )
}