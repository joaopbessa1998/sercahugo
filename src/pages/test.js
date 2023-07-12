import { storage } from "../firebase";
import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
// firestore
import { collection, doc, setDoc, getDoc } from "firebase/firestore";


export default function Test() {

    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const storageRef = ref(storage, 'collections/amsterdam/bedroom/image10.avif');
        console.log(storage)
        getDownloadURL(storageRef).then(url => {
            setImageUrl(url);
        });
    }, []);

    const divStyle = {
        width: '600px',
        height: '600px',
    }

    const imageStyle = {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }

    


    return (
        <div style={{ paddingTop: '200px'}}>
            <div style={...divStyle}>
                <img style={...imageStyle} src={imageUrl} />
            </div>
        </div>
    )
}