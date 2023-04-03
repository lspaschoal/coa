class View {

    constructor() {
        this.PAINEL = new Map();
        DADOS.getAllIcao().forEach(icao => {
            this.PAINEL.set(icao, true);
        });
    }


    gerarCard = function (status) {
        let card = document.createElement('div');
        card.classList.add('card')
        card.classList.add(this.defineCondicao(status.condicao))
        card.appendChild(this.linhaSuperior(status.icao, status.iata, status.condicao))
        card.appendChild(this.div_visibilidade(status.visibilidade));
        card.appendChild(this.div_meteorologia(status.meteorologia));
        card.appendChild(this.div_teto(status.teto));
        card.appendChild(this.div_och(status.condicao,status.procedimentos));
        card.appendChild(this.div_vento(status.vento));
        card.appendChild(this.div_rajada(status.vento));
        card.appendChild(this.div_cabeceiras(status));
        return card;
    }

    defineCondicao = function (condicao) {
        switch (condicao) {
            case "VMC":
                return 'VMC';
            case "IMC":
                return 'IMC';
            case "QGO":
            case "QGO ARR":
            case "QGO ARR/DEP":
            case "QGO DEP":
                return 'QGO';
            default:
                return 'INDISPONIVEL';
        }
    }

    linhaSuperior = function (icao, iata, condicao) {
        let div_linha = document.createElement('div');
        div_linha.classList.add('linha_superior')
        let div_icao = document.createElement('div');
        div_icao.classList.add("icao");
        div_icao.textContent = icao + ' (' + iata + ')'
        div_linha.appendChild(div_icao);
        let div_condicao = document.createElement('div');
        div_condicao.classList.add('condicao');
        div_condicao.textContent = condicao;
        div_linha.appendChild(div_condicao);
        return div_linha;
    }

    div_visibilidade = function (visibilidade) {
        let div = document.createElement('div');
        div.classList.add('visibilidade');
        let ico_vis = document.createElement('img');
        ico_vis.classList.add('icone_condicao')
        ico_vis.setAttribute('src', './img/visibilidade.png');
        div.appendChild(ico_vis);
        let span_valor = document.createElement('span');
        if (visibilidade === undefined) {
            span_valor.textContent = 'N/A';
        } else {
            span_valor.textContent = visibilidade + 'm';
        }
        div.appendChild(span_valor);
        // if(visibilidade === undefined) {
        //     div.textContent = 'N/A'
        // }else{
        //     div.textContent = visibilidade + 'm';
        // }
        return div;
    }

    div_meteorologia = function (meteorologia) {
        let div = document.createElement('div');
        div.classList.add('meteorologia');
        //icones:
        //trovoada com chuva
        let icone_tsra = document.createElement('img');
        icone_tsra.classList.add('icone_meteorologia');
        icone_tsra.setAttribute('src', './img/trovoada-com-chuva.png');
        //chuva
        let icone_chuva = document.createElement('img');
        icone_chuva.classList.add('icone_meteorologia');
        icone_chuva.setAttribute('src', './img/chuva.png');
        //nevoeiro
        let icone_nevoeiro = document.createElement('img');
        icone_nevoeiro.classList.add('icone_meteorologia');
        icone_nevoeiro.setAttribute('src', './img/nevoeiro.png');
        //
        for (let item of meteorologia) {
            if (item === 'TSRA' || item === '+TSRA' || item === '-TSRA') { div.appendChild(icone_tsra); };
            if (item === 'RA' || item === '+RA' || item === '-RA') { div.appendChild(icone_chuva); };
            if (item === 'FG') { div.appendChild(icone_nevoeiro); };
            if (item === 'BR') { div.appendChild(icone_nevoeiro); };
        }
        return div;
    }

    div_teto = function (teto) {
        let div = document.createElement('div');
        div.classList.add('teto');
        // ícone
        let ico_teto = document.createElement('img');
        ico_teto.classList.add('icone_condicao')
        ico_teto.setAttribute('src', './img/teto.png');
        div.appendChild(ico_teto);
        // valor
        let span_valor = document.createElement('span');
        if (teto === undefined) {
            span_valor.textContent = 'N/A';
        } else {
            (teto === 'UNL') ? span_valor.textContent = 'UNL' : span_valor.textContent = teto + 'ft';
        }
        div.appendChild(span_valor);
        return div;
    }

    div_och = function (condicao,procedimentos) {
        let div = document.createElement('div');
        div.classList.add('och');
        if(condicao !== undefined){
            for (let procedimento of procedimentos) {
                if (!procedimento.ochOK) {
                    let ico = document.createElement('img');
                    ico.classList.add('icone_alerta')
                    ico.setAttribute('src', './img/alert.png');
                    div.appendChild(ico);
                    let span = document.createElement('span');
                    span.textContent = 'TETO';
                    div.appendChild(span);
                    return div;
                }
            }
        }
        return div;
    }

    div_vento = function (vento) {
        let div = document.createElement('div');
        div.classList.add('vento');
        // ícone
        let ico = document.createElement('img');
        ico.classList.add('icone_condicao')
        ico.setAttribute('src', './img/biruta.png');
        div.appendChild(ico);
        // valor
        let span_valor = document.createElement('span');
        if (vento === undefined) {
            span_valor.textContent = 'N/A';
        } else {
            let direcao = vento.direction;
            if(vento.variable){
                direcao = 'VRB';
            }else{
                if (direcao < 10) {
                    direcao = `00${direcao}°`;
                } else if (direcao < 100) {
                    direcao = `0${direcao}°`;
                }
            }
            let velocidade = vento.speed;
            if (velocidade < 10) velocidade = `0${velocidade}`;
            span_valor.textContent = `${direcao}/${velocidade}kt`;
        }
        div.appendChild(span_valor);
        return div;
    }

    div_rajada = function (vento) {
        let div = document.createElement('div');
        div.classList.add('rajada');
        if (vento !== undefined && vento.gusts) {
            // ícone
            let ico = document.createElement('img');
            ico.classList.add('icone_condicao')
            ico.setAttribute('src', './img/rajada.png');
            div.appendChild(ico);
            // valor
            let span_valor = document.createElement('span');
            span_valor.textContent = vento.gustSpeed + 'kt';
            div.appendChild(span_valor);
        }
        return div;
    }

    div_cabeceiras = function (status) {
        let div = document.createElement('div');
        div.classList.add('cabeceiras');
        let tabela = document.createElement('table');
        tabela.classList.add('tabela_cabeceiras');
        status.cabeceiras.forEach(thr => {
            let linha = document.createElement('tr');
            let td_thr = document.createElement('td');
            td_thr.textContent = thr.cabeceira;
            linha.appendChild(td_thr);
            let td_rnp = document.createElement('td');
            td_rnp.textContent = 'AR';
            let td_rnav = document.createElement('td');
            td_rnav.textContent = 'RNP';
            let td_ils = document.createElement('td');
            td_ils.textContent = 'ILS';
            if(status.condicao === undefined){
                td_rnp.classList.add('proc_na');
                td_rnav.classList.add('proc_na');
                td_ils.classList.add('proc_na');
            }else{
                let condicao_rnp = status.getCondicaoTipoProcedimento(thr.cabeceira, 'RNP');
                if(condicao_rnp !== null){
                    (condicao_rnp) ? td_rnp.classList.add('proc_ok') : td_rnp.classList.add('proc_qgo')
                }else{
                    td_rnp.classList.add('proc_na');
                };
                let condicao_rnav = status.getCondicaoTipoProcedimento(thr.cabeceira, 'RNAV');
                if(condicao_rnav !== null){
                    (condicao_rnav) ? td_rnav.classList.add('proc_ok') : td_rnav.classList.add('proc_qgo');
                }else{
                    td_rnav.classList.add('proc_na');
                }
                let condicao_ils = status.getCondicaoTipoProcedimento(thr.cabeceira, 'ILS');
                if(condicao_ils !== null) {
                    (condicao_ils) ? td_ils.classList.add('proc_ok') : td_ils.classList.add('proc_qgo');
                }else{
                    td_ils.classList.add('proc_na');
                }
            }
            linha.appendChild(td_rnp);
            linha.appendChild(td_rnav);
            linha.appendChild(td_ils);
            tabela.appendChild(linha);
        })
        div.appendChild(tabela);
        return div;
    }


}

