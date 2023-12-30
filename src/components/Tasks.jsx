export default function Tasks({ tasks, onClear, id }) {
    return (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task, index) => (
                <li key={index} className="flex justify-between my-4">
                    <p className="text-stone-800 my-4">{task}</p>
                    <button className="text-stone-700 hover:text-red-500" onClick={() => onClear(id, index)}>Limpar</button>
                </li>
            ))}
        </ul>  
    )
}