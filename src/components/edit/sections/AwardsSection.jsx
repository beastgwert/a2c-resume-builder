import FormDisplay from "../forms/FormDisplay";
import AwardsForm from "../forms/AwardsForm";
import AddFormButton from "../forms/AddFormButton";

export default function AwardsSection({awards, onChange, onCollapsedChange, onSave, onRemove, onCancel, onAdd, onUp, onDown}){
    return (
        <div className="awards-section">
            <h2>Awards & Honors</h2>
            <div className="section-content">
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
            </div>
            <AddFormButton 
            section = 'awards'
            buttonContent = "+"
            onClick = {onAdd}
            isEditing = {awards.isEditing}
            />
        </div>
    );
}