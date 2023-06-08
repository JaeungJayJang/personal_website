
interface dataProps {
    name: string;
    desciprion: string;
    skills: Array<string>;
    link: string;
    image_link: string;
}

const data: Array<dataProps> = [
    {
        "name" : "project name",
        "desciprion" : "a brief description about what the project is",
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link" : "",
        "image_link" : "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png",
    },
    {
        "name" : "project name",
        "desciprion" : "a brief description about what the project is",
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link" : "",
        "image_link" : "https://www.veryicon.com/download/png/emoticon/number-1/20-5?s=256",
    },
    {
        "name" : "project name",
        "desciprion" : "a brief description about what the project is",
        "skills": [
            "Next.js",
            "FastAPI",
            "Nextflow",
            "React",
            "TypeScript",
            "JavaScript",
            "HPC",
        ],
        "link" : "",
        "image_link" : "https://www.shutterstock.com/image-vector/blue-horizontal-lens-flares-pack-260nw-2202148279.jpg",
    },
]

const Project = () => {


    return (
        <div id="projects" className="h-auto flex justify-center py-20">
            <div className="container h-full px-4 lg:px-64">
                <div className="flex flex-col h-full justify-center">
                    <div className="">
                        <h2 className="text-4xl leading-normal font-bold">
                            Side Projects
                        </h2>
                    </div>
                    {
                        data &&
                        data.map((project, i) => {
                            return (
                                <div className="card md:card-side bg-base-100 shadow-xl mb-8">
                                    <figure className="md:w-2/6 md:h-[200px]">
                                        <img src={project.image_link} alt="Album" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{project.name}</h2>
                                        <p>{project.desciprion}</p>
                                        <div>
                                            {
                                                project.skills &&
                                                project.skills.map((skill) => {
                                                    return (
                                                        <span className="badge badge-neutral m-[2px] p-3">{skill}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>

    )
}

export default Project;