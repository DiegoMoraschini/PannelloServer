const SOGLIE = {attenzione: 70, critico: 90};

export const statoserver = (server) => {
    if (!server.online) return "offline";
    if (server.cpu >= SOGLIE.critico) return "critico";
    if (server.cpu >= SOGLIE.attenzione) return "attenzione"
    return "ok";
}
export const contaPerStato = (servers, stato) => {
    return servers.filter(server => statoserver(server) == stato);
}
