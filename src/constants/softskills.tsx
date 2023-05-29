import Groups3Icon from '@mui/icons-material/Groups3';
import HearingIcon from '@mui/icons-material/Hearing';
import UpdateIcon from '@mui/icons-material/Update';
import SearchIcon from '@mui/icons-material/Search';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';

interface DataItem {
    id: number;
    icon: string | React.ReactNode;
    title: null | string;
    description: null | string;
  }
  
  const data: DataItem[] = [
    {
      id: 1,
      icon: <AddReactionIcon/>,
      title: "Mentalidad de Crecimiento",
      description: "Poseo una actitud abierta y positiva hacia el aprendizaje y el desarrollo personal. Estoy dispuesto a asumir nuevos desafíos, adquirir nuevas habilidades y mejorar constantemente. Considero que el esfuerzo y la dedicación pueden conseguir el éxito y me encuentro dispuesto a enfrentar los obstáculos como oportunidades de crecimiento.",
    },
    {
        id: 2,
        icon: <HearingIcon/>,
        title: "Comunicación",
        description: "Poseo habilidades efectivas de comunicación, tanto verbal como escrita. Puedo transmitir ideas y opiniones de manera clara, concisa y comprensible. Además, soy capaz de escuchar activamente a los demás, lo que me permite comprender sus perspectivas y establecer una comunicación fluida y significativa.",
      },
      {
        id: 3,
        icon: <Groups3Icon/>,
        title: "Trabajo en Equipo",
        description: "Sé trabajar de manera colaborativa y eficiente en un entorno de equipo. Puedo interactuar y relacionarme de manera efectiva con diferentes personas, aprovechando las fortalezas individuales para alcanzar metas comunes. Soy consciente de la importancia de la empatía, el respeto y la cooperación para lograr resultados conjuntos.",
      },
      {
        id: 4,
        icon: <SearchIcon/>,
        title: "Orientación al Detalle",
        description: "Presto atención a los detalles y me esfuerzo por entregar un trabajo de calidad y precisión. Soy cuidadoso en la planificación y ejecución de tareas, evitando errores y asegurándome de que todo esté completo y correcto, contribuyendo  a obtener resultados confiables y consistentes.",
      },
      {
        id: 5,
        icon: <UpdateIcon />,
        title: "Persistencia",
        description: "Tengo la capacidad de mantener la motivación y el compromiso a lo largo de los desafíos y obstáculos. No me rindo fácilmente y busco soluciones alternativas cuando me enfrento a dificultades. Soy resiliente y perseverante, lo que me permite superar los contratiempos y mantener el enfoque en los objetivos.",
      },
      {
        id: 6,
        icon: <FollowTheSignsIcon/>,
        title: "Proactividad",
        description: "Soy una persona que toma la iniciativa y anticipa las necesidades y oportunidades. Mi actitud proactiva me permite identificar áreas de mejora, proponer ideas y soluciones, y asumir responsabilidad mayores en mi trabajo.",
      }
   
  ];
  
  export default data;