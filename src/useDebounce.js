//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useEffect }                from 'react'
import useTimeout                   from './useTimeout'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useDebounce = (callback, delay, dependencies) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const  { reset, clear } = useTimeout(callback, delay)

    //-----------------------------------------------------------------
    // Lifecycle Eventhancler Methods Section
    //-----------------------------------------------------------------
    useEffect(clear, [])
    useEffect(reset, [...dependencies, reset])

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useDebounce