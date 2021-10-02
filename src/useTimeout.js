//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useCallback }              from 'react'
import { useEfect }                 from 'react'
import { useRef }                   from 'react'

//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useTimeout = (callback, delay) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    //-----------------------------------------------------------------
    // Lifecycle Eventhancler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])
    //-----------------------------------------------------------------
    useEffect(() => {
        set()
        return clear
    }, [delay, set, clear])

    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current, delay)
    }, [delay])
    //-----------------------------------------------------------------
    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])
    //-----------------------------------------------------------------
    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    //-----------------------------------------------------------------
    // Return Values
    //-----------------------------------------------------------------    
    return {reset, clear}
    
}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useTimeout
