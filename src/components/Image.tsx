import { FC } from "react"

interface IProps {
    ImgUrl: string;
    alt: string;
    classname: string;
}
const Image: FC<IProps> = ({ ImgUrl, alt, classname }) => {
    return (
        <div>
            <img src={ImgUrl} alt={alt} className={classname} />
        </div>
    )
}

export default Image;