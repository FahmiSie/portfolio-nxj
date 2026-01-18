export default function ProjectDetail({params}: {params: {slug: string}}){
    return(
        <section className="slug-project-page">
            <h1>{params.slug}</h1>
            <p>portfolio-website</p>
            </section>
    )
}