type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}  

const LightToggle = (props: Props) => {
    const {onClick} = props 
    return(
        <>
            <button onClick={onClick}>Toggle Lights</button>
        </>
    )
}

export default LightToggle