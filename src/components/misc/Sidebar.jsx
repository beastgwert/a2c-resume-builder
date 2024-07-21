import '../../styles/Sidebar.css'

export default function Sidebar({onChange, isContent}){
    return (
        <div className="sidebar content-box">
           <button onClick={onChange} className={`sidebar-container ${isContent ? "bg-gray-300" : ""}`}  data-key="content"> 
                <i className='fa-regular fa-folder'></i>
                <p>Content</p>
            </button>
            <button onClick={onChange} className={`sidebar-container ${!isContent ? "bg-gray-300" : ""}`} data-key="customize">
                <i className='fa-regular fa-pen-to-square'></i>
                <p>Customize</p>
            </button>
        </div>
    )
}