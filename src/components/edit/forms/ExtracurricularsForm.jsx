import Buttons from "./Buttons"

export default function ExtracurricularsForm({forms, onSave, onRemove, onChange}){
    return (
        <>
            <form>
                {/* {data-key is object key} */}
                <div className="input-group">
                    <label htmlFor="extracurricular">Extracurricular </label>
                    <input type="text" id="extracurricular" data-key="title" data-section="extracurriculars" placeholder="Enter extracurricular title" value={forms.content[forms.isEditing].title} onChange={onChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="hours">Hours Per Week </label>
                    <input type="text" id="hours" data-key="hoursPerWeek" data-section="extracurriculars" placeholder="Enter hours per week" value={forms.content[forms.isEditing].hoursPerWeek} onChange={onChange}/>
                </div>

               <div className="input-group">
                    <label htmlFor="grades">Grade Levels </label>
                    <input type="text" id="grades" data-key="gradeLevels" data-section="extracurriculars" placeholder="Enter grade levels" value={forms.content[forms.isEditing].gradeLevels} onChange={onChange}/>
               </div>

               <div className="input-group">
                    <label htmlFor="description">Description </label>
                    <textarea id="description" data-key="description" data-section="extracurriculars" placeholder="Enter description" value={forms.content[forms.isEditing].description} onChange={onChange}/>
               </div>
                <Buttons 
                section = "extracurriculars"
                save = {onSave}
                remove = {onRemove}
                />
            </form>
        </>
    )
}