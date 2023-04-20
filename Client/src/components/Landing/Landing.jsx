import Form from '../Form/Form'
import style from './Landing.module.css'

const Landing = ({ login }) => {
    return(
        <div className={style.container}>
            <h1 className={style.title}>Welcome to Rick & Morty App</h1>
            <Form login={login} />
        </div>
    )
}

export default Landing;