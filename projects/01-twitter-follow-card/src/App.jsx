import react from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: "midudev",
        name: "Miguel Ángel",
        isFollowing: false
    },
    {
        userName: "s4vitar",
        name: "Savitar",
        isFollowing: false
    },
    {
        userName: "manuginobili",
        name: "Manuel Ginobili",
        isFollowing: false
    }
]

export function App () {
    return (
        // Paso los nombres por medio de la prop "Children"
        <section className='App'>
            {
                users.map( ({userName, name, isFollowing}) =>             
                        <TwitterFollowCard 
                        key={userName} // Lo mejor sería utilizar un "id", SÓLO en este caso el userName es único
                        userName={userName}
                        initialIsFollowing={isFollowing}
                        >
                        {name}
                        </TwitterFollowCard>
                )
                // Otra opción es la siguiente: 
                // users.map( user => {
                //     const {userName, name, isFollowing} = user

                //     return (
                //         <TwitterFollowCard 
                //         userName={userName}
                //         initialIsFollowing={isFollowing}
                //         >
                //         {name}
                //         </TwitterFollowCard>
                //     )
                // })
            }
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