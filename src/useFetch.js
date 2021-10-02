//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useAsync }                 from './useAsync'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
export const useFetch = (
    url, 
    options = {}, 
    dependencies = [],
    token = undefined 
) => {
    
    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const DEFAULT_OPTIONS = {
        headers: { 
            'Content-Type': 'application/json',
        }
    }

    if (token)
    {
        DEFAULT_OPTIONS.headers['Authorization'] = 'bearer:' + token
    }

    //-----------------------------------------------------------------
    // Return Section
    //-----------------------------------------------------------------
    return useFetch(() => {
        return fetch(url, {...DEFAULT_OPTIONS, ...options}).then(res => {
            if (res.ok)
            {
                return res.json()
            }
            return res.json().then(json => Promise.reject(json))
        })
    }, dependencies)
}

//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useFetch
