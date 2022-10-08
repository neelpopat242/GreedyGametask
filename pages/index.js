import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Affilate from './component/Affiliate'
import Campaign from './component/campaign'
import Client from './component/Client'
import Form from './component/form'
import HearfromClient from './component/HearfromClient'
import Navb from './component/navb'
import Partner from './component/Partner'
import Acquire from './component/Acquire'
import affbg from '../pages/images/bg_img/aff_img1.png'
import clibg from '../pages/images/bg_img/cli_img1.png'
import campaign from '../pages/images/bg_img/campaign.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Greedy Game task</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="http://fonts.googleapis.com/css?family=Lato:400,700"
          rel="stylesheet"
        />
      </Head>

      <Navb></Navb>

      <div className='' style={{position:'relative'}}>

      <div className='col-md-5' style={{ position: 'fixed', left: '50%', top: '10%', zIndex: '3' ,  }}>
        <Form></Form>
      </div>
        <div className='row' style={{
          backgroundImage: `url(${campaign.src})`,
          backgroundColor: "#F7F9FC",
          width: '100%',
          height: '100%'
            }} >
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <Campaign />
          </div>
        </div>

        <div className='row' style={{
          backgroundImage: `url(${affbg.src})`,
          width: '100%',
          height: '100%'
        }}>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <Affilate />
          </div>
        </div>





        <div className='row' style={{ backgroundColor: "white" }}>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <Partner />
          </div>
        </div>

        <div className='row' style={{
          backgroundImage: `url(${clibg.src})`,
          backgroundColor : "#F7F9FC",
          width: '100%',
          height: '100%'
        }}>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <Client />
          </div>
        </div>

        <div className='row' style={{ backgroundColor: "white" }}>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <HearfromClient />
          </div>
        </div>

        <div className='row' style={{ backgroundColor: "black" }}>
          <div className='col-md-1'>
          </div>
          <div className='col-md-5'>
            <Acquire />
          </div>
        </div>

      </div>



      <footer className={styles.footer}>
        <h5>©2022 GreedyGame, Inc. All rights reserved.</h5>
      </footer>

    </div>
  )
}

