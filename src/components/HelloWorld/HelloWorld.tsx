interface HelloWorldProps {
  msg: string
}

export default function HelloWorld(props: HelloWorldProps) {
  return (
    <div>
      <h1>{props.msg}</h1>
      <h2>{props.msg}</h2>
      <h3>{props.msg}</h3>
      <h4>{props.msg}</h4>
      <p>{props.msg}</p>
    </div>
  )
}
