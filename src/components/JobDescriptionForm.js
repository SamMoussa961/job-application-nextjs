'use client'
import { useState } from "react";

export default function JobDescriptionForm() {

    const [jobDescription, setJobDescription] = useState("");
    //const [id, setId] = useState("");
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(jobDescription) {
            try{
                const response = await fetch("/api/generate", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ jobDescription})
                });

                if(!response.ok){
                    const errText = await response.text();
                    throw new Error(errText || 'Failed to call AI API')
                }

                
            } catch(err){
                console.error('Error submitting job description: ' + err.message);
                alert('Failed to analyse job description: ' + err.message);
            }
        }

    };

    return (
        <form>
                        <div className="mb-4">
                            <label className="mb-2 block font-bold">
                                Job Description
                            </label>

                            <textarea
                                className="min-h-[250px] w-full rounded-lg border border-gray-300 p-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"                                type="text"
                                placeholder="Paste the full job description here..."
                                value={jobDescription}
                                onChange={(e) => setJobDescription(e.target.value)}
                                aria-label="Job Description"
                                rows={10}
                                />
                        </div>

                        <div className="grid">
                            <button 
                                type="submit" 
                                className="btn-primary btn-lg" 
                                id="submitBtn"
                            >
                                <span className="spinner"></span>
                                Generate Assets
                            </button>
                        </div>
                    </form>
    )
}