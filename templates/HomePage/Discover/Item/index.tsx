import cn from "classnames";
import styles from "./Item.module.sass";
import Play from "@/components/Play";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import Animation from "@/components/Animation";
type ItemProps = {
    className?: string;
    title: string;
    info: string;
    video: string;
    children: React.ReactNode;
};

const Item = ({ className, title, info, video, children }: ItemProps) => (
    <div className={cn(styles.item, className)}>
        <div className={styles.col}>
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

            {/* <div className={cn("h3", styles.title)}>{title}</div>
            <div className={cn("h6", styles.info)}>{info}</div> */}
            {/* <Play title="Watch tutorial" video={video} /> */}
        </div>
        <div className={styles.col}>{children}</div>
    </div>
);

export default Item;
