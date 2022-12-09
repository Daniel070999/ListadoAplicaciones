import '../styleSheet/Description.css'

function Description(props) {
    return (
        <div className='container-description'>
            <img className='image-aplication'
                src={require(`../images/aplicacion-${props.image}.jpg`)}
                alt='Foto de carnet de mascotas' />
            <div className='container-text-aplication'>
                <p className='name-aplication'>
                    <strong>{props.name}</strong>
                </p>
                <p className='code-name'>Programado con
                    <b> {props.code}</b>
                </p>
                <p className='description-aplication' >{props.description}</p>
            </div>

        </div>
    );
}

export default Description;