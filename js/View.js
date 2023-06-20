const DMG = {};
DMG['SBAR']=23
DMG['SBAT']=19
DMG['SBBE']=20
DMG['SBBG']=15
DMG['SBBH']=23
DMG['SBBI']=20
DMG['SBBR']=22
DMG['SBBV']=16
DMG['SBCA']=18
DMG['SBCB']=23
DMG['SBCF']=23
DMG['SBCG']=18
DMG['SBCH']=18
DMG['SBCT']=20
DMG['SBCX']=18
DMG['SBCY']=18
DMG['SBCZ']=7
DMG['SBEG']=16
DMG['SBFI']=17
DMG['SBFL']=20
DMG['SBFN']=19
DMG['SBFZ']=21
DMG['SBGL']=23
DMG['SBGO']=21
DMG['SBGR']=22
DMG['SBIL']=24
DMG['SBIZ']=21
DMG['SBJE']=21
DMG['SBJP']=21
DMG['SBJR']=23
DMG['SBJU']=22
DMG['SBJV']=20
DMG['SBKG']=22
DMG['SBKP']=22
DMG['SBLO']=20
DMG['SBMG']=19
DMG['SBMO']=22
DMG['SBMQ']=19
DMG['SBNF']=20
DMG['SBPA']=18
DMG['SBPJ']=22
DMG['SBPK']=16
DMG['SBPL']=22
DMG['SBPS']=24
DMG['SBPV']=14
DMG['SBRB']=11
DMG['SBRD']=19
DMG['SBRF']=21
DMG['SBRJ']=23
DMG['SBSG']=21
DMG['SBSI']=19
DMG['SBSL']=21
DMG['SBSN']=19
DMG['SBSP']=22
DMG['SBSV']=23
DMG['SBTC']=24
DMG['SBTE']=21
DMG['SBTF']=14
DMG['SBTT']=10
DMG['SBUG']=13
DMG['SBUL']=22
DMG['SBVC']=23
DMG['SBVT']=24
DMG['SBZM']=23

class View {
  constructor() {
    this.PAINEL = new Map();
    DADOS.getAllIcao().forEach((icao) => {
      this.PAINEL.set(icao, true);
    });
  }

  gerarCard = function (status) {
    let card = document.createElement("div");
    card.classList.add("card");
    card.id = status.icao;
    card.classList.add(this.defineCondicao(status.condicao));
    card.appendChild(
      this.linhaSuperior(status.icao, status.iata, status.condicao)
    );
    card.appendChild(this.linhaHoraMetar(status.icao,status.fonte,status.horario));
    card.appendChild(this.div_visibilidade(status.visibilidade));
    card.appendChild(this.div_meteorologia(status.meteorologia));
    card.appendChild(this.div_teto(status.teto));
    card.appendChild(this.div_och(status.condicao, status.procedimentos));
    card.appendChild(this.div_vento(status.vento));
    card.appendChild(this.div_rajada(status.vento));
    card.appendChild(this.div_cabeceiras(status));
    return card;
  };

  gerarModal = async function (status) {
    if (METARS.get(status.icao) !== undefined) {
      document.getElementById("metar_raw").textContent = METARS.get(
        status.icao
      ).getRawMessage();
    } else {
      document.getElementById("metar_raw").textContent = "METAR indisponível";
    }
    await fetch(
        `https://api-redemet.decea.mil.br/mensagens/taf/${status.icao}?api_key=6vmvTQDP1t8thEEAUkCCj4z4TRjrJLcb561p1SRi`
      )
      .then((resp) => resp.json())
      .then((data) => {
        if (data.data.data[0]) {
          document.getElementById("taf_raw").textContent = data.data.data[0].mens
        } else {
          document.getElementById("taf_raw").textContent = `TAF para ${status.icao} não disponível`;
        }
      })
    let mensagem = "";
    DADOS.getPistas(status.icao).forEach((pista) => {
      mensagem += ` RWY: ${pista}<br>`;
      mensagem += ` DEP:<br>`;
      mensagem += `    -DIURNO: ${DADOS.getMinimosDep(status.icao, pista).diurno
        }m<br>`;
      mensagem += `    -NOTURNO: ${DADOS.getMinimosDep(status.icao, pista).noturno
        }m<br>`;
      mensagem += ` ARR:<br>`;
      let cabeceiras = pista.split("/");
      let minimo = 5000;
      if (DADOS.getProcedimentos(status.icao, cabeceiras[0]) !== null) {
        Object.values(
          DADOS.getProcedimentos(status.icao, cabeceiras[0])
        ).forEach((procedimento) => {
          if (procedimento.minVisibilidade < minimo)
            minimo = procedimento.minVisibilidade;
        });
      }
      mensagem += `    -THR ${cabeceiras[0]}: ${minimo}m<br>`;
      minimo = 5000;
      if (DADOS.getProcedimentos(status.icao, cabeceiras[1]) !== null) {
        Object.values(
          DADOS.getProcedimentos(status.icao, cabeceiras[1])
        ).forEach((procedimento) => {
          if (procedimento.minVisibilidade < minimo)
            minimo = procedimento.minVisibilidade;
        });
      }
      mensagem += `    -THR ${cabeceiras[1]}: ${minimo}m<br>`;
    });
    document.getElementById("dados_minimos").innerHTML = mensagem;
    document.getElementById("modal").style.display = "block";
    document.getElementById("overlay").style.display = "block";
  };

