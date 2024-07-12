
export default function AddFormButton({buttonContent, onClick, section, isEditing}){
    return (
        isEditing !== -1 ? (
            null
        )
        :
        (
        <button onClick={onClick} data-section={section} className="add-form">{buttonContent}</button>
        )
    )
}