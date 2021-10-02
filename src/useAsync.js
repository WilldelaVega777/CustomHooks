//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useState }                   from 'react'
import { useEffect }                  from 'react'
import { useCallback }                from 'react'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
export const useAsync = (callback, dependencies = []) => {
    
    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, [dependencies])

    //-----------------------------------------------------------------
    // Return Section
    //-----------------------------------------------------------------
    return [loading, error, value]

}

//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useAsync
