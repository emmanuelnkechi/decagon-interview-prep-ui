import Header from "./header";
import Pool from "./possibilityPool";
import Platform from "./platform";
import Talent from "./trustedTalent";
import Matched from "./matched";
import Footer from "./footer";
import Navbar from "../../common/Navbar";

const LandingPageLayout = () => {
    return (
        <>
        <Navbar />
        <Header/>
        <Pool />
        <Platform />
        <Talent />
        <Matched />
        <Footer />
        </>
    )
}

export default LandingPageLayout;