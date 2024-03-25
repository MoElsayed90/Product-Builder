import { FC } from "react"

interface IProps {
    ImgUrl: string;
    alt: string;
    className: string;
}
const Image: FC<IProps> = ({ ImgUrl, alt, className }) => {
    return (
        <div>
            <img src={ImgUrl} alt={alt} className={className} />
        </div>
    )
}

export default Image;