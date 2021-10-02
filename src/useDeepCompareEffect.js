//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useEffect }				    from 'react'
import { useRef }				        from 'react'
import isEqual                          from 'lodash/fp/isEqual'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useDeepCompareEffect = (url) => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const currentDependenciesRef = useRef()

    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(callback, [currentDependenciesRef.current])

    //-----------------------------------------------------------------
    // Hook Logic Section
    //-----------------------------------------------------------------
    if (!isEqual(currentDependenciesRef.current, dependencies)) 
    {
        currentDependenciesRef.current = dependencies
    }

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useDeepCompareEffect