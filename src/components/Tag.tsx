const Tag = (props: { text: string }) => {
  return (
    <div className="rounded-xl text-white bg-almond-frost-700 hover:bg-almond-frost-600 px-2 py-2 m-2 hover:underline">
      {props.text}
    </div>
  )
}

export default Tag
