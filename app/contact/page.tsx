export default function ContactPage(){
    return (
        <section className="contact-page">
        <h1>Contact</h1>
        <form>
            <input placeholder="Your Name" />
            <input placeholder="Your Email" />
            <textarea placeholder="Your Message" />
            <button type="submit">Send</button>
        </form>
        </section>
    )
}