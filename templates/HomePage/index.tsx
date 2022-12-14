import { useRef } from "react";
import Layout from "@/components/Layout";
import Main from "./Main";
import Website from "./Website";
import Generation from "./Generation";
import Details from "./Details";
import Integration from "./Integration";
import Discover from "./Discover";
import Reviews from "./Reviews";
import Design from "./Design";
import JoinCommunity from "@/components/JoinCommunity";
import Projects from "./Projects";
// import "./style.css"

const HomePage = () => {
    const scrollToRef = useRef(null);

    return (
        <Layout>
            <img className="l" src="/images/img.jpeg"
            style={{
                // objectFit: "cover",
                // opacity: "1",
                // filter: "blur(19px)",
                // -webkit-filter: "blur(19px)",
                // backgroundImage: "linear-gradient(to bottom, #333, #333 50%, #eee 100%) #333",
                zIndex: "1",
                position: "absolute",
                margin: "0",
                padding: "0",
                width: "100%",
                // height: "90%"
            }}
            />

            {/* <video 
            className="l"
            autoPlay
            loop 
            muted 
            playsInline
            src="/videos/video.mp4"
            style={{
                objectFit: "cover",
                opacity: "1",
                filter: "blur(19px)",
                backgroundImage: "linear-gradient(to bottom, #333, #333 50%, #eee 100%) #333",
                zIndex: "1",
                position: "absolute",
                margin: "0",
                padding: "0",
                width: "100%",
                height: "90%"
            }}

            /> */}

            <Main scrollToRef={scrollToRef} />
            <Discover />
            <Website scrollToRef={scrollToRef} />
            <Projects/>
            <Reviews />
            <Generation />
            {/* <Details /> */}
            {/* <Integration /> */}
            {/* <Design /> */}
            <JoinCommunity />
        </Layout>
    );
};

export default HomePage;
