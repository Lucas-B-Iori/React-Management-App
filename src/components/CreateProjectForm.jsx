import { useRef } from 'react'
import CustomInput from './CustomInput'

export default function CreateProjectForm({ onCancel, onSave }) {
    const title = useRef()
    const description = useRef()
    const date = useRef()

    return (
        <form className="mt-4 text-left">
            <menu className="flex items-center justify-end gap-4">
                <button 
                    type="button" 
                    className="text-stone-800 hover:text-stone-950" 
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button 
                    type="submit" 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={() => onSave(title.current.value, description.current.value, date.current.value)}
                >
                    Salvar
                </button>
            </menu>
            <div className="flex items-center gap-4 flex-col">
                <CustomInput ref={title} type='text' tag="input" text="Título"/>
                <CustomInput ref={description} type='text' tag="textarea" text="Descrição"/>
                <CustomInput ref={date} type='date' tag="input" text="Prazo de entrega"/>
            </div>
        </form>
    )
}