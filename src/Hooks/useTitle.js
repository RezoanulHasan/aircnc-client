import { useEffect } from "react"

const useTitle = title => {

    useEffect (() => {
document.title= `  ${title}-AirCNC`

    },[title])
};

export default  useTitle ;