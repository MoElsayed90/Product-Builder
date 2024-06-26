import { FC, InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement> {

}
const Input: FC<IProps> = ({ ...rest }) => {
    return <input className="border-[1px] border-gray-300 shadow-lg focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 rounded-md px-3 py-3 text-md " {...rest}/>
}
export default Input;