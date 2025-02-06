import {useState, useEffect, FC} from "react";

type Animal = {
    type: string;
    icon: string;
    active?: boolean;
};

type ListProps = {
    propAnimals: Animal[];
};


const List: FC<ListProps> = ({ propAnimals }) => {
    const [list, setList] = useState<Animal[]>(propAnimals);
    const [activatedCount, setActivatedCount] = useState(0);

    useEffect(() => {
        if (activatedCount >= list.length) return;

        const interval: number = setInterval(() => {
            setList((prevList: Animal[]) => {
                const inactiveItems: Animal[] = prevList.filter((item) => !item.active);

                if (inactiveItems.length === 0) {
                    clearInterval(interval);
                    return prevList;
                }

                const randomItem: Animal = inactiveItems[
                    Math.floor(Math.random() * inactiveItems.length)];

                console.log(randomItem)

                return prevList.map((item) =>
                    item === randomItem ? { ...item, active: true } : item
                );
            });

            setActivatedCount((prevState) => prevState + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [list, activatedCount]);

    return (
        <table>
            <tbody>
            {list.map((animal, index) => (
                <tr key={index} className={animal.active ? "active" : ""}>
                    <td>{animal.type}</td>
                    <td>{animal.icon}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default List;
