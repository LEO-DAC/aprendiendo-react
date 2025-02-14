import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App (){
    const format = (userName) => `@${userName}`
    return (
        <>
             <TwitterFollowCard 
                formatUserName={format}
                isFollowing
                userName="LEO-DAC" 
                name="Leonardo Daniel Alonso Cepeda" />

             <TwitterFollowCard
                formatUserName={format}
                userName="midudev" 
                name="Miguel Angel Duran" />
        </>

    )
}