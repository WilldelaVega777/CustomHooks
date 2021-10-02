//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useEffect }				    from 'react'
import useEventListener                 from './useEventListener'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useWindowSize = () => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    //-----------------------------------------------------------------
    // Hook Logic Section
    //-----------------------------------------------------------------
    useEventListener('resize', () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight            
        })
    })

    //-----------------------------------------------------------------
    // Return Section
    //-----------------------------------------------------------------
    return windowSize

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useWindowSize