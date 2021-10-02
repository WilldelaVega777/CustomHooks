//---------------------------------------------------------------------
// Imports Section
//---------------------------------------------------------------------
import { useAsync }				    from './useAsync'


//---------------------------------------------------------------------
// Hook Definition Section
//---------------------------------------------------------------------
const useScript = (url) => {

    //-----------------------------------------------------------------
    // Return Values
    //-----------------------------------------------------------------
    return useAsync(() => {
        const script = document.createElement('script')
        script.src = url
        script.async = true

        return new Promise((resolve, reject) => {
            script.addEventListener('load', resolve)
            script.addEventListener('error', reject)
            document.body.appendChild(script)
        })
    }, [url])

}


//---------------------------------------------------------------------
// Exports Section
//---------------------------------------------------------------------
export default useScript