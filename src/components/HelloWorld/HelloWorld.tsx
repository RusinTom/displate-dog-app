interface HelloWorldProps {
  msg: string
}

export default function HelloWorld(props: HelloWorldProps) {
  return (
    <div>
      <h1>{props.msg}</h1>
    </div>
  )
}
