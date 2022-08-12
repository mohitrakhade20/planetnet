import cn from "classnames";
import styles from "./List.module.sass";
import Image from "@/components/Image";

type ListType = {
    title: string;
    content: string;
    image: string;
    color: string;
};

type ListProps = {
    list: ListType[];
};

const List = ({ list }: ListProps) => {
    return (
        <div className={styles.list}>
            {list.map((item, index) => (
                <div className={styles.box} key={index}>
                    <div className={styles.details}>
                        <div className={cn("h4", styles.title)}>
                            {item.title}
                        </div>
                        <div className={styles.content}>{item.content}</div>
                    </div>
                    <div
                        className={styles.icon}
                        style={{ backgroundColor: item.color }}
                    >
                        <div className={cn("h4", styles.title)}>
                            {index+1}
                        </div>
                        {/* <Image
                            src={item.image}
                            width={32}
                            height={32}
                            alt="Icon"
                        /> */}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default List;
