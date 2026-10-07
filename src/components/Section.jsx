
export default function Section({title, children}) {
    return(
        <>
            <h1>{title}</h1>
            <br></br>
            {children}
        </>
    )
}