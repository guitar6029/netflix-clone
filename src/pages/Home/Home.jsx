import styles from './Home.module.scss'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

function Home() {
    return (
        <>
        <div className='d-flex flex-column'>
        <NavBar />
            <div className={styles.hero}>

                <div className={`${styles.heroContainer} hero-container d-flex flex-column align-items-center justify-content-center`}>
                    <div className={styles.heroTitle}>
                        <span>Great Adventure</span>
                    </div>

                    <div className={styles.heroText}>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores amet exercitationem laborum earum sint quod rerum ad, illum odio cupiditate expedita assumenda magnam minima quas velit tempore alias accusamus facere!</span>
                    </div>

                    <button className="btn btn-secondary btn-lg mt-1"> Watch Now</button>

                </div>

            </div>
            <Footer />

        </div>
            
        </>
    )
}

export default Home