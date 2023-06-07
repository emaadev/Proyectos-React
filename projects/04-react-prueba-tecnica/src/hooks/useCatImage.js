import { useState, useEffect } from "react"
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';


export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState()

    // Effect to get the image from API
    useEffect((() => {
        if (!fact) return

        const threeFirstWords = fact.split(' ', 3).join(' ')
        
        // Using .splice y .join
            // const firstWord = fact.split(' ').slice(0, 3).join(' ')
            // console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    }), [fact])

    return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
} // { imageUrl: 'https://...' }