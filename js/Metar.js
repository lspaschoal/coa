//METAR SBRB 182100Z 21008KT 2000 R06/////N R24/////N -TSRA BKN005 SCT030 FEW030CB 23/23 Q1009=
//METAR SBRJ 182100Z 19011KT //// FEW015 FEW030TCU SCT050 29/24 Q1010=
//SPECI SBCF 190029Z 02004KT 1500 R16R/P2000 R34L/P2000 BR FEW045 SCT080 21/20 Q1018=
//SPECI SBDB 191749Z AUTO 17004KT 110V220 CAVOK 26/20 Q1014=
//METAR SBLS 191700Z VRB05KT 9999 SCT035 28/20 Q1018=
//METAR SBBH 191700Z 10008KT 9999 BKN040 FEW045TCU 27/17 Q1017=
//SPECI SBBP 212145Z /////KT 4000 -RA BR OVC015 ///// Q1019 RETS=
//SPECI SBSC 212318Z 31011G23KT 2000 +TSRA BR SCT010 FEW030CB BKN040 23/22 Q1016=
//SPECI SBCC 212130Z 03009KT 8000 RA BKN006 OVC019 22/21 Q1013=
//SPECI SBJV 261827Z 20009G22KT 5000 TSRA BKN015 FEW050CB BKN080 26/24 Q1013=
//SPECI SBMQ 260025Z 09007KT 8000 -TSRA BKN030 FEW035CB BKN080 26/25 Q1013=
// METAR SBBG 261800Z AUTO 27008KT 240V300 9999 VCTS //////CB 29/18 Q1013 RETS=
//SPECI SBBG 071002Z AUTO 23004KT 3700 BR SCT002 BKN009 ///// Q////=
//SPECI SBBX 071005Z AUTO 21002KT 2800 VV001 22/21 Q1014=
//SPECI SBCO 071010Z VRB01KT 0800 R31/P2000 R13/P2000 FG BKN003 21/21 Q1007=
//SPECI SBLI 071006Z AUTO 02022KT 3300 -RA NCD 28/23 Q1015 W///S4=

function debug(item, leitura) {
  //console.log("Testando: " + item);
  //console.log(" > " + leitura);
}
class Metar {
  _VMC = {
    visibility: 5000,
    ceiling: 1500,
  };
  _raw;
  _type;
  _correction = false;
  _auto = false;
  _icao;
  _UTCDay;
  _UTCTime;
  _cavok = false;
  _wind = {
    direction: undefined,
    speed: undefined,
    variable: false,
    gusts: false,
    gustSpeed: undefined,
    calm: false,
    direction_min: undefined,
    direction_max: undefined,
  };
  _visibility = undefined;
  _verticalVisibility = undefined;
  _RVR = [];
  _clouds = [];
  _ceiling = "UNL";
  _phenomena = [];
  _recentWeather = [];
  _temperature = undefined;
  _dewPoint = undefined;
  _QNH_HPa = undefined;
  _QNH_InHg = undefined;

  abbreviations = new Map()
    .set("BR", "mist")
    .set("DS", "duststorm")
    .set("DU", "widespread dus")
    .set("DZ", "drizzle")
    .set("FG", "fog")
    .set("FU", "smoke")
    .set("GR", "hail")
    .set("GS", "small hail and/or snow pellets")
    .set("HZ", "haze")
    .set("IC", "ice crystals")
    .set("PL", "ice pellets")
    .set("PO", "dust/sand whirls")
    .set("RA", "rain")
    .set("SA", "sand")
    .set("SG", "snow grains")
    .set("SN", "snow")
    .set("SP", "snow pellets")
    .set("SQ", "sqalls")
    .set("SS", "sandstorm")
    .set("TS", "thunderstorm")
    .set("VA", "volcanic ash");

