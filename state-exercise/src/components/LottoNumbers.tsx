type Props = {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const LottoNumbers = (props: Props) => {
    const {onClick} = props
    return(
        <>
            <button onClick={onClick}>Generate Lotto Numbers</button>
        </>
    )
}

export default LottoNumbers