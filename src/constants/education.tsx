import uvegIcon from "../img/education/uvegIcon.png";
import IPNIcon from "../img/education/CICSIPNIcon.png";
import generationIcon from "../img/education/generationIcon.png";
import aluraIcon from "../img/education/aluraOracleOneIcon.png";
import codigoFacilitoIcon from "../img/education/codigoFacilitoIcon.png";


interface DataItem {
    id: number;
    category: null | string; 
    title: null | string;
    institution: null | string;
    status: null | string;
    place: null | string;
    modality: null | string;
    activities: null | string;
    identifier: null | string;
    img: null | string;
    startDate: {
      month: null | string;
      year: null | number;
    };
    finishDate: {
      month: null | string;
      year: null | number;
    };
    icon: string;
  }
  
  const data: DataItem[] = [
    {
      id: 1,
      category: "academic",
      title: "Ing. en Sistemas Computacionales",
      institution: "Universidad Virtual del Estado de Guanajuato",
      place: "En línea",
      modality: "Asíncrono",
      status: "44% de avance",
      activities: null,
      identifier: null,
      img: null,
      startDate: {
        month: "Marzo",
        year: 2022
      },
      finishDate: {
        month: "Diciembre",
        year: 2024
      },
      icon: uvegIcon,
    },
    {
        id: 2,
        category: "academic",
        title: "Lic. en Psicología",
        institution: "Instituto Politécnico Nacional",
        place: "CDMX",
        modality: "Síncrono",
        status: "Titulado",
        activities: null,
        identifier: null,
        img: null,
        startDate: {
          month: "Agosto",
          year: 2013
        },
        finishDate: {
          month: "Diciembre",
          year: 2017
        },
        icon: IPNIcon,
      },
      {
        id: 3,
        category: "bootcamp",
        title: "Bootcamp English For Developers",
        institution: "Código Facilito",
        place: "En línea",
        modality: "Síncrono",
        status: "Pendiente",
        activities: null,
        identifier: null,
        img: null,
        startDate: {
          month: "Junio",
          year: 2023
        },
        finishDate: {
          month: "Agosto",
          year: 2023
        },
      icon: codigoFacilitoIcon,
      },
      {
          id: 4,
          category: "bootcamp",
          title: "Oracle Next Education",
          institution: "Alura Latam",
          place: "En línea",
          modality: "Asíncrono",
          status: "En proceso",
          activities: null,
          identifier: null,
          img: null,
          startDate: {
            month: "Abril",
            year: 2023
          },
          finishDate: {
            month: "Septiembre",
            year: 2023
          },
          icon: aluraIcon,
        },
      {
          id: 5,
          category: "bootcamp",
          title: "Desarrollador Java Full Stack",
          institution: "Generation México",
          place: "En línea",
          modality: "Síncrono",
          status: "Concluido",
          activities: null,
          identifier: null,
          img: null,
          startDate: {
            month: "Enero",
            year: 2023
          },
          finishDate: {
            month: "Abril",
            year: 2023
          },
          icon: generationIcon,
        },
     
   
  ];
  
  export default data;  