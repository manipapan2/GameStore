import Spinner from "@/Components/UI/Spinner"
import { ReactElement } from "react"

const Loading = (): ReactElement => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Spinner/>
        </div>
    )
}

export default Loading