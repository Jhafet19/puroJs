
export default function Button({ operador, fn }) {
    return (
        <button className="w-10 h-10 flex items-center justify-center font-black text-white text-2xl 
        bg-lime-500 rounded-full hover:outline-none hover:ring-2 hover:ring-offset-2 hover:bg-lime-500 "
            onClick={fn}
        >
            {operador}
        </button>
    )
}
