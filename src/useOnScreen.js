//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useEffect }				    from 'react'
import { useState }				        from 'react'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useOnScreen = (ref, rootMargin = '0px') => {

    //-----------------------------------------------------------------
    // Initialization Section
    //-----------------------------------------------------------------
    const [isVisible, setIsVisible] = useState(false)

    //-----------------------------------------------------------------
    // Lifecycle Eventhandler Methods Section
    //-----------------------------------------------------------------
    useEffect(() => {
        if (ref.current == null)
        {
            return
        }
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.unobserve(ref.current)
    }, [ref.current, rootMargin])

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useOnScreen