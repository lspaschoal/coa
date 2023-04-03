//METAR SBRB 182100Z 21008KT 2000 R06/////N R24/////N -TSRA BKN005 SCT030 FEW030CB 23/23 Q1009=
//METAR SBRJ 182100Z 19011KT 9999 FEW015 FEW030TCU SCT050 29/24 Q1010=
//SPECI SBCF 190029Z 02004KT 1500 R16R/P2000 R34L/P2000 BR FEW045 SCT080 21/20 Q1018=
//SPECI SBDB 191749Z AUTO 17004KT 110V220 CAVOK 26/20 Q1014=
//METAR SBLS 191700Z VRB05KT 9999 SCT035 28/20 Q1018=
//METAR SBBH 191700Z 10008KT 9999 BKN040 FEW045TCU 27/17 Q1017=
//METAR SBFZ 241400Z 35003KT 1000 R13/1000 +TSRA BR BKN007 BKN017 FEW030CB 24/24 Q1014=

//https://api-redemet.decea.mil.br/mensagens/metar/SBGL,SBBR?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi
const METARS = new Map();
const PAINEL = new Map();
const STATUS = new Map();

(() => {
    DADOS.getAllIcao().forEach(icao => {
        METARS.set(icao, undefined);
        PAINEL.set(icao, true);
        STATUS.set(icao, undefined);
    });
})()

function insereMetar(mensagem) {
    let metar = new Metar(mensagem);
    METARS.set(metar._icao, metar);
}

function atualizaMetar() {
    DADOS.getAllIcao().forEach(icao => {
        METARS.set(icao, undefined);
    });
    fetch(`https://api-redemet.decea.mil.br/mensagens/metar/${DADOS.getAllIcao().join(',')}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`)
        .then(res => res.json())
        .then(data => data.data.data)
        .then(data_array => data_array.forEach(metar => METARS.set(metar.id_localidade, new Metar(metar.mens))));
}

function geraCard(status) {
    let card = document.createElement('div')
    card.addEventListener('click',()=>{
        let mensagem = '';
        if(METARS.get(status.icao) !== undefined){
            mensagem = METARS.get(status.icao).getRawMessage() + '\n';
        }else{
            mensagem = 'METAR INDISPONÍVEL\n';
        }
        mensagem += `=== MÍNIMOS ===\n`;
        DADOS.getPistas(status.icao).forEach(pista => {
            mensagem += ` RWY: ${pista}\n`;
            mensagem += ` -> DEP:\n`;
            mensagem += `    -DIURNO: ${DADOS.getMinimosDep(status.icao,pista).diurno}m\n`
            mensagem += `    -NOTURNO: ${DADOS.getMinimosDep(status.icao,pista).noturno}m\n`
            mensagem += ` -> ARR:\n`;
            let cabeceiras = pista.split('/');
            let minimo = 5000;
            if(DADOS.getProcedimentos(status.icao,cabeceiras[0]) !== null){
                Object.values(DADOS.getProcedimentos(status.icao,cabeceiras[0])).forEach(procedimento => {
                    if(procedimento.minVisibilidade < minimo) minimo = procedimento.minVisibilidade;
                })
            }
            mensagem += `    -THR ${cabeceiras[0]}: ${minimo}m\n`;
            minimo = 5000;
            if(DADOS.getProcedimentos(status.icao,cabeceiras[1]) !== null){
                Object.values(DADOS.getProcedimentos(status.icao,cabeceiras[0])).forEach(procedimento => {
                    if(procedimento.minVisibilidade < minimo) minimo = procedimento.minVisibilidade;
                })
            }
            mensagem += `    -THR ${cabeceiras[1]}: ${minimo}m\n`;

        })
        
        alert(mensagem);
    })
    card.classList.add('card');
    switch (status.condicao) {
        case "VMC":
            card.classList.add('VMC');
            break;
        case "IMC":
            card.classList.add('IMC');
            break;
        case "QGO":
        case "QGO ARR":
        case "QGO ARR/DEP":
        case "QGO DEP":
            card.classList.add('QGO');
            break;
        default:
            card.classList.add('INDISPONIVEL');
    }
    // linha superior

    // ICAO(IATA)
    let div_icao = document.createElement('div')
    div_icao.classList.add('icao');
    div_icao.textContent = status.icao + ' (' + status.iata + ')';
    let span_condicao = document.createElement(`span`);
    span_condicao.textContent = status.condicao ?? 'METAR INDISPONÍVEL';
    span_condicao.classList.add('span_condicao');
    div_icao.appendChild(span_condicao);
    card.appendChild(div_icao);
    // Visibilidade
    let div_visibilidade = document.createElement('div');
    div_visibilidade.classList.add('div-vis-teto')
    let span_icone_visibilidade = document.createElement('span');
    let icone_visibilidade = document.createElement('img');
    icone_visibilidade.setAttribute('src','./img/visibilidade.png');
    icone_visibilidade.classList.add('vis-teto-ico');
    span_icone_visibilidade.appendChild(icone_visibilidade);
    div_visibilidade.appendChild(span_icone_visibilidade);
    let span_valor_visibilidade = document.createElement('span');
    span_valor_visibilidade.textContent = status.visibilidade || "N/A";
    span_valor_visibilidade.classList.add('vis-teto-valor');
    div_visibilidade.appendChild(span_valor_visibilidade);
    // ícone meteorologia
    if(status.meteorologia.indexOf("TSRA") > -1 || status.meteorologia.indexOf("-TSRA") > -1 || status.meteorologia.indexOf("+TSRA") > -1){
        let ico_chuva = document.createElement('img')
        ico_chuva.setAttribute('src','./img/trovoada-com-chuva.png');
        ico_chuva.classList.add('ico-meteorologia');
        div_visibilidade.appendChild(ico_chuva);
    }else if(status.meteorologia.indexOf("RA") > -1 || status.meteorologia.indexOf("-RA") > -1 || status.meteorologia.indexOf("+RA") > -1){
        let ico_chuva = document.createElement('img')
        ico_chuva.setAttribute('src','./img/chuva.png');
        ico_chuva.classList.add('ico-meteorologia');
        div_visibilidade.appendChild(ico_chuva);
    }
    card.appendChild(div_visibilidade);
    // Teto
    let div_teto = document.createElement('div');
    div_teto.classList.add('div-vis-teto')
    let span_icone_teto = document.createElement('span');
    let icone_teto = document.createElement('img');
    icone_teto.setAttribute('src','./img/nuvem.png');
    icone_teto.classList.add('vis-teto-ico');
    span_icone_teto.appendChild(icone_teto);
    div_teto.appendChild(span_icone_teto);
    let span_valor_teto = document.createElement('span');
    span_valor_teto.textContent = status.teto || "N/A";
    span_valor_teto.classList.add('vis-teto-valor');
    div_teto.appendChild(span_valor_teto);
    card.appendChild(div_teto);
    document.getElementById('painel').appendChild(card);
    // Vento
    let div_vento = document.createElement('div');
    div_vento.classList.add('div-vis-teto')
    let span_icone_vento = document.createElement('span');
    let icone_vento = document.createElement('img');
    icone_vento.setAttribute('src','./img/vento.png');
    icone_vento.classList.add('vis-teto-ico');
    span_icone_vento.appendChild(icone_vento);
    div_vento.appendChild(span_icone_vento);
    let span_valor_vento = document.createElement('span');
    if(METARS.get(status.icao)){ 
        let vento = METARS.get(status.icao).getWind();
        span_valor_vento.textContent =  `${(vento.variable) ? 'VRB' :  vento.direction}° / ${vento.speed}kt`;
        if(vento.gusts){
            span_valor_vento.textContent += ` G: ${vento.gustSpeed}`;  
        }
    }else{
        span_valor_vento.textContent =  "N/A";
    };
    
    span_valor_vento.classList.add('vis-teto-valor');
    div_vento.appendChild(span_valor_vento);
    card.appendChild(div_vento);
}

