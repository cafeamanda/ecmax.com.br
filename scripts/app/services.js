'use strict';

angular.module('axialApp')

.factory('productsFactory', function() {

  var productsfac = {};

  var spasyproducts = [
    {
      name:"Expansor do balão",
      filename:"expansor-do-balao.png",
      code:"SWMP"
    },
    {
      name:"Agulha de medula óssea",
      filename:"agulha-de-medula-ossea.png",
      code:"SWMVP"
    },
    {
      name:"Estilete",
      filename:"estilete.png",
      code:"SWMVP"
    },
    {
      name:"Cânula de trabalho",
      filename:"canula-de-trabalho.png",
      code:"SWM-2"
    },
    {
      name:"Cânula",
      filename:"canula.png",
      code:"SWM-2"
    },
    {
      name:"Expansor da cânula",
      filename:"expansor-de-canula.png",
      code:"SWM-2"
    },
    {
      name:"Broca para osso",
      filename:"broca-para-osso.png",
      code:"SWM-3"
    },
    {
      name:"Preenchedor de cimento",
      filename:"preenchedor-de-cimento.png",
      code:"SWM-4"
    },
    {
      name:"Enchedor",
      filename:"enchedor.png",
      code:"SWM-4"
    },
    {
      name:"Empurrador",
      filename:"empurrador.png",
      code:"SWM-4"
    },
    {
      name:"Fio-guia",
      filename:"fio-guia.png",
      code:"SWM-1"
    }
  ]

  var practicaldissecproducts = [
    {
      name:"Espéculo nasal",
      filename:"especulo-nasal",
      description:""
    },
    {
      name:"Sugador endonasal",
      filename:"sugador-endonasal",
      description:"Aspirador nasal em região de cavum, permite sucção oferecendo maior área de trabalho ao cirurgião."
    },
    {
      name:"Tesoura reta simples",
      filename:"tesoura-reta-simples",
      description:"Tesoura reta de ação simples com proteção esférica com cabo simples."
    },
    {
      name:"Tesoura reta dupla",
      filename:"tesoura-reta-dupla",
      description:"Tesoura reta de dupla ação com cabo simples"
    },
    {
      name:"Pinça Maryland",
      filename:"pinca-maryland-cabo-ratchet",
      description:"Pinça Maryland com cabo Ratchet"
    }
  ]

  var practicalendoscoproducts = [
    {
      name:"Micro-dissector arterial",
      filename:"micro-dissector-arterial.png",
      description:"Utilizado na dissecção de artérias intranasais e da base do crânio como as artérias esfenopalatina e etmoidal anterior."
    },
    {
      name:"Espátula",
      filename:"espatula.png",
      description:"Usado como afastor e bisturi circular para incisões na mucosa nasal incluindo trabéculas ósseas e afastamento do tecido."
    },
    {
      name:"Micro-cureta angulada",
      filename:"micro-cureta-angulada.png",
      description:"Usado para ressecções ósseas localizadas principalmente no seio frontal."
    },
    {
      name:"Micro-cureta",
      filename:"micro-cureta.png",
      description:"Usado para ressecções ósseas localizadas na região intranasal."
    },
    {
      name:"Micro-bisturi curvo",
      filename:"micro-bisturi-curvo.png",
      description:"Usado para incisões e acesso ao seio frontal e órbita."
    },
    {
      name:"Micro-bisturi",
      filename:"micro-bisturi.png",
      description:"Usado para incisões e acesso à mucosa nasal."
    },
    {
      name:"Micro-escopo",
      filename:"micro-escopo.png",
      description:"Usado para ressecções ósseas no septo ou qualquer estrutura anatômica."
    },
    {
      name:"Micro-escopo angulado",
      filename:"micro-escopo-angulado.png",
      description:"Usado para ressecções ósseas no recesso frontal e seio esfenoidal."
    },
    {
      name:"Camisa de ótica 0˚",
      filename:"camisa-de-otica-0.png",
      description:"Usado para lavagem controlada da lente e aspiração pela mesma camisa, controlada externamente a função desejada. Preserva e protege o corpo da ótica."
    },
    {
      name:"Descolador com aspiração",
      filename:"descolador-com-aspiracao.png",
      description:"Usado como DESCOLADOR, com vantagem de aspirar sangue e outros resíduos, acompanhado de fio de remoção nos momentos de entupimento da cânula."
    }
  ]

  var zeniusproducts = [
    {
      name:"Tornillos de ajuste",
      filename:"tornillos-de-ajuste.png",
      obs:"Compatible con todos los tornillos",
      model:[
        {
          type:"",
          code:"SA095"
        }
      ]
    },
    {
      name:"Tornillos pediculares",
      filename:"tornillos-pediculares.png",
      obs:"Diámetros disponibles: 4.0-8.5mm",
      model:[
        {
          type:"Monoaxial mono",
          code:"SMO"
        },
        {
          type:"Monoaxial reducción",
          code:"SRM"
        },
        {
          type:"Monoaxial canulada",
          code:"SCM"
        },
        {
          type:"Poliaxial poly",
          code:"SPO"
        },
        {
          type:"Poliaxial reducción",
          code:"SRP"
        },
        {
          type:"Poliaxial canulada",
          code:"SCP"
        }
      ]
    },
    {
      name:"Barras",
      filename:"barras.png",
      obs:"Mayor longitud de disponible 500mm",
      model:[
        {
          type:"Barras rectas",
          code:"R"
        },
        {
          type:"Barras precontorneadas",
          code:"BR"
        }
      ]
    },
    {
      name:"Conectores transversales",
      filename:"conectores-transversales.png",
      obs:"",
      model:[
        {
          type:"41mm",
          code:"CLC141"
        },
        {
          type:"46mm",
          code:"CLC146"
        },
        {
          type:"51mm",
          code:"CLC151"
        },
        {
          type:"56mm",
          code:"CLC156"
        },
        {
          type:"61mm",
          code:"CLC161"
        },
        {
          type:"66mm",
          code:"CLC166"
        }
      ]
    },
    {
      name:"Palanca para tornillos",
      filename:"palanca-para-tornillos.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NCSL-002"
        }
      ]
    },
    {
      name:"Marcador pedicular",
      filename:"marcador-pedicular.png",
      obs:"",
      model:[
        {
          type:"Con punta",
          code:"NCGT-002"
        },
        {
          type:"Sin punta",
          code:"NCGN-002"
        }
      ]
    },
    {
      name:"Probador",
      filename:"probador.png",
      obs:"",
      model:[
        {
          type:"Doble punta",
          code:"NCTD-101"
        },
        {
          type:"Punta sencilla",
          code:"NCTS-101"
        }
      ]
    },
    {
      name:"Sonda pedicular recta",
      filename:"sonda-pedicular-recta.png",
      obs:"",
      model:[
        {
          type:"Roma delgada",
          code:"NCPN-S11"
        },
        {
          type:"Roma ancha",
          code:"NCPW-S11"
        },
        {
          type:"Toracica",
          code:"NCPK-S11"
        }
      ]
    },
    {
      name:"Sonda pedicular curva",
      filename:"sonda-pedicular-curva.png",
      obs:"",
      model:[
        {
          type:"Toracica",
          code:"NCPK-C11"
        }
      ]
    },
    {
      name:"Impactador fijo",
      filename:"impactador-fijo.png",
      obs:"Tamaños disponibles: 4.0-8.5mm / Canulado disponible desde 5.5mm.",
      model:[
        {
          type:"4.5mm",
          code:"NCTT-045"
        },
        {
          type:"5.5mm",
          code:"NCTT-055"
        },
        {
          type:"6.5mm",
          code:"NCTT-065"
        }
      ]
    },
    {
      name:"Impactador modular",
      filename:"impactador-modular.png",
      obs:"Tamaños disponibles: 4.0-8.5mm / Canulado disponible desde 5.5mm.",
      model:[
        {
          type:"4.5mm",
          code:"NCTM-145"
        },
        {
          type:"5.5mm",
          code:"NCTM-155"
        },
        {
          type:"6.5mm",
          code:"NCTM-165"
        }
      ]
    },
    {
      name:"Punzon Lumbar",
      filename:"punzon-lumbar.png",
      obs:"Tipo Toracico y Lumbar disponibles",
      model:[
        {
          type:"5mm",
          code:"NCAW-L05"
        },
        {
          type:"10mm",
          code:"NCAW-L10"
        },
        {
          type:"15mm",
          code:"NCAW-L15"
        },
        {
          type:"20mm",
          code:"NCAW-L20"
        },
        {
          type:"25mm",
          code:"NCAW-L25"
        }
      ]
    },
    {
      name:"Insertor",
      filename:"insertor.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZIR-002"
        }
      ]
    },
    {
      name:"Iniciador atornillador Punta sencilla",
      filename:"iniciador-atornillador-punta-sencilla.png",
      obs:"",
      model:[
        {
          type:"Punta girada",
          code:"NZSS-T03"
        },
        {
          type:"Punta recta",
          code:"NZSS-001"
        }
      ]
    },
    {
      name:"Iniciador atornillador Doble punta",
      filename:"iniciador-atornillador-doble-punta.png",
      obs:"",
      model:[
        {
          type:"Punta girada",
          code:"NZSO-T03"
        },
        {
          type:"Punta recta",
          code:"NZSO-001"
        }
      ]
    },
    {
      name:"Torque Wrench (Final Tightener)",
      filename:"torque-wrench-final-tightener.png",
      obs:"",
      model:[
        {
          type:"Twisted Tip",
          code:"NZTW-T03"
        },
        {
          type:"Straight Tip",
          code:"NZTW-S03"
        }
      ]
    },
    {
      name:"Llave anti torque",
      filename:"llave-anti-torque.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZAT-202"
        }
      ]
    },
    {
      name:"Atornillador de ajuste (Llave T)",
      filename:"atornillador-de-ajuste-llave-t.png",
      obs:"",
      model:[
        {
          type:"Punta recta",
          code:"NZSD-S03"
        },
        {
          type:"Punta girada",
          code:"NZSD-T03"
        }
      ]
    },
    {
      name:"Doblador de barras",
      filename:"doblador-de-barras.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZRB-101"
        }
      ]
    },
    {
      name:"Portabarras",
      filename:"portabarras.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZRH-002"
        }
      ]
    },
    {
      name:"Desrotador",
      filename:"desrotador.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZRD-002"
        }
      ]
    },
    {
      name:"Rotador de barra",
      filename:"rotador-de-barra.png",
      obs:"",
      model:[
        {
          type:"Hexagonal",
          code:"NCRH-001"
        },
        {
          type:"Hueco",
          code:"NCRO-001"
        }
      ]
    },
    {
      name:"Horquilla",
      filename:"horquilla.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZRF-002"
        }
      ]
    },
    {
      name:"Empujador",
      filename:"empujador.png",
      obs:"",
      model:[
        {
          type:"5.5mm Rod",
          code:"NZRP-002"
        }
      ]
    },
    {
      name:"Compresor",
      filename:"compresor.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZCO-101"
        },
        {
          type:"Paralelo",
          code:"NZCO-002"
        }
      ]
    },
    {
      name:"Distractor",
      filename:"distractor.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZDR-101"
        },
        {
          type:"Paralelo",
          code:"NZDR-002"
        }
      ]
    },
    {
      name:"Ajustador de cabeza",
      filename:"ajustador-de-cabeza.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZFD-002"
        }
      ]
    },
    {
      name:"Removedor de lengueta",
      filename:"removedor-de-lengueta.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZRR-001"
        }
      ]
    },
    {
      name:"Persuador",
      filename:"persuador.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NZPS-002"
        }
      ]
    },
    {
      name:"Atornillador conector trans",
      filename:"atornillador-conector-trans.png",
      obs:"",
      model:[
        {
          type:"Mango T",
          code:"NZCT-101"
        },
        {
          type:"Mango I",
          code:"NZCD-002"
        }
      ]
    },
    {
      name:"Mango T",
      filename:"mango-t-aterrajador.png",
      obs:"",
      model:[
        {
          type:"Aterrajador",
          code:"NNRT-201"
        }
      ]
    },
    {
      name:"Mango aterrajador recto",
      filename:"mango-aterrajador-recto.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRI-201"
        }
      ]
    },
    {
      name:"Atornillador monoaxial",
      filename:"atornillador-monoaxial.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZMD-101"
        },
        {
          type:"Corto",
          code:"NZMD-401"
        },
        {
          type:"Canulado",
          code:"NZCM-101"
        }
      ]
    },
    {
      name:"Atornillador modular monoaxial",
      filename:"atornillador-modular-monoaxial.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZMD-211"
        },
        {
          type:"Corto",
          code:"NZMD-311"
        },
        {
          type:"Canulado",
          code:"NZCM-211"
        }
      ]
    },
    {
      name:"Atornillador poliaxial",
      filename:"atornillador-poliaxial.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZPD-101"
        },
        {
          type:"Corto",
          code:"NZPD-401"
        },
        {
          type:"Canulado",
          code:"NZCP-101"
        }
      ]
    },
    {
      name:"Atornillador modular poliaxial",
      filename:"atornillador-modular-poliaxial.png",
      obs:"",
      model:[
        {
          type:"Estandar",
          code:"NZPD-211"
        },
        {
          type:"Corto",
          code:"NZPD-311"
        },
        {
          type:"Canulado",
          code:"NZCP-211"
        }
      ]
    },
  ]

  var waveflexproducts = [
    {
      name:"Ajustador de cabeza",
      filename:"ajustador-de-cabeza.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNFD-002"
        }
      ]
    },
    {
      name:"Anti torque wrench",
      filename:"anti-torque-wrench.png",
      obs:"",
      model:[
        {
          type:"Para barra 6.0",
          code:"NNAT-202"
        },
        {
          type:"Para barra WX",
          code:"NWAT-102"
        }
      ]
    },
    {
      name:"Barra de empuje",
      filename:"barra-de-empuje.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRD-002"
        }
      ]
    },
    {
      name:"Barra derotator",
      filename:"barra-derotator.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRD-002"
        }
      ]
    },
    {
      name:"Barra tenedor",
      filename:"barra-tenedor.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRF-002"
        }
      ]
    },
    {
      name:"Barra titular",
      filename:"barra-titular.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NWRH-010"
        }
      ]
    },
    {
      name:"Barras",
      filename:"barras.png",
      obs:"Barras en aleación de titanio",
      model:[
        {
          type:"Doble onda",
          code:"WS"
        },
        {
          type:"Triple onda",
          code:"WL"
        }
      ]
    },
    {
      name:"Compresor",
      filename:"compresor.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNCO-101"
        },
        {
          type:"Paralelo",
          code:"NNCO-002"
        },
        {
          type:"Largo",
          code:"NNCO-201"
        }
      ]
    },
    {
      name:"Controlador enlace cruzado",
      filename:"controlador-enlace-cruzado.png",
      obs:"",
      model:[
        {
          type:"Mango T",
          code:"NNCT-101"
        },
        {
          type:"Mango I",
          code:"NNCD-002"
        }
      ]
    },
    {
      name:"Destornillador modular mono axial",
      filename:"destornillador-modular-mono-axial.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNMD-211"
        },
        {
          type:"Corto",
          code:"NNMD-311"
        },
        {
          type:"Canalado",
          code:"NNCM-211"
        }
      ]
    },
    {
      name:"Destornillador modular poli axial",
      filename:"destornillador-mono-axial.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNPD-211"
        },
        {
          type:"Corto",
          code:"NNPD-311"
        },
        {
          type:"Canalado",
          code:"NNCP-211"
        }
      ]
    },
    {
      name:"Destornillador mono axial",
      filename:"destornillador-mono-axial.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNMD-101"
        },
        {
          type:"Corto",
          code:"NNMD-401"
        },
        {
          type:"Canalado",
          code:"NNCM-101"
        }
      ]
    },
    {
      name:"Destornillador poli axial",
      filename:"destornillador-poli-axial.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNPD-101"
        },
        {
          type:"Corto",
          code:"NNPD-401"
        },
        {
          type:"Canalado",
          code:"NNCP-101"
        }
      ]
    },
    {
      name:"Distractor",
      filename:"distractor.png",
      obs:"",
      model:[
        {
          type:"Estándar",
          code:"NNDR-101"
        },
        {
          type:"Paralelo",
          code:"NNDR-002"
        },
        {
          type:"Largo",
          code:"NNDR-201"
        }
      ]
    },
    {
      name:"Enlace cruzado",
      filename:"enlace-cruzado.png",
      obs:"",
      model:[
        {
          type:"41mm",
          code:"TR041"
        },
        {
          type:"46mm",
          code:"TR046"
        },
        {
          type:"51mm",
          code:"TR051"
        },
        {
          type:"56mm",
          code:"TR056"
        },
        {
          type:"61mm",
          code:"TR061"
        },
        {
          type:"66mm",
          code:"TR066"
        }
      ]
    },
    {
      name:"Insertor",
      filename:"insertor.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNIR-002"
        }
      ]
    },
    {
      name:"Llave fijadora",
      filename:"llave-fijadora.png",
      obs:"",
      model:[
        {
          type:"4.5mm",
          code:"NCTT-045"
        },
        {
          type:"5.5mm",
          code:"NCTT-055"
        },
        {
          type:"6.5mm",
          code:"NCTT-065"
        }
      ]
    },
    {
      name:"Llave modular",
      filename:"llave-modular.png",
      obs:"",
      model:[
        {
          type:"4.5mm",
          code:"NCTM-145"
        },
        {
          type:"5.5mm",
          code:"NCTM-155"
        },
        {
          type:"6.5mm",
          code:"NCTM-165"
        }
      ]
    },
    {
      name:"Mango recto",
      filename:"mango-recto.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRI-201"
        }
      ]
    },
    {
      name:"Mango T",
      filename:"mango-t.png",
      obs:"",
      model:[
        {
          type:"Aterrajador",
          code:"NNRT-201"
        }
      ]
    },
    {
      name:"Marcadores pediculares",
      filename:"marcadores-pediculares.png",
      obs:"",
      model:[
        {
          type:"Tipo punta",
          code:"NCGT-002"
        },
        {
          type:"Tipo sin punta",
          code:"NCGN-002"
        }
      ]
    },
    {
      name:"Palanca del tornillo",
      filename:"palanca-del-tornillo.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NCSL-002"
        }
      ]
    },
    {
      name:"Persuasor",
      filename:"persuasor.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNPS-002"
        }
      ]
    },
    {
      name:"Probador",
      filename:"probador.png",
      obs:"",
      model:[
        {
          type:"Doble terminación",
          code:"NCTD-101"
        },
        {
          type:"Terminación sencilla",
          code:"NCTS-101"
        }
      ]
    },
    {
      name:"Punzón Lumbar",
      filename:"punzon-lumbar.png",
      obs:"Tipo Toracico y Lumbar disponibles",
      model:[
        {
          type:"5mm",
          code:"NCAW-L05"
        },
        {
          type:"10mm",
          code:"NCAW-L10"
        },
        {
          type:"15mm",
          code:"NCAW-L15"
        },
        {
          type:"20mm",
          code:"NCAW-L20"
        },
        {
          type:"25mm",
          code:"NCAW-L25"
        }
      ]
    },
    {
      name:"Removedor reducción de llave",
      filename:"removedor-reduccion-de-llave.png",
      obs:"",
      model:[
        {
          type:"",
          code:"NNRR-001"
        }
      ]
    },
    {
      name:"Sistema destornillador (T-wrench)",
      filename:"sistema-destornillador-t-wrench.png",
      obs:"",
      model:[
        {
          type:"Punta torneada",
          code:"NNSD-S03"
        },
        {
          type:"Punta recta",
          code:"NNSD-T03"
        }
      ]
    },
    {
      name:"Sonda pedicular curva",
      filename:"sonda-pedicular-curva.png",
      obs:"",
      model:[
        {
          type:"Torácica",
          code:"NCPK-C11"
        }
      ]
    },
    {
      name:"Sonda pedicular recta",
      filename:"sonda-pedicular-recta.png",
      obs:"",
      model:[
        {
          type:"Romo angosto",
          code:"NCPN-S11"
        },
        {
          type:"Romo ancho",
          code:"NCPW-S11"
        },
        {
          type:"Torácica",
          code:"NCPK-S11"
        }
      ]
    },
    {
      name:"Tornillo de inicio doble terminal",
      filename:"tornillo-de-inicio-doble-terminal.png",
      obs:"",
      model:[
        {
          type:"Punta torneada",
          code:"NNSO-T03"
        },
        {
          type:"Punta recta",
          code:"NNSO-001"
        }
      ]
    },
    {
      name:"Tornillo de inicio terminal individual",
      filename:"tornillo-de-inicio-terminal-individual.png",
      obs:"",
      model:[
        {
          type:"Punta torneada",
          code:"NNSS-T03"
        },
        {
          type:"Punta torneada",
          code:"NNSS-001"
        }
      ]
    },
    {
      name:"Tornillos pediculares",
      filename:"tornillos-pediculares.png",
      obs:"Tornillo disponible en los diámetros 4.0-8.5mm",
      model:[
        {
          type:"Mono- & poliaxial",
          code:""
        },
        {
          type:"Mono- & poliaxial de reducción",
          code:""
        },
        {
          type:"Mono- & poliaxial canulado",
          code:""
        }
      ]
    },
    {
      name:"Torque Wrench (Final Tensor)",
      filename:"torque-wrench-final-tensor.png",
      obs:"",
      model:[
        {
          type:"Punta torneada",
          code:"NNTW-T03"
        },
        {
          type:"Punta recta",
          code:"NNTW-S03"
        }
      ]
    },
    {
      name:"Tuercas",
      filename:"tuercas.png",
      obs:"Sistema de bloqueo inverso + efecto ranura lineal",
      model:[
        {
          type:"",
          code:"SA100"
        }
      ]
    }
  ]

  var iliadproducts = [
    {
      step:"1",
      stepTitle:"Hook Placement",
      instruments:[
        {
          name:"Lamina finder",
          filename:"lamina-finder.png",
        },
        {
          name:"Pedicle finder",
          filename:"pedicle-finder.png",
        },
        {
          name:"Impactor",
          filename:"impactor.png",
        }
      ],
      description:"Use the Lamina Finder to prepare and identify the Lamina for Lamina Hook. Lamina finder separates ligamentum flavum from the lamina to ensure good bony contact.Use the pedicle finder to open facet capsule and locate pedicle. A small piece of inferior articular process may be removed with osteotome to ensure proper pedicle hook seating. The hook may be inserted in a cephalad direction and place into joint cavity and not splitting the inferior articular process.Use the Housing Holder to place the hook in the desired location. Use the Hook Impactor to properly seat and clip the hook. If needed, a Mallet may be used to impact the Impactor. The Offset Hook may be used in conjunction with Pedicle Hook for the transverse process site."
    },
    {
      step:"2",
      stepTitle:"Rod placement",
      instruments:[
        {
          name:"Rod",
          filename:"rod.png",
        }
      ],
      description:"Use Rod Template to determine the contour and length of the rod. Cut the rod to length using the Rod Cutter. Then, contour the rod according to rod template using the Rod Bender. You may bend the rod in-situ using the Single Bender. Once rod is ready, use the Rod Holder to position the rod onto screws and hooks."
    },
    {
      step:"3",
      stepTitle:"Attaching of connectors",
      instruments:[
        {
          name:"Conectors",
          filename:"conectors.png",
        }
      ],
      description:"In situation where rod contour or patient anatomy prevents direct connection and alignment, use Transverse Connector to attach in lateral extension any screw or hook to rod. Use the Zenius Cross Link Driver to tighten the nut for closure. This may eliminate coronal plane bending reducing the stress at bone/screw interface. PoliAxial Connector are available for conical angulation if needed.Use Single or Double Connector (also called the Domino) to connect and extend construct with two rods. Use the Zenius Cross Link Driver to tighten the nut for closure."
    },
    {
      step:"4",
      stepTitle:"Set screw insertion",
      instruments:[
        {
          name:"Inserter",
          filename:"inserter.png",
        }
      ],
      description:"Load the Inserter onto the housing of each Screw and Hook. Then, position the Set Screw using Set Screw Starter and tighten it using the Set Screw Driver. Make sure the Set Screw is only tightened enough to move rod."
    },
    {
      step:"5",
      stepTitle:"Distraction and compression",
      instruments:[
        {
          name:"Compressor",
          filename:"compressor.png"
        },
        {
          name:"Distractor",
          filename:"distractor.png"
        }
      ],
      description:"Use the Large Distractor or Large Compressor to distract against the point of fixation to achieve the desired sagittal-plane construct. Use Rod Holder as a point of fixation against which to distract or compress. For derotation, grasp the rod with Rod Holder and rotate the rod in proper direction using the Derotator."
    },
    {
      step:"6",
      stepTitle:"Final locking and cross link insertion",
      instruments:[
        {
          name:"Torque wrench",
          filename:"torque-wrench.png"
        },
        {
          name:"Cross link",
          filename:"cross-link.png"
        }
      ],
      description:"Once the construct is in desired position, load the Anti-torque Wrench over screw housing. Then, use the 13Nm Torque Wrench for final tightening of Set Screw. Note that any distraction or compression must be completed before final tightening.After final tightening of Set Screw, the transverse link is installed. The transverse link assembly consists of two transverse bars and two transverse hooks. Use the Cross Link Driver to tighten the transverse hook and center locking screw onto rod."
    }
  ]

  var osronproducts = [
    {
      name:"Light Sticker Flex - 100mm",
      filename:"light-sticker-flex-100mm.png",
      code:"LS2000-5B"
    },
    {
      name:"Light Sticker Flex Lite - 200mm",
      filename:"light-sticker-flex-lite-200mm.png",
      code:"LS2000-4B"
    },
    {
      name:"Light Sticker Lite 240mm",
      filename:"light-sticker-lite-240mm.png",
      code:"LS2000-1"
    },
    {
      name:"Light Sticker Suction Lite",
      filename:"light-sticker-suction-lite.png",
      code:"LS2000-6"
    }
  ]

  var streedproducts = [
    {
      name:"Cateter Epidural St. Reed",
      filename:"cateter-epidural-st-reed.png",
      code:"SWV33"
    },
    {
      name:"Cateter Epidural St. Reed Plus",
      filename:"cateter-epidural-st-reed-plus.png",
      code:"SWCATH30"
    },
    {
      name:"Introdutor/Agulha/Estilete",
      filename:"introdutor-agulha-estilete-SWVP-30A.png",
      code:"SWVP-30A"
    },
    {
      name:"Introdutor/Agulha/Estilete",
      filename:"introdutor-agulha-estilete-SWVP-33R.png",
      code:"SWVP-33R"
    }
  ]

  var veelerproducts = [
    {
      name:"V-Cateter",
      filename:"v-cateter.png",
      description:""
    },
    {
      name:"Agulha epidural",
      filename:"agulha-epidural.png",
      description:"Utilizada para fazer uma pequena perfuração no hiato"
    },
    {
      name:"Bainha",
      filename:"bainha.png",
      description:"Utilizado para fazer um caminho para introduzir o Cateter dentro do espaço epidural"
    },
    {
      name:"Dilatador",
      filename:"dilatador.png",
      description:"Utilizado para dilatar o hiato sacro sobre o Fio-Guia"
    },
    {
      name:"Estilete",
      filename:"estilete.png",
      description:"É a parte da Bainha e tem de ser removido antes de inserir o Cateter"
    },
    {
      name:"Fio-guia",
      filename:"fio-guia.png",
      description:"Utilizado para direcionar o Dilatador na posição correta"
    }
  ]

  var razekbrocas = [
    {
      name:"Fresas redondas destinadas a cortes ósseos e acabamentos moderados",
      filename:"fresas-redondas-destinadas-a-cortes-osseos-e-acabamentos-moderados.png",
      model:"BRD"
    },
    {
      name:"Fresas redondas de corte rápido, para remoções ósseas em grande quantidade",
      filename:"fresas-redondas-de-corte-rapido-para-remocoes-osseas-em-grande-quantidade.png",
      model:"BCR"
    },
    {
      name:"Fresas de corte ósseo lateral",
      filename:"fresas-de-corte-osseo-lateral-RZ.png",
      model:"RZ"
    },
    {
      name:"Fresas laminadas para acabamento ósseo",
      filename:"fresas-laminadas-para-acabamento-osseo.png",
      model:"FRL"
    },
    {
      name:"Fresas de corte ósseo lateral",
      filename:"fresas-de-corte-osseo-lateral-BCL.png",
      model:"BCL"
    },
    {
      name:"Fresas de alto desbaste ósseo",
      filename:"fresas-de-alto-desbaste-osseo.png",
      model:"FAD"
    },
    {
      name:"Fresas de cabeça cônica para acabamentos de orifícios",
      filename:"fresas-de-cabeca-conica-para-acabamentos-de-orificios.png",
      model:"ENT"
    },
    {
      name:"Fresa destinada a craniotomia, de cortes ósseos laterais",
      filename:"fresa-destinada-a-craniotomia-de-cortes-osseos-laterais.png",
      model:"BCCS44R"
    },
    {
      name:"Fresas auto bloqueantes, destinadas a perfurações e trepanações",
      filename:"fresas-auto-bloqueantes-destinadas-a-perfuracoes-e-trepanacoes.png",
      model:"BAB011R e BAB014R"
    },
    {
      name:"Fresas destinadas a perfurações ósseas para posterior inserção de placas e parafusos",
      filename:"fresas-destinadas-a-perfuracoes-osseas-para-posterior-insercao-de-placas-e-parafusos.png",
      model:"BP"
    },
    {
      name:"Brocas diamantadas para acabamento e polimento ósseo",
      filename:"brocas-diamantadas-para-acabamento-e-polimento-osseo.png",
      model:"BHC"
    }
  ]

  var razekatmproducts = [
    {
      name:"Faca banana",
      filenames:[
        {
          body:"faca-banana.png",
          tip:"faca-banana-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha meniscótomo",
      filenames:[
        {
          body:"ponta-agulha-meniscotomo.png",
          tip:"ponta-agulha-meniscotomo-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha gancho 2",
      filenames:[
        {
          body:"ponta-agulha-gancho-2.png",
          tip:"ponta-agulha-gancho-2-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha gancho 1 - Raspador",
      filenames:[
        {
          body:"ponta-agulha-gancho-1-raspador.png",
          tip:"ponta-agulha-gancho-1-raspador-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha cureta aplainador",
      filenames:[
        {
          body:"ponta-agulha-cureta-aplainador.png",
          tip:"ponta-agulha-cureta-aplainador-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha perfurante obturador 2",
      filenames:[
        {
          body:"ponta-agulha-perfurante-obturador-2.png",
          tip:"ponta-agulha-perfurante-obturador-2-ponta.png"
        }
      ]
    },
    {
      name:"Ponta agulha romba obturador 1",
      filenames:[
        {
          body:"ponta-agulha-romba-obturador-1.png",
          tip:"ponta-agulha-romba-obturador-1-ponta.png"
        }
      ]
    },
    {
      name:"Trefina dentada cureta 2",
      filenames:[
        {
          body:"trefina-dentada-cureta-2.png",
          tip:"trefina-dentada-cureta-2-ponta.png"
        }
      ]
    },
    {
      name:"Trefina lisa cureta 1",
      filenames:[
        {
          body:"trefina-lisa-cureta-1.png",
          tip:"trefina-lisa-cureta-1-ponta.png"
        }
      ]
    },
    {
      name:"Punção",
      filenames:[
        {
          body:"puncao.png",
          tip:"puncao-ponta.png"
        }
      ]
    },
    {
      name:"Guia D2,0 - Plugue",
      filenames:[
        {
          body:"guia-d2.0-plugue.png",
          tip:"guia-d2.0-plugue-ponta.png"
        }
      ]
    },
    {
      name:"Guia face dentada cânula com batente 1",
      filenames:[
        {
          body:"guia-face-dentada-canula-com-batente-1.png",
          tip:"guia-face-dentada-canula-com-batente-1-ponta.png"
        }
      ]
    },
    {
      name:"Guia face reta camisa com batente 1",
      filenames:[
        {
          body:"guia-face-reta-camisa-com-batente-1.png",
          tip:"guia-face-reta-camisa-com-batente-1-ponta.png"
        }
      ]
    },
    {
      name:"Cânula de microdebridação mini - MCCSK 2,0",
      filenames:[
        {
          body:"canula-de-microdebridacao-mini-MCCSK2.0.png",
          tip:"canula-de-microdebridacao-mini-MCCSK2.0-ponta.png"
        }
      ]
    }
  ]

  productsfac.getSpasyProducts = function() {
    return spasyproducts;
  };
  productsfac.getPracticalDissecProducts = function() {
    return practicaldissecproducts;
  };
  productsfac.getPracticalEndoscoProducts = function() {
    return practicalendoscoproducts;
  };
  productsfac.getZeniusProducts = function() {
    return zeniusproducts;
  };
  productsfac.getWaveflexProducts = function() {
    return waveflexproducts;
  };
  productsfac.getIliadProducts = function() {
    return iliadproducts;
  };
  productsfac.getOsronProducts = function() {
    return osronproducts;
  };
  productsfac.getVeelerProducts = function() {
    return veelerproducts;
  };
  productsfac.getRazekBrocas = function() {
    return razekbrocas;
  };
  productsfac.getRazekATMProducts = function() {
    return razekatmproducts;
  };
  productsfac.getStReedProducts = function() {
    return streedproducts;
  };

  return productsfac;
});
