type MesasType = {
    id: number,
    codigo: string,
    n_lugares: number,
}



export async function FecthMesas (){
    const response = await fetch('http://localhost:3333/reservas')
    const data = await response.json()
    const mesas : MesasType[] = data.mesas
    console.log(mesas)
    //const reservas : Reservas[] = data.reserva

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-2">
        {mesas.map((table) => {
        return (
          <button
            key={table.id}
            className="p-4 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:bg-indigo-700"
          >
            {table.codigo}
          </button>
        )})}
      </div>
    )
}