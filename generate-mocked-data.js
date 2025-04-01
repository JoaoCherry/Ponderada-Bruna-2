const REGIONS = [
  "DIADEMA",
  "MAUA",
  "RIBEIRAO PIRES",
  "RIO GRANDE DA SERRA",
  "SANTO ANDRE",
  "SAO BERNARDO DO CAMPO",
  "SAO CAETANO DO SUL",
  "AGUAI",
  "AMERICANA",
  "AMPARO",
  "APARECIDA",
  "ARAPEI",
  "ARARAS",
  "AREIAS",
  "ARTUR NOGUEIRA",
  "ATIBAIA",
  "BANANAL",
  "BARUERI",
  "BOM JESUS DOS PERDOES",
  "BRAGANCA PAULISTA",
  "CABREUVA",
  "CACAPAVA",
  "CACHOEIRA PAULISTA",
  "CAIEIRAS",
  "CAJAMAR",
  "CAMPINAS",
  "CAMPO LIMPO PAULISTA",
  "CAMPOS DO JORDAO",
  "CANAS",
  "CAPIVARI",
  "CARAGUATATUBA",
  "CARAPICUIBA",
  "CONCHAL",
  "CORDEIROPOLIS",
  "COSMOPOLIS",
  "COTIA",
  "CRUZEIRO",
  "CUBATAO",
  "CUNHA",
  "ALTO DE PINHEIROS",
  "BARRA FUNDA",
  "BELA VISTA",
  "BOM RETIRO",
  "BUTANTA",
  "CAMBUCI",
  "CONSOLACAO",
  "ITAIM BIBI",
  "JAGUARE",
  "JARDIM PAULISTA",
  "LAPA",
  "LIBERDADE",
  "MORUMBI",
  "PERDIZES",
  "PINHEIROS",
  "RAPOSO TAVARES",
  "REPUBLICA",
  "RIO PEQUENO",
  "SANTA CECILIA",
  "SE",
  "TABOAO DA SERRA",
  "VILA ANDRADE",
  "VILA LEOPOLDINA",
  "VILA SONIA",
  "ELIAS FAUSTO",
  "EMBU",
  "ENGENHEIRO COELHO",
  "ESTIVA GERBI",
  "FRANCISCO MORATO",
  "FRANCO DA ROCHA",
  "GUARAREMA",
  "GUARATINGUETA",
  "HOLAMBRA",
  "HORTOLANDIA",
  "IGARATA",
  "INDAIATUBA",
  "IPEUNA",
  "IRACEMAPOLIS",
  "ITAPECERICA DA SERRA",
  "ITAPEVI",
  "ITATIBA",
  "ITUPEVA",
  "JACAREI",
  "JAGUARIUNA",
  "JAMBEIRO",
  "JANDIRA",
  "JARINU",
  "JUNDIAI",
  "LAGOINHA",
  "LAVRINHAS",
  "LEME",
  "LIMEIRA",
  "LORENA",
  "LOUVEIRA",
  "MAIRIPORA",
  "MOCOCA",
  "MOGI DAS CRUZES",
  "MOGI-GUACU",
  "MOGI-MIRIM",
  "MOMBUCA",
  "MONTE MOR",
  "MONTEIRO LOBATO",
  "MORUNGABA",
  "NATIVIDADE DA SERRA",
  "NOVA ODESSA",
  "OSASCO",
  "PARAIBUNA",
  "PAULINIA",
  "PEDREIRA",
  "PINDAMONHANGABA",
  "PIQUETE",
  "PIRACICABA",
  "PIRAPORA DO BOM JESUS",
  "PIRASSUNUNGA",
  "POTIM",
  "QUELUZ",
  "RAFARD",
  "REDENCAO DA SERRA",
  "RIO CLARO",
  "RIO DAS PEDRAS",
  "ROSEIRA",
  "SUZANO",
  "ANHANGUERA",
  "BRASILANDIA",
  "CACHOEIRINHA",
  "CASA VERDE",
  "FREGUESIA DO O",
  "JACANA",
  "JAGUARA",
  "JARAGUA",
  "LIMAO",
  "MANDAQUI",
  "PERUS",
  "PIRITUBA",
  "SANTANA",
  "SAO DOMINGOS",
  "TREMEMBE",
  "TUCURUVI",
  "VILA GUILHERME - VILA ISOLINA",
  "VILA MARIA",
  "VILA MEDEIROS",
  "CAMPO BELO",
  "CAMPO GRANDE",
  "CAMPO LIMPO",
  "CAPAO REDONDO",
  "CIDADE ADEMAR",
  "CID DUTRA",
  "CURSINO",
  "GRAJAU",
  "JABAQUARA",
  "JARDIM SAO LUIS",
  "MARCILAC",
  "MOEMA",
  "PARELHEIROS",
  "PEDREIRA",
  "SANTO AMARO",
  "SAUDE - Planalto Paulista",
  "SOCORRO",
  "VILA MARIANA",
  "SALTINHO",
  "SANTA BARBARA DOESTE",
  "SANTA BRANCA",
  "SANTA GERTRUDES",
  "SANTA ISABEL",
  "SANTANA DE PARNAIBA",
  "SANTO ANTONIO DA POSSE",
  "SANTO ANTONIO DO PINHAL",
  "SANTOS",
  "SAO JOAO DA BOA VISTA",
  "SAO JOSE DO BARREIRO",
  "SAO JOSE DOS CAMPOS",
  "SAO LUIS DO PARAITINGA",
  "SAO VICENTE",
  "SILVEIRAS",
  "SUMARE",
  "TAUBATE",
  "TREMEMBE",
  "VALINHOS",
  "VARGEM GRANDE DO SUL",
  "VARGEM GRANDE PAULISTA",
  "VARZEA PAULISTA",
  "VINHEDO",
];

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min, max) => Math.random() * (max - min) + min;

const generateDailyStats = (day) => {
  const stats = {
    dia: day,
    tempoMedioPorTipo: {},
    quantidadePorTipo: {},
  };
  const tipos = ["FALTA_DE_GÁS", "VAZAMENTO_INTERNO", "VAZAMENTO_NA_REDE"];

  tipos.forEach((tipo) => {
    const quantidade = randomInt(0, 40);
    let tempoMedio;
    if (tipo === "FALTA_DE_GÁS") tempoMedio = randomFloat(30, 300);
    else tempoMedio = randomFloat(10, 90);

    stats.tempoMedioPorTipo[tipo] = quantidade > 0 ? tempoMedio : 0;
    stats.quantidadePorTipo[tipo] = quantidade;
  });

  return stats;
};

const generateMockData = () => {
  const data = {
    mes: "março",
    ano: 2025,
    estatisticasRegionais: {},
  };

  REGIONS.forEach((region) => {
    data.estatisticasRegionais[region] = {
      estatisticasDiarias: Array.from({ length: 31 }, (_, i) =>
        generateDailyStats(i + 1)
      ),
    };
  });

  return data;
};

const fs = require("fs");
const path = require("path");
const mockData = generateMockData();
const filePath = path.join(__dirname, "mockData.json");

fs.writeFile(filePath, JSON.stringify(generateMockData(), null, 2), (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("Mock data generated successfully!");
  }
});
