//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useEffect }				    from 'react'
import { useRef }				        from 'react'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useEventListener = (eventType, callback, element = window) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const callbackRef = useRef(callback)

    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        callbackRef.current = callback
    }, [callback])
    //-----------------------------------------------------------------
    useEffect(() => {
        const handler = e => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useEventListener