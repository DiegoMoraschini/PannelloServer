import BadgeStato from "./BadgeStato";
import { statoServer } from "./calcoli";
 
export function SchedaServer({ server }) {
    const stato = statoServer(server);
   
    return (
        <div className={`scheda scheda-${stato}`}>
            <h3>
                {server.nome} <BadgeStato stato={stato} />
            </h3>
            <p className="ruolo">
                {server.ruolo} · {server.sede} · {server.ip}
            </p>
            <p>
                CPU: {stato === "offline" ? "—" : `${server.cpu}%`}
            </p>
            <p>
                Latenza: {stato === "offline" ? "—" : `${server.latenza} ms`}
            </p>
            <p>
                Servizi: {server.servizi.length > 0
                    ? server.servizi.join(", ")
                    : "nessuno"}
            </p>
            <p>
                Manutenzione: {server.manutenzione
                    ? server.manutenzione.data + ", " + server.manutenzione.motivo
                    : "nessuna in programma"}
            </p>
        </div>
    );
}
 
export default SchedaServer;