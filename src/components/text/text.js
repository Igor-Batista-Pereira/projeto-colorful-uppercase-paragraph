import React from 'react';
import './text.css';

const Text = ({fontText, uppercase}) => { 

    return (
            <div>
                <p className='text'> Esse é o meu parágrafo para a quest de React </p>
                
                <p className='text' style={{color:fontText, textTransform:uppercase}}> Esse é o meu parágrafo para a quest de React </p>
                
            </div> 
    )
}

Text.defaultProps = {
    fontText: 'purple',
    uppercase: 'uppercase'
}

export default Text