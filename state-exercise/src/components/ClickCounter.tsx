type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ClickCounter = (props: Props) => {
    const {onClick} = props
    return(
        <>
            <button onClick={onClick}>Click Counter</button>
        </>
    )
}

export default ClickCounter