  constructor(mensagem) {
    // Storing the raw message
    this._raw = mensagem.toUpperCase();
    mensagem.split(" ").forEach((item) => {
      // Type of message (METAR or SPECI)
      if (item === "METAR" || item === "SPECI") {
        this._type = item;
        return;
      }
      // Correction message
      if (item === "COR") {
        this._correction = true;
        return;
      }
      // Automatic message
      if (item === "AUTO") {
        this._auto = true;
        return;
      }
      // ICAO code of location
      if (
        item.length === 4 &&
        /[A-Z]{4}/.test(item) &&
        this._icao === undefined
      ) {
        debug(item, "ICAO");
        this._icao = item;
        return;
      }
      // UTC day and time
      if (/[0-9]{6}Z/.test(item)) {
        debug(item, "data/hora");
        this._UTCDay = Number(item.substring(0, 2));
        this._UTCTime = item.substring(2, 6);
        return;
      }
      // Automatic message
      if (item === "CAVOK") {
        debug(item, "CAVOK");
        this._cavok = true;
        this._visibility = 9999;
        this._ceiling = "UNL";
        return;
      }
      // Wind
      if (/KT/.test(item)) {
        debug(item, "vento");
        if (/\/\/\/\/\//.test(item)) return;
        if (/00000KT/.test(item)) {
          this._wind.speed = 0;
          this._wind.calm = true;
          return;
        }
        let direction = item.substring(0, 3);
        let speed = item.substring(3, 5);
        if (direction === "VRB") {
          this._wind.direction = undefined;
          this._wind.variable = true;
          this._wind.speed = Number(speed);
          return;
        }
        this._wind.direction = Number(direction);
        this._wind.speed = Number(speed);
        if (/G[0-9]{2}KT/.test(item)) {
          this._wind.gusts = true;
          this._wind.gustSpeed = Number(item.substring(6, 8));
        }
        return;
      }
      // Variable wind directions
      if (/[0-9]{3}V[0-9]{3}/.test(item)) {
        debug(item, "VRB");
        this._wind.variable = true;
        this._wind.direction_min = Number(item.substring(0, 3));
        this._wind.direction_max = Number(item.substring(4));
        return;
      }
      // QNH in HPa
      if (/Q\/\/\/\//.test(item)) {
        this._QNH_HPa = this._QNH_InHg = undefined;
        return;
      }
      if (/Q[0-9]{4}/.test(item)) {
        debug(item, "QNH em hpa");
        this.setQNHinHPa(Number(item.substring(1, 5)));
        return;
      }
      // QNH in InHg
      if (/A\/\/\/\//.test(item)) {
        this._QNH_HPa = this._QNH_InHg = undefined;
        return;
      }
      if (/A[0-9]{4}/.test(item)) {
        debug(item, "QNH em InHg");
        this.setQNHinInHg(Number(item.substring(1, 5)) / 100);
        return;
      }
      // Clouds and ceiling
      if (/\/\/\/\/\/\//.test(item)) {
        debug(item, "nuvem desconhecida /////");
        let cloud = {
          cb: false,
          tcu: false,
          type: undefined,
          base: undefined,
        };
        if (item.indexOf("CB") > -1) cloud.cb = true;
        if (item.indexOf("TCU") > -1) cloud.tcu = true;
        this._clouds.push(cloud);
        return;
      }
      if (/[A-Z]{3}[0-9]{3}/.test(item)) {
        debug(item, "nuvens");
        let cloud = {
          cb: false,
          tcu: false,
        };
        cloud.type = item.substring(0, 3);
        cloud.base = Number(item.substring(3, 6)) * 100;
        if (item.indexOf("BKN") > -1 || item.indexOf("OVC") > -1) {
          if (this._ceiling === "UNL" || cloud.base < this._ceiling) {
            this._ceiling = cloud.base;
          }
        }
        if (item.indexOf("CB") > -1) cloud.cb = true;
        if (item.indexOf("TCU") > -1) cloud.tcu = true;
        this._clouds.push(cloud);
        return;
      }
      // RVR
      if (/R[0-9]{2}/.test(item)) {
        debug(item, "RVR");
        let rvr = {
          inop: false,
          thr: undefined,
          visibility: undefined,
          tendency: undefined,
        };
        rvr.thr = item.substring(1, item.indexOf("/"));
        let vis = item.substring(item.indexOf("/"));
        if (/\/{4}/.test(vis)) {
          rvr.inop = true;
          this._RVR.push(rvr);
          return;
        }
        rvr.visibility = Number(vis.match(/[0-9]{4}/));
        if (/[A-]/.test(vis)) rvr.tendency = vis.match(/[A-Z]/)[0];
        this._RVR.push(rvr);
        return;
      }
      // Temperature / dew point
      if (/\/\/\/\/\//.test(item)) {
        debug(item, "temp / ponto de orvalho desconhecido");
        this._temperature = undefined;
        this._dewPoint = undefined;
        return;
      }
      if (/[0-9]{2}\/\/\//.test(item)) {
        debug(item, " temperature conhecida / ponto de orvalho desconhecido");
        let temp_dewpoint = item.split("/");
        this._temperature = temp_dewpoint[0];
        this._dewPoint = undefined;
        return;
      }
      if (/[0-9]{2}\/[0-9]{2}/.test(item)) {
        debug(item, "temp/ponto orvalho");
        let temp_dewpoint = item.split("/");
        this._temperature = temp_dewpoint[0];
        this._dewPoint = temp_dewpoint[1];
        return;
      }
      // Visibility on sector
      if (/[0-9]{4}[A-Z]/.test(item)) {
        debug(item, "visibilidade no setor");
        return;
      }
      // Visibility
      if (/ \/\/\/\/ /.test(item)) {
        debug(item, "visibilidade /////");
        this._visibility = undefined;
        return;
      }
      if (/[0-9]{4}/.test(item)) {
        debug(item, "visibilidade");
        this._visibility = Number(item);
        return;
      }
      // Vertical Visibility
      if (/VV/.test(item)) {
        debug(item, "visibilidade vertical");
        item === "VV///"
          ? (this._verticalVisibility = "///")
          : (this._verticalVisibility = Number(item.substring(2)) * 100);
        return;
      }
      // Recent weather
      if (/RE/.test(item)) {
        debug(item, "tempo recente");
        Array.from(this.abbreviations.keys()).forEach((abbreviation) => {
          if (item.indexOf(abbreviation) > -1) {
            this._recentWeather.push(item.replace("RE", "").replace("=", ""));
            let remove_duplicates = new Set(this._recentWeather);
            this._recentWeather = Array.from(remove_duplicates);
          }
        });
        return;
      }
      // Phenomena
      debug(item, "tempo presente ou outros");
      Array.from(this.abbreviations.keys()).forEach((abbreviation) => {
        if (item.indexOf(abbreviation) > -1) {
          this._phenomena.push(item);
          let remove_duplicates = new Set(this._phenomena);
          this._phenomena = Array.from(remove_duplicates);
        }
      });
    });
  }

  // Getters
  getRawMessage = () => this._raw;
  getMessageType = () => this._type;
  isCorrection = () => this._correction;
  isAutomatic = () => this._auto;
  getIcao = () => this._icao;
  getWind = () => this._wind;
  windIsCalm = () => this._wind.calm;
  windIsVariable = () => this._wind.variable;
  windHasGusts = () => this._wind.gusts;
  getWindGustSpeed = () => this._wind.gustSpeed;
  getVisibility = () => this._visibility;
  getVerticalVisibility = () => this._verticalVisibility || this._visibility;
  hasRVR = () => {
    return this._RVR.length > 0;
  };
  getRVR = (thr) => {
    thr = thr + "";
    for (let i = 0; i < this._RVR.length; i++) {
      if (this._RVR[i].thr === thr) return this._RVR[i].visibility;
    }
    return false;
  };
  getClouds = () => this._clouds;
  getCeiling = () => this._ceiling;
  getPhenomena = () => this._phenomena;
  getTemperature = () => this._temperature;
  getDewPoint = () => this._dewPoint;
  hasCB = () => {
    for (let i = 0; i < this._clouds.length; i++) {
      if (this._clouds[i].cb) return true;
    }
    return false;
  };
  hasTCU = () => {
    for (let i = 0; i < this._clouds.length; i++) {
      if (this._clouds[i].tcu) return true;
    }
    return false;
  };
  hasVerticalVisibility = () => {
    if (this._verticalVisibility) return true;
    return false;
  };
  hasPhenomena = (code) => {
    for (let i = 0; i < this._phenomena.length; i++) {
      if (this._phenomena[i].indexOf(code) > -1) return true;
    }
    return false;
  };
  matchesPhenomena = (code) => {
    for (let i = 0; i < this._phenomena.length; i++) {
      if (this._phenomena[i] === code) return true;
    }
    return false;
  };
  isVMC = () => {
    return (
      this.isCavok() ||
      (this.getVisibility() >= this._VMC.visibility &&
        (this.getCeiling() === "UNL" || this.getCeiling() >= this._VMC.ceiling))
    );
  };
  isCavok = () => {
    return this._cavok;
  };

  // Setters
  setQNHinHPa = (value) => {
    this._QNH_HPa = Math.round(value * 100) / 100;
    this._QNH_InHg = Math.round(this._QNH_HPa * 2.953) / 100;
  };
  setQNHinInHg = (value) => {
    this._QNH_InHg = Math.round(value * 100) / 100;
    this._QNH_HPa = Math.round(this._QNH_InHg / 0.0002953) / 100;
  };
}
