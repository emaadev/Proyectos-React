import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
    const [fact, setFact] = useState()
    
    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    // Effect to get the text from API
    useEffect(refreshFact, [])

    return { fact, refreshFact }
}