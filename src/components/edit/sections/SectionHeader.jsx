
export default function SectionHeader({sectionName, sectionTitle, isOpen, setOpen, iconName, isOptional}){
    return (
        <div className="section-header" onClick={() => setOpen(isOpen ? null : sectionName)}>
            <h2 className={`section-title ${isOptional == "true" ? 'is-optional' : ""} `}>
                {isOptional == "false" ? "" :
                    <p>*</p>

                }
                {iconName == "none" ? "" :
                    <i className={iconName}></i>
                }
                {sectionTitle}
            </h2>
            <h2 className={`expand-arrow stretch ${isOpen ? "open" : ""}`}>v</h2>
        </div>
    )
}