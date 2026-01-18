export default function BlogDetail({params}: {params: {slug: string}}){

return (
    <article className="blog-resume-page">
    <h1>{params.slug}</h1>
    <p>Blog content soon</p>
    </article>
)
}