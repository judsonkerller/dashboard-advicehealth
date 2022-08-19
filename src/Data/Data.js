// Sidebar imports
import {
  UilEstate,
  UilSchedule,
  UilCheckSquare,
  UilClipboardAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// Recent Card Imports
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";

// Sidebar Data
export const SidebarData = [
  {
    id: "/",
    icon: UilEstate,
    heading: "Área de Trabalho"
  },
  {
    id: "schedule",
    icon: UilSchedule,
    heading: "Agendamento de Consulta"
  },
  {
    id: "appointment",
    icon: UilCheckSquare ,
    heading: "Consulta de Agendamentos"
  },
];

// Analytics Cards Data
export const CardsData = [
  {
    title: "Vendas",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "27,430",
    png: UilUsdSquare,
    series: [
      {
        name: "Vendas",
        data: [15, 90, 100, 64, 82, 80, 20],
      },
    ],
  },
  {
    title: "Receita",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Receita",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Gastos",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "2,270",
    png: UilClipboardAlt,
    series: [
      {
        name: "Gastos",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
]

// Recent Update Card Data
export const DoctorsData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Atendeu um paciente hoje pela manhã",
    time: "25 segundos atrás",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Completou mais uma missão impossível!",
    time: "30 minutos atrás",
  },
  {
    img: img3,
    name: "Scarlet Borges",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "2 horas atrás",
  },
];