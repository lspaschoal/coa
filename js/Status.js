class Status {
    constructor(icao) {
        this.icao = icao;
        this.iata = DADOS.getAeroporto(icao).iata;
        this.ifr = DADOS.getAeroporto(icao).ifr;
        this.teto = undefined;
        this.visibilidade = undefined;
        this.meteorologia = [];
        this.vento = undefined;
        this.condicao = undefined;
        this.qgo_arr = undefined;
        this.qgo_dep = undefined;
        this.pistas = [];
        this.cabeceiras = [];
        this.procedimentos = [];
        DADOS.getPistas(icao).forEach(rwy => this.pistas.push({
            pista: rwy,
            minimosDEP: DADOS.getMinimosDep(icao, rwy),
            qgo_arr: undefined,
            qgo_dep: undefined
        }));
        DADOS.getCabeceiras(icao).forEach(thr => {
            this.cabeceiras.push({
                cabeceira: thr,
                visibilidade: undefined,
                qgo_arr: undefined
            });
            if (DADOS.getProcedimentos(icao, thr) !== null) {
                Object.entries(DADOS.getProcedimentos(icao, thr)).forEach(procedimento => {
                    this.procedimentos.push({
                        cabeceira: thr,
                        tipo: procedimento[0],
                        minVisibilidade: procedimento[1].minVisibilidade,
                        minTeto: procedimento[1].minTeto,
                        och: procedimento[1].och,
                        procOK: undefined,
                        ochOK: undefined
                    });
                });
            }
        });
    };

    setMeteorologia = function (metar) {
        if (metar === undefined) return;
        this.fonte = metar._type;
        this.horario = `${metar._UTCTime.substring(0,2)}:${metar._UTCTime.substring(2,4)}`
        this.condicao = (metar.isVMC()) ? 'VMC' : 'IMC';
        this.visibilidade = metar.getVisibility();
        this.teto = metar.getCeiling();
        this.meteorologia = metar.getPhenomena();
        this.vento = metar.getWind();
        this.cabeceiras.forEach(thr => {
            thr.visibilidade = metar.getRVR(thr.cabeceira) || this.visibilidade;
        })
    }

    getVisibilidadeCabeceira = function (thr) {
        for (let cabeceira of this.cabeceiras) {
            if (cabeceira.cabeceira === thr) return cabeceira.visibilidade;
        }
    }

    getVisibilidadePista = function (pista) {
        let [cab1, cab2] = pista.split('/');
        return (this.getVisibilidadeCabeceira(cab1) > this.getVisibilidadeCabeceira(cab2)) ? this.getVisibilidadeCabeceira(cab2) : this.getVisibilidadeCabeceira(cab1)
    }

    isQGO = function (thr) {
        for (let cabeceira of this.cabeceiras) {
            if (cabeceira.cabeceira === thr) return cabeceira.qgo_arr;
        }
    }

    hasProcedimento = function (thr) {
        for (let procedimento of this.procedimentos) {
            if (procedimento.cabeceira === thr) return true;
        }
        return false;
    }

    setCondicaoProcedimentos = function () {
        for (let procedimento of this.procedimentos) {
            let visibilidade = this.getVisibilidadeCabeceira(procedimento.cabeceira);
            //console.log(this.icao,visibilidade,procedimento.minVisibilidade,procedimento.minTeto,this.teto)
            procedimento.procOK = ((visibilidade >= procedimento.minVisibilidade) && (procedimento.minTeto === undefined || this.teto === 'UNL' || this.teto >= procedimento.minTeto));
            procedimento.ochOK = (this.teto === 'UNL' || this.teto >= procedimento.och);
        }
    }

    getCondicaoTipoProcedimento = function(cabeceira,tipo){
        let retorno = null;
        for (let procedimento of this.procedimentos) {
            if (procedimento.cabeceira === cabeceira && procedimento.tipo === tipo){
                if(procedimento.procOK) return true;
                retorno = false;
            };
        }
        return retorno;
    }

    setCondicaoCabeceiras = function () {
        if (this.procedimentos.length > 0) this.setCondicaoProcedimentos();
        for (let cabeceira of this.cabeceiras) {
            let qgo = true;
            if (this.hasProcedimento(cabeceira.cabeceira)) {
                for (let procedimento of this.procedimentos) {
                    if ((procedimento.cabeceira === cabeceira.cabeceira) && procedimento.procOK) {
                        qgo = false;
                        break;
                    }
                }
            } else {
                if (cabeceira.visibilidade >= 5000 && (this.teto === 'UNL' || this.teto >= 1500)) qgo = false;
            }
            cabeceira.qgo_arr = qgo;
        }
    }

    setCondicaoPistas = function () {
        this.setCondicaoCabeceiras();
        for (let pista of this.pistas) {
            let visibilidade = this.getVisibilidadePista(pista.pista);
            pista.qgo_dep = visibilidade < pista.minimosDEP.diurno;
            let [cab1, cab2] = pista.pista.split('/');
            pista.qgo_arr = (this.isQGO(cab1) && this.isQGO(cab2));
        }
    }

    setCondicao = function () {
        if (this.visibilidade === undefined) return;
        this.setCondicaoPistas();
        if (this.condicao === 'VMC') {
            this.qgo_arr = false;
            this.qgo_dep = false;
            return;
        }
        let allQGOARR = true;
        let allQGODEP = true;
        let anyQGOARR = false;
        let anyQGODEP = false;
        for (let pista of this.pistas) {
            (pista.qgo_arr) ? anyQGOARR = true : allQGOARR = false;
            (pista.qgo_dep) ? anyQGODEP = true : allQGODEP = false;
        }
        this.qgo_arr = allQGOARR;
        this.qgo_dep = allQGODEP;
        if (this.qgo_arr && this.qgo_dep) {
            this.condicao = 'QGO ARR/DEP';
        } else if (this.qgo_arr) {
            this.condicao = 'QGO ARR';
        } else if (this.qgo_dep) {
            this.condicao = 'QGO DEP';
        }
    }
}
