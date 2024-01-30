/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
import ContactForm from "../components/common/contactForm"
export default function Contact() {

    return (
        <Layout title="Contact | TechG4">
            {/* contact section */}
            <ContactForm/>
            {/* end contact section */}
        </Layout>

    )
}   