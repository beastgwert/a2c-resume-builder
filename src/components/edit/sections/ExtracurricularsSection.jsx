import ExtracurricularsForm from "../forms/ExtracurricularsForm";
import FormDisplay from "../forms/FormDisplay";
import AddFormButton from "../forms/AddFormButton";
import SectionHeader from "./SectionHeader";
import '../../../styles/Section.css'

export default function ExtracurricularsSection({extracurriculars, onChange, onCollapsedChange, onSave, onRemove, onCancel, onAdd, onUp, onDown, setOpen, isOpen, changeExtracurricularDescription}){
    return (
        <div className="extracurriculars-section content-box">
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Extracurriculars"
                sectionName="Extracurriculars"
                iconName="fas fa-church"
                isOptional="false"
            />
            <div className={`section-content ${isOpen ? 'open' : ''}`}>
                <FormDisplay 
                forms = {extracurriculars}
                FormComponent = {ExtracurricularsForm}
                onCollapsedChange = {onCollapsedChange}
                section = 'extracurriculars'
                onChange = {onChange}
                onSave={onSave}
                onRemove={onRemove}
                onCancel={onCancel}
                onUp={onUp}
                onDown={onDown}
                changeExtracurricularDescription={changeExtracurricularDescription}
                />
            
                <AddFormButton 
                section = 'extracurriculars'
                buttonContent = "+"
                onClick = {onAdd}
                isEditing = {extracurriculars.isEditing}
                />
            </div>
        </div>
    );
}