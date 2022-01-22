import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";

import { IoLogoJavascript } from "react-icons/io";

export const projects = [{
        id: 1,
        url: "https://masazens-beta-verzija.netlify.app/",
        title: "Small Business Web Page",
        description: "Local Business Web Page, layout created fully with flexbox, and VanillaJS is used for page behavior.",
        image: "https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642683335/portfolio%20project%20images/masaze_lap_opt_qgukn2.jpg",
        tech: `HTML, CSS, Vanilla JS`,
        icons: [ < FaHtml5 / > , < FaCss3Alt / > , < IoLogoJavascript / > ],
    },
    {
        id: 2,
        url: "https://comfyreactstore.netlify.app/",
        title: " Web Store",
        description: "Furniture Shop Web store REACT JS project, context used to prop drilling trough app.",
        image: "https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642683403/portfolio%20project%20images/comfy_lap_opt_oijb4q.jpg",
        tech: " REACT JS",
        icons: [ < FaHtml5 / > , < FaCss3Alt / > , < FaReact / > ],
    },
    {
        id: 3,
        url: "https://reactreduxshoppingcart.netlify.app/",
        title: " Shopping cart",
        description: "React Redux App Project",
        image: "https://res.cloudinary.com/dfnkvrfjt/image/upload/v1642683429/portfolio%20project%20images/cart_lap_opt_q77ism.jpg",
        tech: " REACT JS",
        icons: [ < FaHtml5 / > , < FaCss3Alt / > , < FaReact / > ],
    },
];