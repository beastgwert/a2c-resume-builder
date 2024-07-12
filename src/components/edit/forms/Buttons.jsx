import '../../../styles/Buttons.css';

export default function Buttons({save, cancel, section}){
    return (
        <div className='buttons'>
            <button type="submit" className="save" onClick={save} data-section={section}> Save </button>
            <button type="button" className="cancel" onClick={cancel} data-section={section}> Cancel </button>
        </div>
    )

}