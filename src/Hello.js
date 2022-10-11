function Hello(props) {
    console.log(props)
    return (
        <p>Hello {props.name}! Big daddy status: {props.father}</p>
    )
}
export default Hello