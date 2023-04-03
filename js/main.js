const METARS = new Map();
const STATUS = new Map();
const VIEW = new View();

function atualizar() {
    fetch(`https://api-redemet.decea.mil.br/mensagens/metar/${DADOS.getAllIcao().join(',')}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`)
        .then(res => res.json())
        .then(data => data.data.data)
        .then(data_array => data_array.forEach(metar => METARS.set(metar.id_localidade, new Metar(metar.mens))))
        .then(() =>{
            DADOS.getAllIcao().forEach(icao => {
                let status = new Status(icao);
                status.setMeteorologia(METARS.get(icao));
                status.setCondicao();
                STATUS.set(icao,status);
            })
            exibir();
        });
}


function exibir(){
    document.getElementById('painel').innerHTML = '';
    DADOS.getAllIcao().forEach(icao => {
        if (VIEW.PAINEL.get(icao)) {
            document.getElementById('painel').appendChild(VIEW.gerarCard(STATUS.get(icao)));
        }
    });
}

function toogle(icao){
    VIEW.PAINEL.set(icao,!VIEW.PAINEL.get(icao));
    document.getElementById('btn_'+icao).classList.toggle('btn_inativo');
    exibir()
}

(() => {
    DADOS.getAllIcao().forEach(icao => {
        METARS.set(icao, undefined);
        STATUS.set(icao, undefined);
        let btn_toogle = document.createElement('div');
        btn_toogle.id = `btn_${icao}`
        btn_toogle.classList.add('btn_toogle');
        btn_toogle.textContent = icao;
        btn_toogle.setAttribute('onClick',`toogle("${icao}")`);
        document.getElementById('seletor').appendChild(btn_toogle);
    });
    atualizar()
    setInterval(atualizar,5*60*1000)
})();

// let metar = new Metar('METAR SBBR 192300Z 36009G15KT 330V030 5000 BKN001 TSRA BR SCT035 SCT090 22/17 Q1018=');
// let sts = new Status('SBBR');
// sts.setMeteorologia(metar);
// sts.setCondicao();

// console.log(sts);
// document.getElementById('painel').appendChild(VIEW.gerarCard(sts));