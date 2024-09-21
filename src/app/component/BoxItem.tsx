import { FC } from "react";
import Image from 'next/image'

interface Props {
    text: string;
    image: string;
}

const BoxItem: FC<Props> = ({ text, image }) => {
    return (
        <div className="box-style" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src={image} alt={image} width="15" height="15" />
            <span>{text}</span>
        </div>
    )
}
export default BoxItem;
