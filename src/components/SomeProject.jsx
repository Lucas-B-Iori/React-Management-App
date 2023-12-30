import { useRef } from 'react'

import Tasks from "./Tasks"

export default function SomeProject({ projectSelected, onAddTask, onClear, onDelete }) {
    const { title, description, date, tasks, id } = projectSelected

    const taskInput = useRef()

    function handleAddClick() {
        onAddTask(id, taskInput.current.value)
        taskInput.current.value = ""
    }

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
                    <button className="text-stone-700 hover:text-red-500" onClick={() => onDelete(id)}>Deletar</button>
                </div>
                <p className="mb-4 text-stone-400">{date}</p>
                <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
            </header>
            <h2 className="text-2xl font-bold text-stone-700 mb-4">Tarefas</h2>
            <input ref={taskInput} className="w-64 px-2 py-1 rounded-sm bg-stone-200" />
            <button className="text-stone-700 ml-6 hover:text-stone-950" onClick={handleAddClick}>Adicionar Tarefa</button>
            {tasks.length > 0 
                ? 
                <Tasks tasks={tasks} onClear={onClear} id={id}/>
                :
                <p className="text-stone-800 my-4">Esse projeto ainda nao tem nenhuma tarefa adicionada</p>
            }
        </div>
    )
}