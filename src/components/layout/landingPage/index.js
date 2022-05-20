import Header from "./header";
import Pool from "./possibilityPool";
import Platform from "./platform";
import Talent from "./trustedTalent";
import Matched from "./matched";
import Footer from "./footer";

const LandingPageLayout = () => {
    return (
        <>
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