import { FC } from "react"

interface IProps {
    msg: string;
}
const ErrorMsg: FC<IProps> = ({ msg }) => {
    return msg ? <span className="block text-red-700 font-semibold text-sm">{msg}</span> : null;
}

export default ErrorMsg;