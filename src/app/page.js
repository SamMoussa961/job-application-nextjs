import RootLayout from "@/components/Layout";
import JobDescriptionForm from "@/components/JobDescriptionForm";



export default function Home() {


    return (
        <>
            <RootLayout>
                <div className="container mx-auto">
                    <div className="flex justify-center">
                        <div className="w-full lg:2-10/12">
                            <div className="glass-card">
                                <section className="mb-12 text-center">
                                    {/** top container for title */}
                                    <h1 className="header-title">Job Application Tool</h1>
                                    <p className="header-subtitle">Generate ATS-optimized cover letters and resume bullets using multi-pass AI analysis.</p>

                                </section>

                                <section>
                                    {/** form section */}
                                    <JobDescriptionForm/>
                                </section>

                                <section>
                                    {/** results section */}
                                    
                                </section>
                            </div>
                        </div>
                    </div>
                </div>

            </RootLayout>
        </>
    );
}
