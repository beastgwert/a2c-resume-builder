import ExtracurricularsForm from "../forms/ExtracurricularsForm";
import FormDisplay from "../forms/FormDisplay";
import AddFormButton from "../forms/AddFormButton";
import SectionHeader from "./SectionHeader";
import '../../../styles/Section.css'

export default function ExtracurricularsSection({extracurriculars, onChange, onCollapsedChange, onSave, onRemove, onCancel, onAdd, onUp, onDown, setOpen, isOpen}){
    return (
        <div className="extracurriculars-section">
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Extracurriculars"
                sectionName="Extracurriculars"
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