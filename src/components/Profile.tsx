import styles from '../styles/components/Profile.module.css'

export function Profile() {
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/MiguelMachado-dev.png" alt="Miguel Machado" />

      <div>
        <strong>Miguel Machado</strong>
        <p>
          <img src="icons/level.svg" alt="Nível do usuário" />
          Level 1
          </p>
      </div>
    </div>
  )
}
