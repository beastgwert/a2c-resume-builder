import FormDisplay from "../forms/FormDisplay";
import AwardsForm from "../forms/AwardsForm";
import AddFormButton from "../forms/AddFormButton";
import SectionHeader from "./SectionHeader";
import '../../../styles/Section.css'

export default function AwardsSection({awards, onChange, onCollapsedChange, onSave, onRemove, onCancel, onAdd, onUp, onDown, setOpen, isOpen}){
    return (
        <div className="awards-section">
            <SectionHeader
                setOpen={setOpen}
                isOpen={isOpen}
                sectionTitle="Awards & Honors"
                sectionName="Awards"
            />
            <div className={`section-content ${isOpen ? "open" : ""}`}>
                <FormDisplay 
                forms = {awards}
                FormComponent = {AwardsForm}
                onCollapsedChange = {onCollapsedChange}
                section = 'awards'
                onChange = {onChange}
                onSave = {onSave}
                onRemove={onRemove}
                onCancel = {onCancel}
                onUp={onUp}
                onDown={onDown}
                />
            
                <AddFormButton 
                section = 'awards'
                buttonContent = "+"
                onClick = {onAdd}
                isEditing = {awards.isEditing}
                />
            </div>
        </div>
    );
}