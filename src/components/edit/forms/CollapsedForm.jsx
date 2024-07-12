import '../../../styles/CollapsedForm.css';
import removeIcon from '../../../images/trash.png';
import MoveForms from './MoveForms'

export default function CollapsedForm({title, index, onChange, onRemove, section, onUp, onDown}){
    return (
        <div className='collapsed-form' onClick={onChange} data-index={index} data-section={section} >
            <p className="form-title"  onClick={onChange} data-index={index} data-section={section}>{title}</p>
            
            <div className='right-collapsed'>
                <MoveForms
                onUp={onUp}
                onDown={onDown}
                />
                
                <img src={removeIcon} className='remove' onClick={onRemove} data-index={index} data-section={section} />
            </div>
        </div>
    )
}