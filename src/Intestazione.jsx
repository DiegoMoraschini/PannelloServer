export function Intestazione({nome,aggiornato,online,totale}){
    return (
        <header className="intestazione">
        <h1>{nome}</h1>
        <p>Ultimo aggiornamento: {aggiornato}</p>
        <p>Server online: {online}</p>
        <p>Server totali: {totale}</p>
        </header>
    )
}