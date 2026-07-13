import OpenAI from "openai";
import path from "path"
import fs from "fs";

const projectDirectory = process.cwd();
const dataDirectory = path.join(projectDirectory, "data");


const files = {
        candidate_profile: path.join(dataDirectory, "candidate_profile.md"),
            writing_style: path.join(dataDirectory, "writing_style.md"),
            cover_letter_guide: path.join(dataDirectory, "cover_letter_guide.md"),
            resume_guide: path.join(dataDirectory, "resume_guide.md"),
            ats_optimizer: path.join(dataDirectory, "resume_ats_optimizer.md"),
            few_shot: path.join(dataDirectory, "few_shot_examples.md"),
    }; 

const client = new OpenAI({
    baseURL: process.env.BASE_URL,
    apiKey: process.env.AI_API_KEY,
});

export async function LoadData(){
    
    
}
export async function POST(req) {

    const data = {};
    for (const [key, filePath] of Object.entried(files)) {
        try{
            data[key] = await fs.readFile(filePath, "utf8");
        } catch {
            data[key] = "[FILE NOT FOUND]";
        }
    }

    const { jobDescription } = await req.json();

    const response = await client.responses.create({
        model: process.env.AI_MODEL,
        messages: [
            { role: 'system', content: ''},
            { role: 'user', content: jobDescription}
        ]
    });

    return Response.json(response);
}