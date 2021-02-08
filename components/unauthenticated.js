import {signIn} from 'next-auth/client'
export default function Authenticated({user}){
    return (
        <div>
            <p>You are not authenticated </p>
            <button onClick={signIn}> signIn</button>
        </div>
    )
}