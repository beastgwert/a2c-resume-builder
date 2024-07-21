import CollapsedForm from "./CollapsedForm";
import '../../../styles/FormDisplay.css';

export default function FormDisplay({forms, FormComponent, onCollapsedChange, section, onChange, onRemove, onSave, onCancel, onUp, onDown, changeExtracurricularDescription}){
    return (
        <div className="form-container">
            {
                forms.isEditing !== -1 ? (
                    section != "extracurriculars" ? 
                    <FormComponent 
                    onChange = {onChange}
                    forms = {forms}
                    onSave = {onSave}
                    onCancel = {onCancel}
                    />
                    :
                    <FormComponent 
                    onChange = {onChange}
                    forms = {forms}
                    onSave = {onSave}
                    onCancel = {onCancel}
                    changeExtracurricularDescription = {changeExtracurricularDescription}
                    />
                )
                :
                (
                    forms.content.map((form, curIndex) => 
                        <CollapsedForm 
                        title = {form.title}
                        index = {curIndex}
                        onChange = {onCollapsedChange}
                        onRemove = {onRemove}
                        section = {section}
                        onUp={onUp}
                        onDown={onDown}
                        />
                    )
                )
            }
        </div>
    )
}