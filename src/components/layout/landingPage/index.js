import Header from "./header";
import Pool from "./possibilityPool";
import Platform from "./platform";
import Talent from "./trustedTalent";
import Matched from "./matched";
const LandingPageLayout = () => {
    return (
        <>
        <Header/>
        <Pool />
        <Platform />
        <Talent />
        <Matched />
        </>
    )
}

export default LandingPageLayout;