import TemplateSection from "../edit/sections/TemplateSection"
import FontSection from "../edit/sections/FontSection"

export default function Customize({onResumeChange, resumeIndex}){
    return (
        <div className="customize">
            <TemplateSection
            onChange={onResumeChange}
            resumeIndex={resumeIndex}
            />
            <FontSection
                
            />
        </div>
    )
}