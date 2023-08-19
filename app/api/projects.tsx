import fs from "fs";
import path from "path";

export async function getStaticProps() {
    const directory = path.join(process.cwd(), "data")
    const allProjects =  fs.readFileSync(directory + "/projects.json", "utf8");
    
    return {
        props: {
            allProjects
        }
    }
}