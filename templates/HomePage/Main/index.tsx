import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import Animation from "@/components/Animation";
type MainProps = {
    scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => (
    <div className={cn("section", styles.main)}>

        <div className={cn("container", styles.container)}>
            <div className={styles.wrap}>
                <h1 className={cn("hero", styles.title)}>Plantnet</h1>
                <div className={cn("h4M", styles.info)}>
                The easiest way for individuals and brands to become climate-friendly. Take real climate action alongside everyday consumption. All in a single click.
                </div>
                <div className={styles.btns}>
                    <a
                        className={cn("button", styles.button)}
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Launch app
                    </a>
                    <Link href="/about-us">
                        <a className={cn("button-gray", styles.button)}>
                            Learn more
                        </a>
                    </Link>
                </div>
            </div>
            <div className={styles.preview}>
                <Image
                    src="/images/mock.png"
                    width={590}
                    height={590}
                    alt="Hero"
                    className={styles.image}
                />
                <div className={styles.ball}></div>
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
                title="Scroll down"
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
