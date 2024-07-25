import { useState, useEffect } from 'react';
import './styles/App.css';
import PersonalSection from './components/edit/sections/PersonalSection';
import EducationSection from './components/edit/sections/EducationSection';
import AwardsSection from './components/edit/sections/AwardsSection';
import ExtracurricularsSection from './components/edit/sections/ExtracurricularsSection';
import ProfileSection from './components/edit/sections/ProfileSection';
import Resume from './components/display/Resume';
import Resume2 from './components/display/Resume2';
import PdfDownloadButton from './components/edit/forms/PdfDownloadButton';
import ClearButton from './components/edit/forms/ClearButton';
import LoadExampleButton from './components/edit/forms/LoadExampleButton';
import exampleData from './example-data';
import Sidebar from './components/misc/Sidebar';
import Customize from './components/misc/Customize'
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";

function App() {
  const [personalInfo, setPersonalInfo] = useState(localStorage.getItem("hasVisited") === "true" ? JSON.parse(localStorage.getItem("personalInfo")) : {...exampleData.personalInfo});
  const [sections, setSections] = useState(localStorage.getItem("hasVisited") === "true" ? JSON.parse(localStorage.getItem("sections")) : {...exampleData.sections});
  const [backupContent, setBackupContent] = useState(null);
  const [sectionOpen, setSectionOpen] = useState("Personal");
  const [isContent, setIsContent] = useState(true);
  const [resumeIndex, setResumeIndex] = useState(0);

   // persist user input
   useEffect(() => {
    localStorage.setItem("sections", JSON.stringify(sections));
    localStorage.setItem("personalInfo", JSON.stringify(personalInfo));
    localStorage.setItem("hasVisited", "true");
  }, [sections, personalInfo]);

  const printRef = useRef();
  const handlePrint = useReactToPrint({
      content: () => printRef.current,
  });

  function onResumeChange(e){
    const key = parseInt(e.target.closest('.resume-button-container').dataset.key);
    setResumeIndex(key);
  }

  function changeEditDisplay(e){
    const key = e.target.closest('.sidebar-container').dataset.key;
    setIsContent(key == "content");
  }

  function changePersonalInfo(e){
    const key = e.target.dataset.key;
    setPersonalInfo({...personalInfo, [key]: e.target.value});
  }

  function changeEducationInfo(e){
    const tempData = {...sections};
    const key = e.target.dataset.key;
    tempData.education[key] = e.target.value;

    setSections(tempData);
  }

  function changeExtracurricularDescription(htmlContent){
    console.log("got to extracurricular description");
    const tempData = {...sections};
    tempData.extracurriculars.content[tempData.extracurriculars.isEditing].description = htmlContent;
    
    console.log("last dance: ", tempData);
    setSections(tempData);

    const resumeHeight = document.querySelector('.resume-content').offsetHeight;
    console.log("resumeHeight: ", resumeHeight);
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
    
    const resumeHeight = document.querySelector('.resume-content').offsetHeight;
    console.log("resumeHeight: ", resumeHeight);
  }

  function changeProfileInfo(e){
    const tempData = {...sections};
    tempData.profile = e.target.value;

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
    tempData.profile = "";
    Object.keys(tempData.education).forEach(k => tempData.education[k] = "");
    //clear personal
    Object.keys(tempPersonal).forEach(k => tempPersonal[k] = "");
  
    setSections(tempData);
    setPersonalInfo(tempPersonal);
  }

  function onLoadExample(){
    setPersonalInfo({...exampleData.personalInfo});
    setSections(JSON.parse(JSON.stringify(exampleData.sections)));
  }

  function setOpen(sectionName){
    setSectionOpen(sectionName);
  }  
  
  return (
    <>
      <Sidebar 
      onChange = {changeEditDisplay}
      isContent = {isContent}
      />
      <div className='edit-side'>
        {isContent ? 
        <>
          <PersonalSection 
            onChange = {changePersonalInfo}
            name = {personalInfo.name}
            email = {personalInfo.email}
            phoneNumber = {personalInfo.phoneNumber}
            address = {personalInfo.address}
            setOpen = {setOpen}
            isOpen = {sectionOpen === "Personal"}
          />
          <EducationSection
            onChange = {changeEducationInfo}
            education = {sections.education}
            setOpen = {setOpen}
            isOpen = {sectionOpen === "Education"}
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
            setOpen = {setOpen}
            isOpen = {sectionOpen === "Awards"}
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
            setOpen = {setOpen}
            isOpen = {sectionOpen === "Extracurriculars"}
            changeExtracurricularDescription = {changeExtracurricularDescription}
          />
          <ProfileSection
            profile = {sections.profile}
            onChange = {changeProfileInfo}
            setOpen = {setOpen}
            isOpen = {sectionOpen === "Profile"}
          />
          <p className='disclaimer bg-transparent mb-3'>
            *May not appear in certain templates
          </p>
        </>
        :
        <Customize 
        onResumeChange={onResumeChange}
        resumeIndex={resumeIndex}
        />
        }
        
        <div className='utility'>
          <ClearButton
            onClear = {onClear}
          />
          <LoadExampleButton
            onLoadExample = {onLoadExample}
          />
          <PdfDownloadButton
            onDownload = {handlePrint}
          />

        </div>
      </div>
      
     {resumeIndex == 0 ? 
      <Resume 
        personal = {personalInfo}
        education = {sections.education}
        awards = {sections.awards.content}
        extracurriculars = {sections.extracurriculars.content}
        ref = {printRef}
      />
      :
      resumeIndex == 1 ?
      <Resume2
        personal = {personalInfo}
        education = {sections.education}
        awards = {sections.awards.content}
        extracurriculars = {sections.extracurriculars.content}
        profile = {sections.profile}
        ref = {printRef}
      />
      :
      ""
     }
    </>
  );
}

export default App;