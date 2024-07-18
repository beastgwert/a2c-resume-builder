
export default function MoveForms({onUp, onDown}){
    return (
        <div className="move-forms">
            <div className="move-up" onClick={onUp}> v </div>
            <div className="move-down" onClick={onDown}> v </div>
        </div>
    )
}