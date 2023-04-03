const AEROPORTOS = {};
const PROCEDIMENTOS = {};

const minVFR = {
    minVisibilidade: 5000,
    minTeto: 1500
}

// AEROPORTOS
AEROPORTOS.SBAR = {
    iata: 'AJU',
    administrador: 'AENA',
    nome: 'Aeroporto Brigadeiro Lysias Rodrigues',
    cidade: 'Palmas',
    estado: 'TO',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBAT = {
    iata: 'AFL',
    administrador: 'SOCICAM',
    nome: 'Aeroporto de Alta Floresta - Piloto Oswaldo Marques Dias',
    cidade: 'Alta Floresta',
    estado: 'MT',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBE = {
    iata: 'BEL',
    administrador: 'Infraero',
    nome: 'Aeroporto Val de Cans - Júlio Cezar Ribeiro',
    cidade: 'Belém',
    estado: 'PA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBG = {
    iata: 'BGX',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Comandante Gustavo Kraemer',
    cidade: 'Bagé',
    estado: 'RS',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBH = {
    iata: 'PLU',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto de Pampulha - Carlos Drummond de Andrade',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBI = {
    iata: 'BFH',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto de Bacacheri',
    cidade: 'Curitiba',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBR = {
    iata: 'BSB',
    administrador: 'Inframérica',
    nome: 'Aeroporto Presidente Juscelino Kubitschek',
    cidade: 'Brasília',
    estado: 'DF',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBBV = {
    iata: 'BVB',
    administrador: 'VINCI',
    nome: 'Aeroporto Atlas Brasil Cantanhede',
    cidade: 'Boa Vista',
    estado: 'RR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCA = {
    iata: 'CAC',
    administrador: 'Transitar Cascavel',
    nome: 'Aeroporto Regional do Oeste - Coronel Adalberto Mendes da Silva',
    cidade: 'Cascavel',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCB = {
    iata: 'CFB',
    administrador: 'Cabo Frio Airport',
    nome: 'Aeroporto de Cabo Frio',
    cidade: 'Cabo Frio',
    estado: 'RJ',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCF = {
    iata: 'CNF',
    administrador: 'BH Airport',
    nome: 'Aeroporto Tancredo Neves',
    cidade: 'Belo Horizonte',
    estado: 'MG',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCG = {
    iata: 'CGR',
    administrador: 'Infraero',
    nome: 'Aeroporto de Campo Grande',
    cidade: 'Campo Grande',
    estado: 'MS',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCH = {
    iata: 'XAP',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Serafin Enoss Bertaso',
    cidade: 'Chapecó',
    estado: 'SC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCT = {
    iata: 'CWB',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Afonso Pena',
    cidade: 'Curitiba',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCX = {
    iata: 'CXJ',
    administrador: 'Prefeitura de Caxias do Sul',
    nome: 'Aeroporto Hugo Cantergiani',
    cidade: 'Caxias do Sul',
    estado: 'RJ',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCY = {
    iata: 'CGB',
    administrador: 'AENA',
    nome: 'Aeroporto Marechal Rondon',
    cidade: 'Cuiabá',
    estado: 'MT',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBCZ = {
    iata: 'CZS',
    administrador: 'VINCI',
    nome: 'Aeroporto Internacional de Cruzeiro do Sul',
    cidade: 'Cruzeiro do Sul',
    estado: 'AC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBEG = {
    iata: 'MAO',
    administrador: 'VINCI',
    nome: 'Aeroporto Eduardo Gomes',
    cidade: 'Manaus',
    estado: 'AM',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBFI = {
    iata: 'IGU',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto de Cataratas',
    cidade: 'Foz do Iguaçu',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBFL = {
    iata: 'FLN',
    administrador: 'Zurich Airport Airport',
    nome: 'Aeroporto Hercílio Luz',
    cidade: 'Florianópolis',
    estado: 'SC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBFN = {
    iata: 'FEN',
    administrador: 'Prefeitura de Fernando de Noronha',
    nome: 'Aeroporto de Fernando de Noronha',
    cidade: 'Fernando de Noronha',
    estado: 'PE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBFZ = {
    iata: 'FOR',
    administrador: 'Fraport',
    nome: 'Aeroporto Pinto Martins',
    cidade: 'Fortaleza',
    estado: 'CE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBGL = {
    iata: 'GIG',
    administrador: 'RIOGaleão',
    nome: 'Aeroporto Tom Jobim - Galeão',
    cidade: 'Rio de janeiro',
    estado: 'RJ',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBGO = {
    iata: 'GYN',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Santa Genoveva',
    cidade: 'Goiânia',
    estado: 'GO',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBGR = {
    iata: 'GRU',
    administrador: 'GRUAirport',
    nome: 'Aeroporto Governador André Franco Montoro - Guarulhos',
    cidade: 'Guarulhos',
    estado: 'SP',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBIL = {
    iata: 'IOS',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Jorge Amado',
    cidade: 'Ilhéus',
    estado: 'BA',
    vfr_noturno: true,
    ifr: false,
    pistas: {}
};
AEROPORTOS.SBIZ = {
    iata: 'IMP',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Prefeito Renato Moreira',
    cidade: 'Imperatriz',
    estado: 'MA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBJE = {
    iata: 'JJD',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Comandante Ariston Pessoa',
    cidade: 'Jericoacoara',
    estado: 'CE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBJP = {
    iata: 'JPA',
    administrador: 'AENA',
    nome: 'Aeroporto Presidente Castro Pinto',
    cidade: 'João Pessoa',
    estado: 'PB',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBJR = {
    iata: 'RRJ',
    administrador: 'Infraero',
    nome: 'Aeroporto de Jacarepaguá - Roberto Marinho',
    cidade: 'Rio de janeiro',
    estado: 'RJ',
    vfr_noturno: true,
    ifr: false,
    pistas: {}
};
AEROPORTOS.SBJU = {
    iata: 'JDO',
    administrador: 'AENA',
    nome: 'Aeroporto Orlando Bezerra de Menezes',
    cidade: 'Juazeiro do Norte',
    estado: 'CE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBJV = {
    iata: 'JOI',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Lauro Carneiro de Loyola',
    cidade: 'Joinville',
    estado: 'SC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBKG = {
    iata: 'CPV',
    administrador: 'AENA',
    nome: 'Aeroporto Presidente João Suassuna',
    cidade: 'Campina Grande',
    estado: 'PB',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBKP = {
    iata: 'VCP',
    administrador: 'Aeroportos Brasil',
    nome: 'Aeroporto de Viracopos',
    cidade: 'Campinas',
    estado: 'SP',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBLO = {
    iata: 'LDB',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Governador José Richa',
    cidade: 'Londrina',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBMG = {
    iata: 'MGF',
    administrador: 'Prefeitura de Maringá',
    nome: 'Aeroporto Silvio Name Junior',
    cidade: 'Maringá',
    estado: 'PR',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBMO = {
    iata: 'MCZ',
    administrador: 'AENA',
    nome: 'Aeroporto Zumbi dos Palmares',
    cidade: 'Maceió',
    estado: 'AL',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBMQ = {
    iata: 'MCP',
    administrador: 'Infraero',
    nome: 'Aeroporto Alberto Alcolumbre',
    cidade: 'Macapá',
    estado: 'AP',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBNF = {
    iata: 'NVT',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Ministro Victor Konder',
    cidade: 'Navegantes',
    estado: 'SC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPA = {
    iata: 'POA',
    administrador: 'Fraport',
    nome: 'Aeroporto Salgado Filho',
    cidade: 'Porto Alegre',
    estado: 'PA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPJ = {
    iata: 'PMW',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Brigadeiro Lysias Rodrigues',
    cidade: 'Palmas',
    estado: 'TO',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPK = {
    iata: 'PET',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto João Simões Lopes Neto',
    cidade: 'Pelotas',
    estado: 'RS',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPL = {
    iata: 'PNZ',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Senador Nilo Coelho',
    cidade: 'Petrolina',
    estado: 'PE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPS = {
    iata: 'BPS',
    administrador: 'Prefeitura de Porto Seguro',
    nome: 'Aeroporto de Porto Seguro',
    cidade: 'Porto Seguro',
    estado: 'BA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBPV = {
    iata: 'PVH',
    administrador: 'VINCI',
    nome: 'Aeroporto Governador Jorge Teixeira de Oliveira',
    cidade: 'Porto Velho',
    estado: 'RO',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBRB = {
    iata: 'RBR',
    administrador: 'VINCI',
    nome: 'Aeroporto Plácido de Castro',
    cidade: 'Rio Branco',
    estado: 'AC',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBRD = {
    iata: 'ROO',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Municipal Maestro Marinho Franco',
    cidade: 'Rondonópolis',
    estado: 'MT',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBRF = {
    iata: 'REC',
    administrador: 'AENA',
    nome: 'Aeroporto de Guararapes - Gilberto Freyre',
    cidade: 'Recife',
    estado: 'PE',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBRJ = {
    iata: 'SDU',
    administrador: 'Infraero',
    nome: 'Aeroporto Santos Dumont',
    cidade: 'Rio de janeiro',
    estado: 'RJ',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSG = {
    iata: 'NAT',
    administrador: 'Inframérica',
    nome: 'Aeroporto de São Gonçalo do Amarante - Governador Aluizio Alves',
    cidade: 'Natal',
    estado: 'RN',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSI = {
    iata: 'OPS',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Presidente João Batista Figueiredo',
    cidade: 'Sinop',
    estado: 'MT',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSL = {
    iata: 'SLZ',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Marechal Cunha Machado',
    cidade: 'São Luiz',
    estado: 'MA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSN = {
    iata: 'STM',
    administrador: 'Infraero',
    nome: 'Aeroporto Maestro Wilson Fonseca',
    cidade: 'Santarém',
    estado: 'PA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSP = {
    iata: 'CGH',
    administrador: 'Infraero',
    nome: 'Aeroporto de Congonhas',
    cidade: 'São Paulo',
    estado: 'SP',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBSV = {
    iata: 'SSA',
    administrador: 'VINCI',
    nome: 'Aeroporto Deputado Luís Eduardo Magalhães',
    cidade: 'Salvador',
    estado: 'BA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBTC = {
    iata: 'UNA',
    administrador: 'SOCICAM',
    nome: 'Aeroporto de Una - Comandatuba (Hotel Transamérica)',
    cidade: 'Comandatuba',
    estado: 'BA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBTE = {
    iata: 'THE',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Senador Petronio Portella',
    cidade: 'Teresina',
    estado: 'PI',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBTF = {
    iata: 'TFF',
    administrador: 'VINCI',
    nome: 'Aeroporto Prefeito Orlando Marinho',
    cidade: 'Tefé',
    estado: 'AM',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBTT = {
    iata: 'TBT',
    administrador: 'VINCI',
    nome: 'Aeroporto de Tabatinga',
    cidade: 'Tabatinga',
    estado: 'AM',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBUG = {
    iata: 'URG',
    administrador: 'CCR Aeroportos',
    nome: 'Aeroporto Rubem Berta',
    cidade: 'Uruguaiana',
    estado: 'RS',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBUL = {
    iata: 'UDI',
    administrador: 'Infraero',
    nome: 'Aeroporto Ten. Cel. Av. César Bombonato',
    cidade: 'Uberlândia',
    estado: 'MG',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBVC = {
    iata: 'VDC',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Glauber de Andrade Rocha',
    cidade: 'Vitória da Conquista',
    estado: 'BA',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBVT = {
    iata: 'VIX',
    administrador: 'Zurich Airport Airport',
    nome: 'Aeroporto Eurico de Aguiar Salles',
    cidade: 'Vitória',
    estado: 'Estado',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};
AEROPORTOS.SBZM = {
    iata: 'IZA',
    administrador: 'SOCICAM',
    nome: 'Aeroporto Presidente Itamar Franco - Zona da Mata',
    cidade: 'Goianá',
    estado: 'MG',
    vfr_noturno: true,
    ifr: true,
    pistas: {}
};


// PISTAS
AEROPORTOS.SBAR.pistas.RWY_12_30 = {
    designativo: '12/30',
    comprimento: 2200,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBAT.pistas.RWY_04_22 = {
    designativo: '04/22', 
    comprimento: 2500, 
    largura: 30, 
    rclm: true, 
    rcll: false, 
    hirl: false, 
    rvr: 0, 
    min_dep_diurno: 800, 
    min_dep_noturno: 800
};
AEROPORTOS.SBBE.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 2800,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBBE.pistas.RWY_02_20 = {
    designativo: '02/20',
    comprimento: 1830,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBBG.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 1500,
    largura: 30,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBBH.pistas.RWY_13_31 = {
    designativo: '13/31',
    comprimento: 2364,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBBI.pistas.RWY_18_36 = {
    designativo: '18/36',
    comprimento: 1390,
    largura: 31,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBBR.pistas.RWY_11R_29L = {
    designativo: '11R/29L',
    comprimento: 3300,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBBR.pistas.RWY_11L_29R = {
    designativo: '11L/29R',
    comprimento: 3200,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 800
};
AEROPORTOS.SBBV.pistas.RWY_08_26 = {
    designativo: '08/26',
    comprimento: 2700,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBCA.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 1771,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCB.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 2550,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCF.pistas.RWY_16_34 = {
    designativo: '16/34',
    comprimento: 3600,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBCG.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 2600,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 800
};
AEROPORTOS.SBCH.pistas.RWY_11_29 = {
    designativo: '11/29',
    comprimento: 2060,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCT.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 2218,
    largura: 45,
    rclm: true,
    rcll: true,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBCT.pistas.RWY_11_29 = {
    designativo: '11/29',
    comprimento: 1798,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCX.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 1670,
    largura: 30,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCY.pistas.RWY_17_35 = {
    designativo: '17/35',
    comprimento: 2300,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBCZ.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 2400,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBEG.pistas.RWY_11_29 = {
    designativo: '11/29',
    comprimento: 2700,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBFI.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 2195,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 800
};
AEROPORTOS.SBFL.pistas.RWY_14_32 = {
    designativo: '14/32',
    comprimento: 2400,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBFN.pistas.RWY_12_30 = {
    designativo: '12/30',
    comprimento: 1845,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBFZ.pistas.RWY_13_31 = {
    designativo: '13/31',
    comprimento: 2755,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBGL.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 4000,
    largura: 45,
    rclm: true,
    rcll: true,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBGL.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 3180,
    largura: 47,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBGO.pistas.RWY_14_32 = {
    designativo: '14/32',
    comprimento: 2286,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBGR.pistas.RWY_10R_28L = {
    designativo: '10R/28L',
    comprimento: 3000,
    largura: 45,
    rclm: true,
    rcll: true,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 150,
    min_dep_noturno: 150
};
AEROPORTOS.SBGR.pistas.RWY_10L_28R = {
    designativo: '10L/28R',
    comprimento: 3700,
    largura: 45,
    rclm: true,
    rcll: true,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 150,
    min_dep_noturno: 150
};
AEROPORTOS.SBIL.pistas.RWY_11_29 = {
    designativo: '11/29',
    comprimento: 1577,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 5000,
    min_dep_noturno: 5000
};
AEROPORTOS.SBIZ.pistas.RWY_07_25 = {
    designativo: '07/25',
    comprimento: 1798,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBJE.pistas.RWY_08_26 = {
    designativo: '08/26',
    comprimento: 2200,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBJP.pistas.RWY_16_34 = {
    designativo: '16/34',
    comprimento: 2515,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBJR.pistas.RWY_03_21 = {
    designativo: '03/21',
    comprimento: 900,
    largura: 30,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 5000,
    min_dep_noturno: 5000
};
AEROPORTOS.SBJU.pistas.RWY_13_31 = {
    designativo: '13/31',
    comprimento: 1940,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBJV.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 1540,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBKG.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 1600,
    largura: 42,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBKP.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 3240,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBLO.pistas.RWY_13_31 = {
    designativo: '13/31',
    comprimento: 2100,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBMG.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 2380,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBMO.pistas.RWY_12_30 = {
    designativo: '12/30',
    comprimento: 2602,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBMQ.pistas.RWY_08_26 = {
    designativo: '08/26',
    comprimento: 2100,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBNF.pistas.RWY_07_25 = {
    designativo: '07/25',
    comprimento: 1701,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBPA.pistas.RWY_11_29 = {
    designativo: '11/29',
    comprimento: 3200,
    largura: 45,
    rclm: true,
    rcll: true,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBPJ.pistas.RWY_14_32 = {
    designativo: '14/32',
    comprimento: 2500,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBPK.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 1980,
    largura: 42,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBPL.pistas.RWY_13_31 = {
    designativo: '13/31',
    comprimento: 3250,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBPS.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 2000,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBPV.pistas.RWY_01_19 = {
    designativo: '01/19',
    comprimento: 2400,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBRB.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 2158,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBRD.pistas.RWY_02_20 = {
    designativo: '02/20', 
    comprimento: 1850, 
    largura: 30, 
    rclm: true, 
    rcll: false, 
    hirl: false, 
    rvr: 0, 
    min_dep_diurno: 800, 
    min_dep_noturno: 800
};
AEROPORTOS.SBRF.pistas.RWY_18_36 = {
    designativo: '18/36',
    comprimento: 3007,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBRJ.pistas.RWY_02R_20L = {
    designativo: '02R/20L',
    comprimento: 1323,
    largura: 42,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBSG.pistas.RWY_12_30 = {
    designativo: '12/30',
    comprimento: 3000,
    largura: 60,
    rclm: true,
    rcll: true,
    hirl: false,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 800
};
AEROPORTOS.SBSI.pistas.RWY_03_21 = {
    designativo: '03/21',
    comprimento: 1630,
    largura: 30,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBSL.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 2385,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 1,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBSL.pistas.RWY_09_27 = {
    designativo: '09/27',
    comprimento: 1464,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 500,
    min_dep_noturno: 800
};
AEROPORTOS.SBSN.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 2400,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBSP.pistas.RWY_17R_35L = {
    designativo: '17R/35L',
    comprimento: 1940,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBSV.pistas.RWY_10_28 = {
    designativo: '10/28',
    comprimento: 3003,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: true,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 350
};
AEROPORTOS.SBSV.pistas.RWY_17_35 = {
    designativo: '17/35',
    comprimento: 1518,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 5000,
    min_dep_noturno: 5000
};
AEROPORTOS.SBTC.pistas.RWY_02_20 = {
    designativo: '02/20', 
    comprimento: 2000, 
    largura: 30, 
    rclm: true, 
    rcll: false, 
    hirl: false, 
    rvr: 0, 
    min_dep_diurno: 800, 
    min_dep_noturno: 800
};
AEROPORTOS.SBTE.pistas.RWY_02_20 = {
    designativo: '02/20',
    comprimento: 2200,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBTF.pistas.RWY_15_33 = {
    designativo: '15/33', 
    comprimento: 2200, 
    largura: 45, 
    rclm: true, 
    rcll: false, 
    hirl: false, 
    vr: 0, 
    min_dep_diurno: 800, 
    min_dep_noturno: 800
};
AEROPORTOS.SBTT.pistas.RWY_12_30 = {
    designativo: '12/30', 
    comprimento: 2150, 
    largura: 32, 
    rclm: true, 
    rcll: false, 
    hirl: false, 
    rvr: 0, 
    min_dep_diurno: 800, 
    min_dep_noturno: 800
};
AEROPORTOS.SBUG.pistas.RWY_09_27 = {
    designativo: '09/27',
    comprimento: 1500,
    largura: 30,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBUL.pistas.RWY_04_22 = {
    designativo: '04/22',
    comprimento: 2100,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 2,
    min_dep_diurno: 350,
    min_dep_noturno: 800
};
AEROPORTOS.SBVC.pistas.RWY_15_33 = {
    designativo: '15/33',
    comprimento: 2100,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBVT.pistas.RWY_06_24 = {
    designativo: '06/24',
    comprimento: 1750,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBVT.pistas.RWY_02_20 = {
    designativo: '02/20',
    comprimento: 2058,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};
AEROPORTOS.SBZM.pistas.RWY_08_26 = {
    designativo: '08/26',
    comprimento: 2525,
    largura: 45,
    rclm: true,
    rcll: false,
    hirl: false,
    rvr: 0,
    min_dep_diurno: 800,
    min_dep_noturno: 800
};


// PROCEDIMENTOS
function adicionaProcedimento(icao, thr, procedimento, minVis, minTeto, och) {
    if (!PROCEDIMENTOS[icao]) PROCEDIMENTOS[icao] = {};
    if (!PROCEDIMENTOS[icao]['THR' + thr]) PROCEDIMENTOS[icao]['THR' + thr] = {};
    PROCEDIMENTOS[icao]['THR' + thr][procedimento] = {
        minVisibilidade: minVis,
        minTeto: minTeto,
        och: och
    };
}
adicionaProcedimento('SBAR', '12', 'RNAV', 1800, undefined, 400);
adicionaProcedimento('SBAR', '30', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBAT', '04', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBAT', '04', 'VOR', 1500, undefined, 400);
adicionaProcedimento('SBAT', '22', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBAT', '22', 'VOR', 2400, undefined, 600);
adicionaProcedimento('SBBE', '06', 'ILS', 700, undefined, 300);
adicionaProcedimento('SBBE', '06', 'RNAV', 1000, undefined, 400);
adicionaProcedimento('SBBE', '24', 'RNAV', 2400, undefined, 600);
adicionaProcedimento('SBBE', '02', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBBG', '06', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBBG', '24', 'RNP', 1800, undefined, 400);
adicionaProcedimento('SBBH', '13', 'LOC', 2300, undefined, 700);
adicionaProcedimento('SBBI', '36', 'RNAV', 2200, undefined, 500);
adicionaProcedimento('SBBR', '11R', 'ILS', 550, undefined, 300);
adicionaProcedimento('SBBR', '11R', 'RNAV', 1000, undefined, 400);
adicionaProcedimento('SBBR', '29L', 'ILS', 550, undefined, 300);
adicionaProcedimento('SBBR', '29L', 'RNAV', 850, undefined, 400);
adicionaProcedimento('SBBR', '11L', 'ILS', 600, undefined, 300);
adicionaProcedimento('SBBR', '11L', 'RNAV', 850, undefined, 400);
adicionaProcedimento('SBBR', '29R', 'RNAV', 1100, undefined, 400);
adicionaProcedimento('SBBV', '08', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBBV', '08', 'RNAV', 1000, undefined, 400);
adicionaProcedimento('SBBV', '26', 'RNAV', 1500, undefined, 400);
adicionaProcedimento('SBCA', '15', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBCA', '33', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBCB', '10', 'RNP', 1400, undefined, 400);
adicionaProcedimento('SBCB', '28', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBCF', '16', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBCF', '16', 'RNAV', 1000, undefined, 400);
adicionaProcedimento('SBCF', '34', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBCF', '34', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBCG', '06', 'ILS', 1100, undefined, 200);
adicionaProcedimento('SBCG', '06', 'RNAV', 1100, undefined, 300);
adicionaProcedimento('SBCG', '24', 'RNAV', 1100, undefined, 300);
adicionaProcedimento('SBCH', '11', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBCT', '15', 'ILS', 350, undefined, 100);
adicionaProcedimento('SBCT', '15', 'RNAV', 800, undefined, 400);
adicionaProcedimento('SBCT', '33', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBCT', '33', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBCT', '11', 'RNAV', 2200, undefined, 500);
adicionaProcedimento('SBCT', '29', 'RNAV', 2000, undefined, 500);
adicionaProcedimento('SBCX', '15', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBCX', '15', 'RNPAR', 1500, undefined, 400);
adicionaProcedimento('SBCX', '33', 'RNAV', 1500, undefined, 400);
adicionaProcedimento('SBCX', '33', 'RNPAR', 1500, undefined, 400);
adicionaProcedimento('SBCY', '17', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBCY', '35', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBCY', '35', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBCZ', '10', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBCZ', '28', 'RNP', 1400, undefined, 400);
adicionaProcedimento('SBEG', '11', 'ILS', 800, undefined, 300);
adicionaProcedimento('SBEG', '11', 'RNAV', 900, undefined, 400);
adicionaProcedimento('SBEG', '29', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBFI', '15', 'ILS', 1100, undefined, 200);
adicionaProcedimento('SBFI', '15', 'RNAV', 1250, undefined, 300);
adicionaProcedimento('SBFI', '33', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBFL', '14', 'ILS', 700, undefined, 200);
adicionaProcedimento('SBFL', '14', 'RNAV', 1100, undefined, 400);
adicionaProcedimento('SBFL', '32', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBFN', '12', 'RNAV', 3800, undefined, 900);
adicionaProcedimento('SBFN', '12', 'RNPAR', 2100, undefined, 500);
adicionaProcedimento('SBFN', '30', 'RNAV', 3800, undefined, 900);
adicionaProcedimento('SBFN', '30', 'RNPAR', 2900, undefined, 700);
adicionaProcedimento('SBFZ', '13', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBFZ', '13', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBFZ', '31', 'RNAV', 1550, undefined, 400);
adicionaProcedimento('SBGL', '10', 'ILS', 400, undefined, 100);
adicionaProcedimento('SBGL', '10', 'RNAV', 850, undefined, 400);
adicionaProcedimento('SBGL', '28', 'ILS', 1100, undefined, 200);
adicionaProcedimento('SBGL', '28', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBGL', '15', 'ILS', 700, undefined, 200);
adicionaProcedimento('SBGL', '15', 'RNAV', 1200, undefined, 500);
adicionaProcedimento('SBGL', '33', 'RNAV', 2100, undefined, 500);
adicionaProcedimento('SBGO', '14', 'RNAV', 1900, undefined, 400);
adicionaProcedimento('SBGO', '32', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBGR', '10R', 'ILS', 350, undefined, 100);
adicionaProcedimento('SBGR', '10R', 'RNAV', 1300, undefined, 500);
adicionaProcedimento('SBGR', '28L', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBGR', '28L', 'RNAV', 1200, undefined, 500);
adicionaProcedimento('SBGR', '10L', 'ILS', 350, undefined, 100);
adicionaProcedimento('SBGR', '10L', 'RNAV', 1400, undefined, 500);
adicionaProcedimento('SBGR', '10L', 'RNPAR', 1200, undefined, 500);
adicionaProcedimento('SBGR', '28R', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBGR', '28R', 'RNAV', 1200, undefined, 500);
adicionaProcedimento('SBIL', '11', 'RNP', 5000, 1000, 1000);
adicionaProcedimento('SBIL', '29', 'RNP', 5000, 1000, 1000);
adicionaProcedimento('SBIZ', '07', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBIZ', '25', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBJE', '08', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBJE', '26', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBJP', '16', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBJP', '34', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBJU', '13', 'RNP', 2000, undefined, 500);
adicionaProcedimento('SBJU', '31', 'RNP', 1900, undefined, 500);
adicionaProcedimento('SBJV', '15', 'RNAV', 2400, undefined, 600);
adicionaProcedimento('SBJV', '15', 'RNPAR', 2000, undefined, 500);
adicionaProcedimento('SBJV', '33', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBJV', '33', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBJV', '33', 'RNPAR', 1900, undefined, 500);
adicionaProcedimento('SBKG', '15', 'ILS', 2600, undefined, 600);
adicionaProcedimento('SBKG', '15', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBKG', '33', 'RNP', 1400, undefined, 400);
adicionaProcedimento('SBKP', '15', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBKP', '15', 'RNAV', 1100, undefined, 400);
adicionaProcedimento('SBKP', '15', 'RNPAR', 1000, undefined, 400);
adicionaProcedimento('SBKP', '33', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBKP', '33', 'RNPAR', 1700, undefined, 400);
adicionaProcedimento('SBLO', '13', 'RNPAR02', 1400, undefined, 300);
adicionaProcedimento('SBLO', '13', 'RNPAR03', 2600, undefined, 600);
adicionaProcedimento('SBLO', '31', 'RNPAR02', 1600, undefined, 400);
adicionaProcedimento('SBLO', '31', 'RNPAR03', 2200, undefined, 500);
adicionaProcedimento('SBLO', '13', 'RNP', 2500, undefined, 600);
adicionaProcedimento('SBLO', '31', 'RNP', 1400, undefined, 400);
adicionaProcedimento('SBMG', '10', 'RNAV', 1500, undefined, 400);
adicionaProcedimento('SBMG', '10', 'RNPAR', 1700, undefined, 400);
adicionaProcedimento('SBMG', '28', 'RNAV', 1800, undefined, 400);
adicionaProcedimento('SBMG', '28', 'RNPAR', 1400, undefined, 300);
adicionaProcedimento('SBMO', '12', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBMO', '12', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBMO', '30', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBMQ', '08', 'RNAV', 1800, undefined, 400);
adicionaProcedimento('SBMQ', '26', 'RNAV', 2100, undefined, 500);
adicionaProcedimento('SBNF', '07', 'RNAV', 2400, undefined, 600);
adicionaProcedimento('SBNF', '07', 'RNPAR', 2400, undefined, 600);
adicionaProcedimento('SBNF', '25', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBNF', '25', 'RNPAR', 1800, undefined, 400);
adicionaProcedimento('SBPA', '11', 'ILS', 350, undefined, 100);
adicionaProcedimento('SBPA', '11', 'RNAV', 1100, undefined, 400);
adicionaProcedimento('SBPA', '29', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBPJ', '14', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBPJ', '32', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBPK', '06', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBPK', '24', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBPL', '13', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBPL', '31', 'RNP', 1400, undefined, 300);
adicionaProcedimento('SBPS', '10', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBPV', '01', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBPV', '19', 'ILS', 1300, undefined, 300);
adicionaProcedimento('SBPV', '19', 'RNAV', 1400, undefined, 400);
adicionaProcedimento('SBRB', '06', 'ILS', 550, undefined, 300);
adicionaProcedimento('SBRB', '06', 'RNAV', 1000, undefined, 400);
adicionaProcedimento('SBRB', '24', 'RNAV', 1900, undefined, 500);
adicionaProcedimento('SBRD', '02', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBRD', '20', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBRF', '18', 'ILS', 1100, undefined, 200);
adicionaProcedimento('SBRF', '18', 'RNAV', 2200, undefined, 500);
adicionaProcedimento('SBRF', '36', 'RNAV', 2200, undefined, 500);
adicionaProcedimento('SBRJ', '02R', 'RNAV', 4800, undefined, 1200);
adicionaProcedimento('SBRJ', '02R', 'RNPAR', 1600, undefined, 300);
adicionaProcedimento('SBRJ', '20L', 'RNAV', 4400, undefined, 700);
adicionaProcedimento('SBRJ', '20L', 'RNPAR', 1600, undefined, 300);
adicionaProcedimento('SBSG', '12', 'ILS', 550, undefined, 300);
adicionaProcedimento('SBSG', '12', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBSG', '30', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBSI', '03', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBSI', '21', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBSL', '06', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBSL', '06', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBSL', '24', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBSN', '10', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBSN', '10', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBSP', '17R', 'ILS', 550, undefined, 200);
adicionaProcedimento('SBSP', '17R', 'RNAV', 1400, undefined, 500);
adicionaProcedimento('SBSP', '17R', 'RNPAR', 1400, undefined, 500);
adicionaProcedimento('SBSP', '35L', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBSP', '35L', 'RNAV', 1900, undefined, 500);
adicionaProcedimento('SBSP', '35L', 'RNPAR', 2000, undefined, 500);
adicionaProcedimento('SBSV', '10', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBSV', '10', 'RNAV', 1700, undefined, 400);
adicionaProcedimento('SBSV', '28', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBSV', '28', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBSV', '17', 'RNAV', 5000, undefined, 1000);
adicionaProcedimento('SBTC', '02', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBTC', '20', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBTE', '02', 'RNP', 1800, undefined, 400);
adicionaProcedimento('SBTE', '20', 'RNP', 1900, undefined, 500);
adicionaProcedimento('SBTF', '15', 'RNP', 1700, undefined, 400);
adicionaProcedimento('SBTF', '33', 'RNP', 1500, undefined, 400);
adicionaProcedimento('SBTT', '12', 'RNP', 1800, undefined, 400);
adicionaProcedimento('SBTT', '30', 'RNP', 1600, undefined, 400);
adicionaProcedimento('SBUG', '27', 'RNAV', 1600, undefined, 400);
adicionaProcedimento('SBUL', '04', 'ILS', 1200, undefined, 200);
adicionaProcedimento('SBUL', '04', 'RNAV', 1300, undefined, 300);
adicionaProcedimento('SBUL', '22', 'RNAV', 1400, undefined, 300);
adicionaProcedimento('SBVC', '15', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBVC', '33', 'RNP', 1300, undefined, 300);
adicionaProcedimento('SBVT', '06', 'RNAV', 4800, undefined, 1100);
adicionaProcedimento('SBVT', '24', 'ILS', 1400, undefined, 300);
adicionaProcedimento('SBVT', '24', 'RNAV', 2100, undefined, 500);
adicionaProcedimento('SBVT', '02', 'RNAV', 1800, undefined, 400);
adicionaProcedimento('SBVT', '20', 'RNPAR', 1900, undefined, 500);
adicionaProcedimento('SBZM', '08', 'RNP', 2000, undefined, 500);
adicionaProcedimento('SBZM', '26', 'RNP', 2400, undefined, 600);

const DADOS = {
    getAeroporto(icao) {
        return AEROPORTOS[icao];
    },
    getPistas(icao) {
        let pistas = [];
        Object.values(AEROPORTOS[icao].pistas).forEach(pista => pistas.push(pista.designativo));
        return pistas;
    },
    getPista(icao, pista) {
        return AEROPORTOS[icao].pistas['RWY_' + pista.split('/').join('_')];
    },
    getAllIcao() {
        return Object.keys(AEROPORTOS);
    },
    getCabeceiras(icao) {
        let cabeceiras = [];
        Object.values(AEROPORTOS[icao].pistas).forEach(pista => cabeceiras = [...cabeceiras, ...pista.designativo.split('/')]);
        return cabeceiras;
    },
    getTiposProcedimentos(icao, thr) {
        if (this.getCabeceiras(icao).indexOf(thr + '') === -1) return null;
        if (!PROCEDIMENTOS[icao]['THR' + thr]) return null;
        return Object.keys(PROCEDIMENTOS[icao]['THR' + thr]);
    },
    getProcedimentos(icao, thr) {
        if (this.getCabeceiras(icao).indexOf(thr + '') === -1) return null;
        if (!PROCEDIMENTOS[icao] || !PROCEDIMENTOS[icao]['THR' + thr]) return null;
        return PROCEDIMENTOS[icao]['THR' + thr];
    },
    getProcedimento(icao, thr, procedimento) {
        if (this.getTiposProcedimentos(icao, thr).indexOf(procedimento) === -1) return null;
        return PROCEDIMENTOS[icao]['THR' + thr][procedimento];
    },
    getMinimosDep(icao, pista) {
        let rwy = this.getPista(icao, pista);
        return {
            diurno: rwy.min_dep_diurno,
            noturno: rwy.min_dep_noturno
        };
    },
    getPistaDaCabeceira(thr) {
        thr = thr + '';
        let left = false, right = false;
        if (thr.indexOf('L') > -1) left = true;
        if (thr.indexOf('R') > -1) right = true;
        let numero = Number(thr.replace('L', '').replace('R', ''));
        let oposta = (numero < 19) ? numero + 18 : numero - 18;
        if (oposta < 10) oposta = '0' + oposta;
        let letraOposta = '';
        if (left) letraOposta = 'R';
        if (right) letraOposta = 'L';
        return (numero < oposta) ? thr + '/' + oposta + letraOposta : oposta + letraOposta + '/' + thr;
    },
    getMinimosDepTHR(icao, thr) {
        let rwy = this.getPistaDaCabeceira(thr);
        return this.getMinimosDep(icao, rwy);
    },
    logMinimos(icao) {
        this.getCabeceiras(icao).forEach(thr => console.log(thr, this.getProcedimentos(icao, thr)))
    }
}