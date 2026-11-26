const SOGLIE = {attenzione : 70, critico: 90};
export const statoServer = (server) => {
  if (!server.online) return "offline";
  if (server.cpu >= SOGLIE.critico) return "critico";
  if (server.cpu >= SOGLIE.attenzione) return "attenzione";
  return "ok";
}
export const contaPerStato = (servers, stato) => {
  return servers.filter(server => statoServer(server) === stato).length;
}

export const cpuMedia = (servers) => {
  const onlineServers = servers.filter(server => server.online && server.cpu !== null);
  if (onlineServers.length === 0) return null;
  const sommaCpu = onlineServers.reduce((somma, server) => somma + server.cpu, 0);
  return sommaCpu / onlineServers.length;
}
export const piuLento = (nomi, latenze) => {
  if (nomi.length === 0 || latenze.length === 0 || nomi.length !== latenze.length) return null;
  let maxLatenza = -Infinity;
  let indiceMax = -1;
  latenze.reduce((a,b = - 1) => a > b ? a : b)
  for (let i = 0; i < nomi.length; i++) {
    if (latenze[i] > maxLatenza) {
      maxLatenza = latenze[i];
      indiceMax = i;
    }
  }
  return { nome: nomi[indiceMax], latenze: maxLatenza };
}
export const trovaServer = (servers, nome) => {
  return servers.find(server => server.nome === nome) || null;
}