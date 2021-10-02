//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useState }                   from 'react'
import { useEffect }                  from 'react'
import { useCallback }                from 'react'

//---------------------------------------------------------------------
// Specific Hook Implementations Section
//---------------------------------------------------------------------
export const useLocalStorage = (key, defaultValue) => {
    return useStorage(key, defaultValue, window.localStorage)
}
//---------------------------------------------------------------------
export const useSessionStorage = (key, defaultValiue) => {
    return useStorage(key, defaultValue, window.sessionStorage)
}


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useStorage = (key, defaultValue, storageObject) => {
    
    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null)
        {
            return JSON.parse(jsonValue)
        }

        if (typeof initialValue === 'function')
        {
            return defaultValue()
        }
        else
        {
            return defaultValue
        }
    })


    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        if (value === undefined)
        {
            return storageObject.removeItem(key)
        }
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    //-----------------------------------------------------------------
    // Internal Functions Section
    //-----------------------------------------------------------------
    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    //-----------------------------------------------------------------
    // Return Section
    //-----------------------------------------------------------------
    return [value, setValue, remove]

}

//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useStorage
