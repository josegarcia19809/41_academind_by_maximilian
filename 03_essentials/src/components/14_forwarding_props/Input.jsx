
export default function Input({richText, ...props}) {
    // return a <textarea> if a richText prop is true
    // return an <input> otherwise
    // forward / set the received props on the returned elements
    return(
        <>
            {richText ? (<textarea {...props}></textarea>): (<input {...props}/>)}
        </>
    )
}
