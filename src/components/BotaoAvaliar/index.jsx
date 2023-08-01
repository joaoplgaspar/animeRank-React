import styles from './BotaoAvaliar.module.scss'
import { MdOutlineGrade } from 'react-icons/md'

export default function BotaoAvaliar( {small} ) {
  return (
    !small ? <div className={styles.btnAvaliar}>
        <button>
            Avalie
            <MdOutlineGrade className={styles.icon}/>
        </button>
    </div> :
    <div className={styles.btnAvaliar__small}>
      <button>
            <MdOutlineGrade className={styles.icon}/>
        </button>
    </div>
  )
}
