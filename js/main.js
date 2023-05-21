const METARS = new Map();
const STATUS = new Map();
const VIEW = new View();

function atualizar() {
  fetch(
    `https://api-redemet.decea.mil.br/mensagens/metar/${DADOS.getAllIcao().join(
      ","
    )}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`
  )
    .then((res) => res.json())
    .then((data) => data.data.data)
    .then((data_array) =>
      data_array.forEach((metar) =>
        METARS.set(metar.id_localidade, new Metar(metar.mens))
      )
    )
    .then(() => {
      DADOS.getAllIcao().forEach((icao) => {
        let status = new Status(icao);
        status.setMeteorologia(METARS.get(icao));
        status.setCondicao();
        STATUS.set(icao, status);
      });
      console.log("Atualizado em: " + new Date().toGMTString());
      exibir();
    });
}

function gerarModal(icao) {
  VIEW.gerarModal(STATUS.get(icao));
}

function exibir() {
  document.getElementById("painel").innerHTML = "";
  DADOS.getAllIcao().forEach((icao) => {
    if (VIEW.PAINEL.get(icao)) {
      document
        .getElementById("painel")
        .appendChild(VIEW.gerarCard(STATUS.get(icao)));
      document.getElementById(icao).addEventListener("click", () => {
        gerarModal(icao);
      });
    }
  });
}

function toogle(icao) {
  VIEW.PAINEL.set(icao, !VIEW.PAINEL.get(icao));
  document.getElementById("btn_" + icao).classList.toggle("btn_inativo");
  exibir();
}

const fecharModal = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("modal").style.display = "none";
};

(() => {
  DADOS.getAllIcao().forEach((icao) => {
    METARS.set(icao, undefined);
    STATUS.set(icao, undefined);
    let btn_toogle = document.createElement("div");
    btn_toogle.id = `btn_${icao}`;
    btn_toogle.classList.add("btn_toogle");
    btn_toogle.textContent = icao;
    btn_toogle.setAttribute("onClick", `toogle("${icao}")`);
    document.getElementById("seletor").appendChild(btn_toogle);
    document
      .getElementById("botao_fechar")
      .addEventListener("click", fecharModal);
  });
  document
    .getElementById("copy_icon_metar")
    .addEventListener("click", (evt) => {
      navigator.clipboard.writeText(
        document.getElementById("metar_raw").textContent
      );
    });
  document.getElementById("copy_icon_taf").addEventListener("click", (evt) => {
    navigator.clipboard.writeText(
      document.getElementById("taf_raw").textContent
    );
  });
  atualizar();
  setInterval(atualizar, 60000);
})();
