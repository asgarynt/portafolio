import dveritas from "../img/projects/dveritas.png"
import calculadora from "../img/projects/calculadora.png"
import javaIcon from "../img/skills/javaIcon.svg"
import springBootIcon from "../img/skills/springBootIcon.svg"
// import mysqlIcon from "../img/Skills/mysqlIcon.svg"
// import mysqlWorkbenchIcon from "../img/Skills/mysqlWorkbenchIcon.svg"
// import postmanIcon from "../img/Skills/postmanIcon.svg"
// import htmlIcon from "../img/Skills/htmlIcon.svg"
// import cssIcon from "../img/Skills/cssIcon.svg"
// import jsIcon from "../img/Skills/jsIcon.svg"
import reactIcon from "../img/skills/reactIcon.svg"
// import gitIcon from "../img/Skills/gitIcon.svg"
import gitHubIcon from "../img/skills/gitHubIcon.svg"
// import jiraIcon from "../img/Skills/jiraIcon.svg"
import materialUIIcon from "../img/skills/materialUIIcon.svg"
import deployIcon from "../img/skills/deployIcon.svg"


interface DataItem {
    id: number;
    title: null | string;
    category: null | string;
    type: null | string;
    description: null | string;
    url: null | string;
    activities: null | string;
    status: null | string;
    repository: {
        link: {
            one: string;
            two: string;
            three: string;
            four: string;
        },
        icon: {
            one: string;
            two: string;
            three: string;
            four: string;
        },

    },
    tools: {

        one: string;
        two: string;
        three: string;
        four: string;
    },

    img: string;
}

const data: DataItem[] = [
    {
        id: 1,
        title: "D'Veritas",
        category: "Red Social",
        type: "Project",
        description: "En colaboración con un equipo, se diseño y desarrollo el funcionamiento del backend (Java, SpringBoot) y frontend (HTML, CSS, Javascript, React) de la red social \"D'Veritas\". El objetivo de este proyecto fue crear un espacio de comunicación anónima, centrado en valores.",
        url: null,
        activities: null,
        status: null,
        repository: {
            link: {
                one: "https://rs-dveritas.netlify.app/",
                two: "https://github.com/LouckGuntz/DVeritas",
                three: "https://github.com/asgarynt/dveritasbackend",
                four: "null"
            },
            icon: {
                one: deployIcon,
                two: gitHubIcon,
                three: gitHubIcon,
                four: "null",
            },
        },
        tools: {

            one: javaIcon,
            two: springBootIcon,
            three: reactIcon,
            four: materialUIIcon,
        },
        img: dveritas,

    },
    {
        id: 2,
        title: "Calculadora sencilla",
        category: "Actividad escolar",
        type: "SmallProject",
        description: "Una calculadora sencilla desarrollada en Java como parte del curso de Tópicos Avanzados de Programación. Realiza operaciones matemáticas básicas y cuenta con una interfaz intuitiva y resultados precisos. Un proyecto educativo para explorar el concepto de eventos en Java.",
        url: null,
        activities: null,
        status: null,
        repository: {
            link: {
                one: "https://github.com/asgarynt/calculadora",
                two: "null",
                three: "null",
                four: "null"
            },
            icon: {
                one: gitHubIcon,
                two: "null",
                three: "null",
                four: "null",
            }
        },
        tools: {

            one: javaIcon,
            two: "null",
            three: "null",
            four: "null",
        },
        img: calculadora,
    },

];

export default data;