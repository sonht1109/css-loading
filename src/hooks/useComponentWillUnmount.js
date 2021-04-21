import { useEffect } from "react"

const useComponentWillUnmount = callback => {
  useEffect(() => () => {
    callback()
  }, [])
}

export default useComponentWillUnmount