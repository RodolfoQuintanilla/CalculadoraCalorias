import { categories } from "../data/categories";

const Form = () => {


    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria: </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                >
                    {categories.map(res => (
                        <option
                            key={res.id}
                            value={res.id}
                        >
                            {res.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad: </label>
                <input type="text" id="activity" className="border border-slate-300 p-2 rounded-lg" placeholder="Ej. Comida, Jugo de Naranja, Ejercicio, pesas, Bicicleta" />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calorias: </label>
                <input type="number" id="calories" className="border border-slate-300 p-2 rounded-lg" placeholder="Calorias ej. 300 o 500" />
            </div>

            <input type="submit" 
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
            value='Guardar Comida o Guardar Ejercicio'
            />
        </form>
    );
};

export default Form;