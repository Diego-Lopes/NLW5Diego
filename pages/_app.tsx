import '../styles/global.scss';
import { Header } from '../src/components/Header';
import { Player } from '../src/components/Player';
import styles from '../styles/app.module.scss';
import { PlayerContext } from '../src/contexts/PlayerConstext';

function MyApp({ Component, pageProps }) {
 
  return (
    <PlayerContext.Provider value={'Diego'}>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContext.Provider>
  )
  
}

export default MyApp