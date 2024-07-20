import {useEffect, useState} from "react";
import '../../../styles/FontSection.css'

export default function FontSection({}){
    const [font, setFont] = useState("serif");

    useEffect(() => {
        console.log("got here");
        document.body.style.setProperty('--resume-font',
            font === "sans" ? 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            :
            font === 'serif' ? 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
            :
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
        )
    }, [font]);

    return (
        <div className="template-section content-box customize-section">
            <h2> Font </h2>
            <div className="font-content flex gap-4 h-20">
                <div className={`font-serif flex flex-col justify-between cursor-pointer ${font === 'serif' ? 'bg-gray-300' : ''}`} onClick={() => {setFont('serif')}}>
                    <p className="font-demo1 bg-inherit">Aa</p>
                    <p className="flex justify-center bg-inherit">Serif</p>
                </div>
                <div className={`font-sans flex flex-col justify-between cursor-pointer ${font === 'sans' ? 'bg-gray-300' : ''}`} onClick={() => {setFont('sans')}}>
                    <p className="font-demo2 bg-inherit">Aa</p>
                    <p className="flex justify-center bg-inherit">Sans</p>
                </div>
                <div className={`font-mono flex flex-col justify-between cursor-pointer ${font === 'mono' ? 'bg-gray-300' : ''}`} onClick={() => {setFont("mono")}}>
                    <p className="font-demo3 bg-inherit">Aa</p>
                    <p className="flex justify-center bg-inherit">Mono</p>
                </div>
            </div>
        </div>
        
    )
}