  defineCondicao = function (condicao) {
    switch (condicao) {
      case "VMC":
        return "VMC";
      case "IMC":
        return "IMC";
      case "QGO":
      case "QGO ARR":
      case "QGO ARR/DEP":
      case "QGO DEP":
        return "QGO";
      default:
        return "INDISPONIVEL";
    }
  };

  linhaSuperior = function (icao, iata, condicao) {
    let div_linha = document.createElement("div");
    div_linha.classList.add("linha_superior");
    let div_icao = document.createElement("div");
    div_icao.classList.add("icao");
    div_icao.textContent = icao + " (" + iata + ")";
    div_linha.appendChild(div_icao);
    let div_condicao = document.createElement("div");
    div_condicao.classList.add("condicao");
    div_condicao.textContent = condicao || "SEM METAR";
    div_linha.appendChild(div_condicao);
    return div_linha;
  };

  linhaHoraMetar = function (icao,fonte,horario) {
    let div_linha = document.createElement("div");
    div_linha.classList.add("linha_hora_metar");
    if (METARS.get(icao) !== undefined) {
      div_linha.textContent = `Fonte: ${fonte} - ${horario}UTC`
    } else {
      document.getElementById("metar_raw").textContent = " ";
    }
    return div_linha;
  };

  div_visibilidade = function (visibilidade) {
    let div = document.createElement("div");
    div.classList.add("visibilidade");
    let ico_vis = document.createElement("img");
    ico_vis.classList.add("icone_condicao");
    ico_vis.setAttribute("src", "./img/visibilidade.png");
    div.appendChild(ico_vis);
    let span_valor = document.createElement("span");
    if (visibilidade === undefined) {
      span_valor.textContent = "N/A";
    } else {
      span_valor.textContent = visibilidade + "m";
    }
    div.appendChild(span_valor);
    return div;
  };

  div_meteorologia = function (meteorologia) {
    let div = document.createElement("div");
    div.classList.add("meteorologia");
    //icones
    //trovoada com chuva
    let icone_tsra = document.createElement("img");
    icone_tsra.classList.add("icone_meteorologia");
    icone_tsra.setAttribute("src", "./img/trovoada-com-chuva.png");
    //chuva
    let icone_chuva = document.createElement("img");
    icone_chuva.classList.add("icone_meteorologia");
    icone_chuva.setAttribute("src", "./img/chuva.png");
    //nevoeiro
    let icone_nevoeiro = document.createElement("img");
    icone_nevoeiro.classList.add("icone_meteorologia");
    icone_nevoeiro.setAttribute("src", "./img/nevoeiro.png");
    //
    for (let item of meteorologia) {
      if (item === "TSRA" || item === "+TSRA" || item === "-TSRA") {
        div.appendChild(icone_tsra);
      }
      if (item === "RA" || item === "+RA" || item === "-RA") {
        div.appendChild(icone_chuva);
      }
      if (item === "FG") {
        div.appendChild(icone_nevoeiro);
      }
      if (item === "BR") {
        div.appendChild(icone_nevoeiro);
      }
    }
    return div;
  };

  div_teto = function (teto) {
    let div = document.createElement("div");
    div.classList.add("teto");
    // ícone
    let ico_teto = document.createElement("img");
    ico_teto.classList.add("icone_condicao");
    ico_teto.setAttribute("src", "./img/teto.png");
    div.appendChild(ico_teto);
    // valor
    let span_valor = document.createElement("span");
    if (teto === undefined) {
      span_valor.textContent = "N/A";
    } else {
      teto === "UNL" ?
        (span_valor.textContent = "UNL") :
        (span_valor.textContent = teto + "ft");
    }
    div.appendChild(span_valor);
    return div;
  };

  div_och = function (condicao, procedimentos) {
    let div = document.createElement("div");
    div.classList.add("och");
    if (condicao !== undefined) {
      for (let procedimento of procedimentos) {
        if (!procedimento.ochOK) {
          let ico = document.createElement("img");
          ico.classList.add("icone_alerta");
          ico.setAttribute("src", "./img/alert.png");
          div.appendChild(ico);
          let span = document.createElement("span");
          span.textContent = "TETO";
          div.appendChild(span);
          return div;
        }
      }
    }
    return div;
  };

