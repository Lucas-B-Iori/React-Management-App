import { forwardRef } from "react"

const CustomInput = forwardRef(function CustomInput({ type, text, tag }, ref) {
    return (
        <div className="w-[35rem] mt-16">
            <label className="text-sm font-bold uppercase text-stone-500">{text}</label>
            {tag === 'input' ? 
                <input 
                    ref={ref} 
                    type={type} 
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                    required
                /> :
                <textarea
                    ref={ref} 
                    type={type} 
                    className="w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600" 
                    required
                ></textarea>
            }
        </div>
    )
})

export default CustomInput