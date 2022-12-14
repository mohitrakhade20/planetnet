import cn from "classnames";
import styles from "./Main.module.sass";
import Scroll from "@/components/Scroll";
import Image from "@/components/Image";
import Animation from "@/components/Animation";
import { Link } from "react-router-dom";

type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={styles.main}>
        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <div className={cn("hero", styles.title)}>Reduce Carbon</div>
                <div className={cn("h4M", styles.info)}>
                    The Real-time case studies &nbsp;saving the planet
                </div>
                <div className={styles.line}>
                    {/* <Link href={"https://aaoblocktech.com/news"}> */}
                    <button className={cn("button", styles.button)} onClick={
                        () => {
                            window.location.href = "https://aaoblocktech.com/news";
                            


                        }
                    }>
                        Visit AAO Blogs
                    </button>
                    {/* </Link> */}
                    {/* <div className={styles.note}>
                        MacOS Big Sure (or higher)
                    </div> */}
                </div>
            </div>
            <div className={styles.preview}>
                <Image
                    src="/images/download.png"
                    width={1058}
                    height={793}
                    alt="Download"
                />
                <div className={styles.circles}>
                    {Array.from(Array(4).keys()).map((x) => (
                        <Animation
                            className={styles.circle}
                            animateIn="fadeAlways"
                            speed={-4}
                            key={x}
                            initiallyVisible={true}
                        >
                            <span></span>
                        </Animation>
                    ))}
                </div>
            </div>
            <Scroll
                title="Choose other options"
                onScroll={() =>
                    scrollToRef.current.scrollIntoView({
                        behavior: "smooth",
                    })
                }
            />
        </div>
    </div>
);

export default Main;
