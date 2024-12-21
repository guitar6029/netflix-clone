import BellIcon from '../Icons/BellIcon'
import ChevronDownIcon from '../Icons/ChevronDownIcon'
import ProfileIcon from '../Icons/ProfileIcon'
import SearchIcon from '../Icons/SearchIcon'
import styles from './NavBar.module.scss'

function NavBar() {
    return (
        <div className={`${styles.navbar} d-flex align-items-center justify-content-between`}>
            <div className='d-flex align-items-center gap-2'>
                {/* <img src={movieIconImg} alt="movie icon" width="100" height="100" /> */}
                <span className={styles.nclone}> N</span>
                {/* Menu Items no dots */}

                <ul className='d-flex gap-2 align-items-center list-unstyled'>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse By Language</li>
                </ul>
            </div>

            <div className="d-flex align-items-center gap-2">
                <input className='form-control' type="text" placeholder="Search" />
                <SearchIcon className={styles.icon} />
                <BellIcon className={styles.icon} />
                <ProfileIcon className={styles.icon} />
                <ChevronDownIcon className={styles.icon} />
            </div>
        </div>
    )
}

export default NavBar