async function setSTATUS() {
    await fetch(`https://api-redemet.decea.mil.br/mensagens/metar/${DADOS.getAllIcao().join(',')}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`)
        .then(res => res.json())
        .then(data => data.data.data)
        .then(data_array => data_array.forEach(metar => METARS.set(metar.id_localidade, new Metar(metar.mens))));
    DADOS.getAllIcao().forEach(icao => {
        let status = new Status(icao);
        status.setMeteorologia(METARS.get(icao));
        status.setCondicao();
        STATUS.push(status);
    })
}

const atualizar = async function() {
    document.getElementById('painel').innerHTML = "";
    let datahora = new Date();
    console.log('atualizado em: ' + datahora.toLocaleDateString() + " - " + datahora.toLocaleTimeString())
    await fetch(`https://api-redemet.decea.mil.br/mensagens/metar/${DADOS.getAllIcao().join(',')}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`)
        .then(res => res.json())
        .then(data => data.data.data)
        .then(data_array => data_array.forEach(metar => METARS.set(metar.id_localidade, new Metar(metar.mens))));
    DADOS.getAllIcao().forEach(icao => {
        let status = new Status(icao);
        status.setMeteorologia(METARS.get(icao));
        status.setCondicao();
        STATUS.push(status);
        if(PAINEL.get(icao)) geraCard(status);
    })    
}
//atualizar();
//setInterval(atualizar,5*60*1000);
//ADs com cabeceira sem procedimento: 'SBBE', 'SBBH', 'SBBI', 'SBCH', 'SBJR', 'SBPS', 'SBSL', 'SBSN', 'SBSV', 'SBUG'
let metar_teste = new Metar(`METAR SBIL 241400Z 35003KT 5000 1500NE +TSRA BR BKN007 BKN017 FEW030CB 24/24 Q1014=`)
let status_teste = new Status(`SBIL`);
status_teste.setMeteorologia(metar_teste);
status_teste.setCondicao();
console.log(status_teste)
geraCard(status_teste);