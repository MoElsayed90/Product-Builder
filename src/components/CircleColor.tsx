import { FC, HTMLAttributes } from "react"

interface IProps extends HTMLAttributes<HTMLSpanElement> {
  color: string;
}
const CircleColor: FC<IProps> = ({ color, ...rest }) => {
  return (
    <span className=" block  w-5 h-5 rounded-full cursor-pointer mb-1" style={{ backgroundColor: color }}
    {...rest}
    />
  )
}

export default CircleColor;