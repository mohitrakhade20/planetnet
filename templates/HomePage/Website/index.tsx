import { useState } from "react";
import cn from "classnames";
import styles from "./Website.module.sass";
import Form from "@/components/Form";
import Image from "@/components/Image";

type WebsiteProps = {
    scrollToRef: any;
};

const Website = ({ scrollToRef }: WebsiteProps) => {
    const [email, setEmail] = useState<string>("");

    return (
        <div className={cn("section-border", styles.website)}>
            <div className={styles.anchor} ref={scrollToRef}></div>
            <div className={cn("container", styles.container)}>
                <div className={styles.wrap}>
                    <h2 className={cn("h2", styles.title)}>
                        360,000+ kgs of emissions neutralised
                    </h2>
                    <div className={cn("h5M", styles.info)}>
                        42,000+ people

                        Keeping it cool.
                        
                    </div>
                    <h2 className={cn("h5M", styles.title)}>
                        Be one of them

                    </h2>

                    <Form
                        className={styles.form}
                        placeholder="Your email"
                        type="email"
                        icon="mail"
                        value={email}
                        setValue={setEmail}
                        onSubmit={() => console.log("Submit")}
                    />
                </div>
                <div className={styles.previewMobile}>
                    <Image
                        src="/images/earth.jpg"
                        width={400}
                        height={1101}
                        objectFit="cover"
                        style={{ borderRadius: "8%" }}
                        alt="Hero"
                    />
                </div>
                <div className={styles.previewDesktop}>
                    <Image
                        src="/images/earth.jpg"
                        width={864}
                        height={500}
                        objectFit="cover"
                        alt="Hero"
                        style={{borderRadius :"8%"}}
                    />
                </div>
                <div className={styles.preview}>
                    <Image
                        src="/images/earth.jpg"
                        width={720}
                        height={500}
                        objectFit="cover"
                        alt="Hero"
                        style={{ borderRadius: "8%" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Website;
