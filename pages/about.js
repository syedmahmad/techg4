/* eslint-disable @next/next/no-img-element */
import Layout from "../hoc"
import AboutContent from "../components/common/aboutContent";
import { usePathname } from "next/navigation";
import MoreAboutUs from "../components/common/MoreAboutUs";
export default function About() {
    const pathName = usePathname();
    return (
        <Layout title="About Us | TechG4">
            {/* welcome section */}
            {pathName !== " /about" ? <MoreAboutUs /> : <AboutContent />}
            {/* end welcome section */}
        </Layout>

    )
}