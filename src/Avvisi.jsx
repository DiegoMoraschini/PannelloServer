export function Avvisi({ elenco }) {
    return (
        <section className={elenco.length === 0 ? "avvisi avvisi-vuoto" : "avvisi"}>
 
            <h2>Avvisi ({elenco.length})</h2>
 
            <p>
                {elenco.length > 0
                    ? elenco.join(" · ")
                    : "Nessun avviso"}
            </p>
 
        </section>
    );
}