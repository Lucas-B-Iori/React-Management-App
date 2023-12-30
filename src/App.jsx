import { useState, useRef } from 'react'

import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import CreateProjectForm from './components/CreateProjectForm';
import SomeProject from './components/SomeProject';

function App() {
  const [ mainScreen, setMainScreen ] = useState("noProjects") //noProjects - creatingProject - someProject
  const [ projectList, setProjectList ] = useState([])
  const projectSelected = useRef({})

  function handleCreateClick() {
    setMainScreen("creatingProject")
  }

  function handleCancelClick() {
    setMainScreen("noProjects")
  }

  function handleSaveClick(title, description, date) {
    if (!title || !description || !date) {
      return alert("Os campos devem ser preenchidos")
    }
    handleCancelClick()
    setProjectList(prevProjectList => {
      const updatedProjectList = [...prevProjectList]
      updatedProjectList.push({
        id: updatedProjectList.length * Math.random() * 10 + 1,
        title: title,
        description: description,
        date: date,
        tasks: []
      })
      return updatedProjectList
    })
  }

  function handleSelectProject(project) {
    projectSelected.current = {...project}
    setMainScreen("someProject")
  }

  function handleDeleteProject(id) {
    const index = projectList.findIndex((element) => element.id === id)
    setProjectList(prevProjectList => {
      const updatedProjectList = [...prevProjectList]
      updatedProjectList.splice(index, 1)
      return updatedProjectList
    })
    setMainScreen("noProjects")
  }

  function handleAddTask(id, taskTitle) {
      const index = projectList.findIndex((element) => element.id === id)
      setProjectList(prevProjectList => {
        const updatedProjectList = [...prevProjectList]
        updatedProjectList[index].tasks.push(taskTitle)
        return updatedProjectList
      })
  }

  function handleClearTask(id, indexTask) {
    const index = projectList.findIndex((element) => element.id === id)
    setProjectList(prevProjectList => {
      const updatedProjectList = [...prevProjectList]
      updatedProjectList[index].tasks.splice(indexTask, 1)
      return updatedProjectList
    })
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onClick={handleCreateClick} projectList={projectList} onSelect={handleSelectProject}/>
      {mainScreen === "noProjects" 
        ? <NoProjectSelected onClick={handleCreateClick}/>
        : mainScreen === "creatingProject" 
        ? <CreateProjectForm onCancel={handleCancelClick} onSave={handleSaveClick}/>
        : <SomeProject projectSelected={projectSelected.current} onAddTask={handleAddTask} onClear={handleClearTask} onDelete={handleDeleteProject}/>
      }
      </main>    
  );
}

export default App;
