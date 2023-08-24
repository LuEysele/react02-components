

export const MyButton = ({onClick, children}) => {
    return (
        <>
            <button onClick ={onClick} >{children}</button>
        </>
    )
}