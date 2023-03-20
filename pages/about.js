/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
import AboutContent from "../components/common/aboutContent";
export default function About() {
    return (
        <Layout title="About Us | TechG4">
            {/* welcome section */}
              <AboutContent/>  
             {/* end welcome section */}
        </Layout>

    )
}