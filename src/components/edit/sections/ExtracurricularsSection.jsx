import ExtracurricularsForm from "../forms/ExtracurricularsForm";
import FormDisplay from "../forms/FormDisplay";
import AddFormButton from "../forms/AddFormButton";

export default function ExtracurricularsSection({extracurriculars, onChange, onCollapsedChange, onSave, onRemove, onCancel, onAdd, onUp, onDown}){
    return (
        <div className="extracurriculars-section">
            <h2>Extracurriculars</h2>
            <div className="section-content">
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
            </div>
            <AddFormButton 
            section = 'extracurriculars'
            buttonContent = "+"
            onClick = {onAdd}
            isEditing = {extracurriculars.isEditing}
            />
        </div>
    );
}