import Image from 'next/image'
import { Header } from 'semantic-ui-react'
import Gnb from './Gnb'

function Top() {
    return (
        <div>
            <div style={{ display:'flex', paddingTop: 20 }}>
                <div style={{ flex: '100px 0 0' }}>
                    <Image 
                        src="/images/nextjs.png" 
                        alt="logo"
                        width={80} 
                        height={80} 
                        style={{display: 'block'}}
                        />    
                </div>
                <Header as="h1">넥스트JS</Header>
            </div>
            <Gnb />
        </div>
    
    )
}

export default Top