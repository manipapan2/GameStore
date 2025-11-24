interface ToastProps {
    Text: string;
    Mode?: 'success' | 'warning' | 'error'
}

const ToastContainer = ({Text, Mode,}: ToastProps) => {
    // const bodyTag = document.getElementsByTagName('body')

    // const testTag = document.createElement('h1')
    // testTag.innerText='aaaaaaaaaaaaaaaaa'

    // bodyTag?.appendChild(testTag)
    console.log(Text)
    console.log(Mode)
    return(
        <div>test</div>
    )
}

export default ToastContainer

export const Toast = () => {
    console.log('ok')
}