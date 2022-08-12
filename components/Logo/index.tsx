import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    titleClassName?: string;
    black?: boolean;
    onClick?: () => void;
    title?: boolean;
};

const Logo = ({
    className,
    titleClassName,
    black,
    onClick,
    title,
}: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <Image
                src={`/images/LOGO.png`}
                width={366/2.3}
                height={143/2.3}
                alt="Platnet"
                priority
            />
            {title && (
                <div className={cn("h5M", styles.title, titleClassName)}>
                    PlantNet
                </div>
            )}
        </a>
    </Link>
);

export default Logo;
