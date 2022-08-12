import Layout from "@/components/Layout";
import Main from "./Main";
import Plugins from "./Plugins";
import Faq from "./Faq";
import JoinCommunity from "@/components/JoinCommunity";

const PricingPage = () => {
    return (
        <Layout>
            <Main />
            {/* <Plugins /> */}
            <JoinCommunity />
            <Faq />
        </Layout>
    );
};

export default PricingPage;