  div_vento = function (vento) {
    let div = document.createElement("div");
    div.classList.add("vento");
    // ícone
    let ico = document.createElement("img");
    ico.classList.add("icone_condicao");
    ico.setAttribute("src", "./img/biruta.png");
    div.appendChild(ico);
    // valor
    let span_valor = document.createElement("span");
    if (vento === undefined || vento.speed === undefined) {
      span_valor.textContent = "N/A";
    } else if (vento.calm) {
      span_valor.textContent = "CALMO";
    } else {
      let direcao = vento.direction;
      if (vento.variable) {
        direcao = "VRB";
      } else {
        if (direcao < 10) {
          direcao = `00${direcao}°`;
        } else if (direcao < 100) {
          direcao = `0${direcao}°`;
        } else {
          direcao = `${direcao}°`;
        }
      }
      let velocidade = vento.speed;
      if (velocidade < 10) velocidade = `0${velocidade}`;
      span_valor.textContent = `${direcao}/${velocidade}kt`;
    }
    div.appendChild(span_valor);
    return div;
  };

  div_rajada = function (vento) {
    let div = document.createElement("div");
    div.classList.add("rajada");
    if (vento !== undefined && vento.gusts) {
      // ícone
      let ico = document.createElement("img");
      ico.classList.add("icone_condicao");
      ico.setAttribute("src", "./img/rajada.png");
      div.appendChild(ico);
      // valor
      let span_valor = document.createElement("span");
      span_valor.textContent = vento.gustSpeed + "kt";
      div.appendChild(span_valor);
    }
    return div;
  };

  div_cabeceiras = function (status) {
    let div = document.createElement("div");
    div.classList.add("cabeceiras");
    let tabela = document.createElement("table");
    tabela.classList.add("tabela_cabeceiras");
    status.cabeceiras.forEach((thr) => {
      let linha = document.createElement("tr");
      let td_em_uso = document.createElement("td");
      let icone_seta = document.createElement("img");
      icone_seta.classList.add("icone_pista_em_uso");
      icone_seta.setAttribute("src", "./img/seta.png");
      if (status.vento === undefined || status.vento.calm) {
        icone_seta.style.visibility = `hidden`;
      } else {
        let rumoPista = Number(thr.cabeceira.replaceAll('R', '').replaceAll('L', '')) * 10
        let direcaoVento = (status.vento.variable) ? (status.vento.direction_max + status.vento.direction_min) / 2 : status.vento.direction;
        direcaoVento += DMG[status.icao];
        let ventoRelativo = this.anguloRelativo(rumoPista, direcaoVento);
        if (ventoRelativo <= -90 || ventoRelativo >= 90) icone_seta.style.visibility = `hidden`;
      }
      td_em_uso.appendChild(icone_seta);
      linha.appendChild(td_em_uso);
      let td_thr = document.createElement("td");
      td_thr.textContent = thr.cabeceira;
      if (thr.qgo_arr) td_thr.classList.add("thr_qgo");
      linha.appendChild(td_thr);
      let td_rnp = document.createElement("td");
      td_rnp.textContent = "AR";
      let td_rnav = document.createElement("td");
      td_rnav.textContent = "RNP";
      let td_ils = document.createElement("td");
      td_ils.textContent = "ILS";
      if (status.condicao === undefined) {
        td_rnp.classList.add("proc_na");
        td_rnav.classList.add("proc_na");
        td_ils.classList.add("proc_na");
      } else {
        let condicao_rnp = status.getCondicaoTipoProcedimento(
          thr.cabeceira,
          "RNPAR"
        );
        if (condicao_rnp !== null) {
          condicao_rnp
            ?
            td_rnp.classList.add("proc_ok") :
            td_rnp.classList.add("proc_qgo");
        } else {
          td_rnp.classList.add("proc_na");
        }
        let condicao_rnav = status.getCondicaoTipoProcedimento(
          thr.cabeceira,
          "RNP"
        );
        if (condicao_rnav !== null) {
          condicao_rnav
            ?
            td_rnav.classList.add("proc_ok") :
            td_rnav.classList.add("proc_qgo");
        } else {
          td_rnav.classList.add("proc_na");
        }
        let condicao_ils = status.getCondicaoTipoProcedimento(
          thr.cabeceira,
          "ILS"
        );
        if (condicao_ils !== null) {
          condicao_ils
            ?
            td_ils.classList.add("proc_ok") :
            td_ils.classList.add("proc_qgo");
        } else {
          td_ils.classList.add("proc_na");
        }
      }
      linha.appendChild(td_rnp);
      linha.appendChild(td_rnav);
      linha.appendChild(td_ils);
      tabela.appendChild(linha);
    });
    div.appendChild(tabela);
    return div;
  };

  anguloRelativo = (rumoVerdadeiro, direcaoVento) => {
    let diferenca = direcaoVento - rumoVerdadeiro;
    if (diferenca < -180) return diferenca + 360;
    if (diferenca === -180) return 180;
    if (diferenca > 180) return diferenca - 360;
    return diferenca;
  }
}
