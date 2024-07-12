import Buttons from "./Buttons"

export default function AwardsForm({forms, onSave, onCancel, onChange}){
    const date = new Date();
    const curDate = date.getFullYear() + '-' + date.getMonth();
    const minDate = (parseInt(curDate.slice(0, 4)) - 4) + '-12';
    const maxDate = (parseInt(curDate.slice(0, 4)) + 4) + '-12';
    
    console.log("awardsForm: ", curDate);
    return (
        <>
            <form>
                <div className="input-group">
                    <label htmlFor="award">Award </label>
                    <input required type="text" id="award" data-key="title" data-section="awards" placeholder="Enter award title" value={forms.content[forms.isEditing].title} onChange={onChange}/>
                </div>

                <div className="input-group">
                    <label htmlFor="awardDate">Date </label>
                    <input type="month" id="awardDate" data-key="date" data-section="awards" placeholder="Enter date" min={minDate} max={maxDate} value={forms.content[forms.isEditing].date} onChange={onChange}/>
                </div>

                <Buttons 
                section = "awards"
                save = {onSave}
                cancel = {onCancel}
                />
            </form>
        </>
    )
}