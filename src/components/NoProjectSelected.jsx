import noProjectImage from '../assets/no-projects.png'

export default function NoProjectSelected({ ...props }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img src={noProjectImage} alt="" className="w-16 h-16 object-contain mx-auto"/>
            <h2 className="text-xl font-bold text-stone-700 my-4">Nenhum Projeto Selecionado</h2>
            <p className="text-stone-600 mb-4">Selecione um projeto ou crie um novo</p>
            <button {...props} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">Criar novo projeto</button>
        </div>
    )
}