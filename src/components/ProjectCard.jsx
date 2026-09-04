
import {ArrowUpRight} from "lucide-react";

export default function ProjectCard({id, name, image, link}) {
    return (
        <div id={id} className={`project-card`}>
            <img src={image} alt="workstation"
                 className={`project-image`}
            />
            <a href={link} target={`_blank`}
               className={`project-link hover:opacity-90`}
            >
                <div>
                    <p>CLICK HERE TO VISIT</p>
                    <p className={`project-title`}>{name}</p>
                </div>
                <ArrowUpRight/>
            </a>
        </div>
    )
}