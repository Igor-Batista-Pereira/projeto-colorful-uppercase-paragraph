import './button.css'

const Button = (props) => { 

    const message = () =>{
        alert('A label desse botão é: Quest React Basica 2')
    }

    return (
            <div className = 'btn-container'>

                <button className='btn' onClick={message}>{props.label}</button>

            </div> 
    )
}

export default Button;