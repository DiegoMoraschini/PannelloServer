
import './App.css'
import { sistema, servers, avvisi } from './dati-blackout.js'
import { statoServer, contaPerStato, cpuMedia, piuLento, trovaServer } from './calcoli.js'
import { Riepilogo } from './Riepilogo.jsx'
import { Intestazione } from './Intestazione.jsx'
import { GrigliaServer } from './GrigliaServer.jsx'
import { ServerInEvidenza } from './ServerInEvidenza.jsx'
import { Avvisi } from './Avvisi.jsx' 

function App() {

  const onlineServers = servers.filter(server => server.online)
  const offlineServers = servers.filter(server => !server.online)

  const mediaCPU = cpuMedia(servers)

  const serverPiuLento = piuLento(
    servers.map(server => server.nome),
    servers.map(server => server.latenza)
  )

  const cercato = "db-01";
  const serverCercato = trovaServer(servers, cercato);

  return (
    <div className="pannello">

      <Intestazione
        nome={sistema.nome}
        aggiornato={sistema.aggiornato}
        online={onlineServers.length}
        totale={servers.length}
      />

      <Riepilogo
        ok={contaPerStato(servers, "ok")}
        attenzione={contaPerStato(servers, "attenzione")}
        critici={contaPerStato(servers, "critico")}
        offline={offlineServers.length}
        mediaCpu={mediaCPU}
        lento={serverPiuLento}
      />

      <main>
        <section className="riepilogo">
          {servers.map(server => (
            <div
              className={`casella ${server.online ? 'online' : 'offline'}`}
              key={server.nome}
            >
              <span className="numero">{server.nome}</span>
              <span className="etichetta">{server.ruolo}</span>
            </div>
          ))}
        </section>

        <GrigliaServer servers={servers} />

        <Avvisi elenco={avvisi} />

        <ServerInEvidenza
          cercato={cercato}
          server={serverCercato}
        />
      </main>

    </div>
  )
}

export default App

/*
- Con sette server, la griglia mostrerà sette schede; la disposizione dipenderà dalle regole di layout CSS.
- Con cinque server, mostrerà cinque schede; l'ultima posizione resterà vuota
solo se il layout la prevede.
*/