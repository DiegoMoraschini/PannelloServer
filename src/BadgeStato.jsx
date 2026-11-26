export function BadgeStato({ stato }) {
    const testi = {
        ok: "OK",
        attenzione: "Attenzione",
        critico: "Critico",
        offline: "Offline"
    };
 
    return (
        <span className={`badge badge-${stato}`}>
            {testi[stato]}
        </span>
    );
}
 
export default BadgeStato;