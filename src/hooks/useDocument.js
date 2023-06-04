import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";


export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // Realtime Data for Documents
    useEffect(() =>{
        const ref = projectFirestore.collection(collection).doc(id)


        const unsubscribe = ref.onSnapshot((snapshot) =>{
           if (snapshot.data()) {
               setDocument({...snapshot.data(), id:snapshot.id})
               setError(null)
           }else{
            setError("NO SUCH DATA EXISTS")
           }
               
        }, err =>{
            console.log(err.message);
            setError("Failed To get doc")
        })

        return () => unsubscribe()
    }, [collection,id])


    return {error,document};
}
 