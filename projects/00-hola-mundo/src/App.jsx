import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {
        userName: 'LEO-DAC',
        name: 'Leonardo Daniel Alonso Cepeda',
        isFollowing: true
    },
    {
        userName: 'midudev',
        name: 'Miguel Angel Duran',
        isFollowing: false
    },
    {	userName: 'elNiko',
        name: 'Nikolas cervantes',
        isFollowing: true
    },
    {
        userName: 'joss',
        name: 'Jose Manuel',
        isFollowing: false
    }
]
    const format = (userName) => `@${userName}`

export function App (){
    return (
        <section className="App">
    {
            users.map(({userName, name, isFollowing}) => (
                <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    formatUserName={format}
                    name={name}
                    initialIsFollowing={isFollowing}
                />
            ))         
    }
    </section>
   )
}