import { useState } from 'react';
import './styles/App.css';
import PersonalSection from './components/edit/sections/PersonalSection';
import AwardsSection from './components/edit/sections/AwardsSection';
import ExtracurricularsSection from './components/edit/sections/ExtracurricularsSection';
import Resume from './components/display/Resume';
import PdfDownloadButton from './components/edit/forms/PdfDownloadButton';
import ClearButton from './components/edit/forms/ClearButton';
import exampleData from './example-data';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

function App() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);
  const [backupContent, setBackupContent] = useState(null);
  console.log("new render", sections);

  function changePersonalInfo(e){
    const key = e.target.dataset.key;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function changeSectionInfo(e){
    console.log("got to change section: ", e.target.value);
    // updates section form edit
    const tempData = {...sections};
    const curSection = e.target.dataset.section;
    const key = e.target.dataset.key;
    const curIndex = tempData[curSection].isEditing;

    tempData[curSection].content[curIndex][key] = e.target.value;
    setSections(tempData);
  }

  function changeForm(e){
    console.log("opening changeForm");
    // opens editing form
    const index = e.target.dataset.index;

    const tempData = {...sections};
    const curSection = e.target.dataset.section;

    setBackupContent({...tempData[curSection].content[index]});
    tempData[curSection].isEditing = index;
    
    setSections(tempData);
  }

  function onSave(e){
    // toggles editing
    const tempData = {...sections};
    const curSection = e.target.dataset.section;

    tempData[curSection].isEditing = -1;
    setSections(tempData);
  }

  function onCancel(e){
    // reverts to initial info
    const tempData = {...sections};
    const curSection = e.target.dataset.section;
    const curIndex = tempData[curSection].isEditing;

    console.log("got to cancel", curIndex, backupContent);
    tempData[curSection].content[curIndex] = backupContent;
    tempData[curSection].isEditing = -1;
    setSections(tempData);
  }

  function onRemove(e){
    // removes form
    e.stopPropagation();
    const tempData = {...sections};
    const curSection = e.target.dataset.section;
    const curIndex = e.target.dataset.index;

    tempData[curSection].content.splice(curIndex, 1);

    setSections(tempData);
  }

  function onAdd(e){
    // adds form 
    const tempData = {...sections};
    const curSection = e.target.dataset.section;

    tempData[curSection].content.push(curSection == "awards" ? createBlankAward() : createBlankExtracurricular());
    tempData[curSection].isEditing = tempData[curSection].content.length-1;
    setBackupContent({...tempData[curSection].content.slice(-1)});
    setSections(tempData);
  }

  function createBlankAward(){
    return {
      title: "",
      date: ""
    }
  }

  function createBlankExtracurricular(){
    return {
      title: '',
      hoursPerWeek: '',
      gradeLevels: '',
      description: ''
    }
  }

  function onUp(e){
    e.stopPropagation();
    const collapsedForm = e.target.closest('.collapsed-form');

    const tempData = {...sections};
    const curSection = collapsedForm.dataset.section;
    const curIndex = parseInt(collapsedForm.dataset.index);

    if(curIndex == 0) return;

    [tempData[curSection].content[curIndex-1], tempData[curSection].content[curIndex]] = [tempData[curSection].content[curIndex], tempData[curSection].content[curIndex-1]];
    setSections(tempData);
  }

  function onDown(e){
    console.log(sections)
    e.stopPropagation();
    
    const collapsedForm = e.target.closest('.collapsed-form');

    const tempData = {...sections};
    const curSection = collapsedForm.dataset.section;
    const curIndex = parseInt(collapsedForm.dataset.index);

    if(curIndex == tempData[curSection].content.length-1) return;
    console.log("first: ", tempData[curSection].content);
    console.log("brawl stars: ", tempData[curSection].content[curIndex], tempData[curSection].content[curIndex+1])
    console.log("cur index: ", curIndex);

    [tempData[curSection].content[curIndex], tempData[curSection].content[curIndex+1]] = [tempData[curSection].content[curIndex+1], tempData[curSection].content[curIndex]];
    setSections(tempData);
  }

  function onClear(){
    const tempData = {...sections};
    const tempPersonal = {...personalInfo}

    //clear sections
    tempData.personalInfo = {};
    tempData.awards.content = [];
    tempData.awards.isEditing = -1;
    tempData.extracurriculars.content = [];
    tempData.extracurriculars.isEditing = -1;
    //clear personal
    Object.keys(tempPersonal).forEach(k => tempPersonal[k] = "");
  
    setSections(tempData);
    setPersonalInfo(tempPersonal);
  }

  function onDownload(){
    const input = document.getElementById('pdf-content'); 

    // Specify the id of the element you want to convert to PDF
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      // const pdfWidth = pdf.internal.pageSize.getWidth();
      // const pdfHeight = pdf.internal.pageSize.getHeight();
      // pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('college-resume.pdf'); 
      // Specify the name of the downloaded PDF file
    });
  }

  
  return (
    <>
      <div className='edit-side'>
        <PersonalSection 
          onChange = {changePersonalInfo}
          name = {personalInfo.name}
          email = {personalInfo.email}
          phoneNumber = {personalInfo.phoneNumber}
          address = {personalInfo.address}
          schoolName = {personalInfo.schoolName}
          schoolStart = {personalInfo.schoolStart}
          schoolEnd = {personalInfo.schoolEnd}
        />
        <AwardsSection 
          awards = {sections.awards}
          onChange = {changeSectionInfo}
          onCollapsedChange = {changeForm}
          onSave = {onSave}
          onCancel = {onCancel}
          onRemove = {onRemove}
          onAdd = {onAdd}
          onUp = {onUp}
          onDown = {onDown}
        />
        <ExtracurricularsSection
          extracurriculars = {sections.extracurriculars}
          onChange = {changeSectionInfo}
          onCollapsedChange = {changeForm}
          onSave = {onSave}
          onCancel = {onCancel}
          onRemove = {onRemove}
          onAdd = {onAdd}
          onUp = {onUp}
          onDown = {onDown}
        />
        <div className='utility'>
          <ClearButton
            onClear = {onClear}
          />
          <PdfDownloadButton
            onDownload = {onDownload}
          />
        </div>
      </div>
      
      <Resume 
        personal = {personalInfo}
        awards = {sections.awards.content}
        extracurriculars = {sections.extracurriculars.content}
      />
      
    </>
  );
}

export default App;