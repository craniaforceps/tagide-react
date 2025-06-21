type TitleProps = {
  text: string
  color: string
}

const Title = ({ text, color }: TitleProps) => {
  return (
    <h1
      className={`text-4xl tracking-wide text-${color}-500 text-right align-right md:text-6xl lg:text-7xl mb-2 pb-2 lg:mb-0 lg:pb-0`}
    >
      {text}
    </h1>
  )
}
export default Title
