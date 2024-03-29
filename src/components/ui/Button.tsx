import { ButtonHTMLAttributes, FC, ReactNode } from "react"

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className: string;
}
const Button: FC<IProps> = ({ children, className, ...rest }) => {
    return (
        <button className={`${className} p-2 w-full rounded-lg text-white`} {...rest}>
            {children}
        </button>
    )
}

export default Button;