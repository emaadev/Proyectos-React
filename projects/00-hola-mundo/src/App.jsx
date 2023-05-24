import react from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        // Paso los nombres por medio de la prop "Children"
        <section className='App'>
            <TwitterFollowCard userName="midudev">
                Miguel Ángel
            </TwitterFollowCard>

            <TwitterFollowCard userName="s4vitar">
                Savitar
            </TwitterFollowCard>
        </section>

        // También puedo utilizarlo como propiedad del componente
        // <section className='App'>
        //     <TwitterFollowCard isFollowing userName="midudev" name="Miguel Ángel" />
        //     <TwitterFollowCard isFollowing userName="pheralb" name="Pablo Hernández" />
        //     <TwitterFollowCard isFollowing userName="s4vitar" name="Savitar" />
        // </section>
    )

    // Por detrás lo que realiza es:
    // <React.Fragment>
    //     <TwitterFollowCard userName="midudev" name="Miguel Ángel" />
    //     <TwitterFollowCard userName="midudev" name="Miguel Ángel" />
    // </React.Fragment>
}