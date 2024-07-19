import TemplateSection from "./edit/sections/TemplateSection"

export default function Customize({onResumeChange, resumeIndex}){
    return (
        <TemplateSection
        onChange={onResumeChange}
        resumeIndex={resumeIndex}
        />
    )
}