import '../../../styles/TemplateSection.css'

export default function TemplateSection({onChange, resumeIndex}){
    return (
        <div className="template-section content-box customize-section">
            <h2> Template </h2>
            <div className="template-content">
                <div className="resume-button-container" data-key="0" onClick={onChange}>
                    <button className={resumeIndex == 0 ? "bg-gray-300 scale-90" : ""}>1</button>
                </div>
                <div className="resume-button-container" data-key="1" onClick={onChange}>
                    <button className={resumeIndex == 1 ? "bg-gray-300 scale-90" : ""}>2</button>
                </div>
            </div>
        </div>
    )
}