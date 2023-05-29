import uneteIcon from "../img/Experience/uneteIcon.png";

interface DataItem {
    id: number;
    job: null | string;
    company: null | string;
    place: null | string;
    area: null | string;
    activities: {
        one: null | string;
        two: null | string;
        three: null | string;
        four: null | string;
        
    };
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
      job: "Coordinador de Programas Educativos",
      company: "Unión de Empresarios para la Tecnología en la Educación A.C.",
      place: "CDMX",
      area: "Ámbito Educativo",
      activities:{
        one:"Responsable de la organización de un equipo de trabajo para el cumplimiento de los objetivos del proyecto asignado.",
        two:"Elaboración de recursos y estrategias para la recuperación y gestión de la información.",
        three:"Análisis de la información recuperada para la elaboración de informes con la finalidad de compartir los resultados obtenidos con donantes.",
        four: "Reuniones con autoridades educativas para revisar los objetivos planteados, avances obtenidos y redefinir o modificar los alcances en caso de ser necesario."
      }, 
      startDate: {
        month: "Septiembre",
        year: 2021
      },
      finishDate: {
        month: "Octubre",
        year: 2022
      },
      icon: uneteIcon,
    },
    {
        id: 2,
      job: "Facilitador en Tecnología Educativa",
      company: "Unión de Empresarios para la Tecnología en la Educación A.C.",
      place: "CDMX",
      area: "Ámbito Educativo",
      activities:{
        one:"Capacitación presencial a docentes de nivel primaria en el programa CUANTRIX CDMX con el objetivo de integrar la programación por bloques al ámbito educativo.",
        two:"Capacitación a docentes de nivel secundaria y bachillerato en HTML y CSS para el desarrollo de un proyecto escolar con alumnos.",
        three:"Seguimiento presencial y a distancia a escuelas y docentes asignados.",
        four:"Apoyo a docentes en el aprendizaje de herramientas tecnológicas para su implementación en la práctica docente."
      }, 
      startDate: {
        month: "Agosto",
        year: 2019
      },
      finishDate: {
        month: "Agosto",
        year: 2021
      },
      icon: uneteIcon,
      },
   
  ];
  
  export default data;