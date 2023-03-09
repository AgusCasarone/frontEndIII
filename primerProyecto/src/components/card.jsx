export const Card = ({ name, instrument }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h2>¡Genial, { name }, ya estás inscriptx!</h2>
            </div>
                <p className="card-text">♫☻♥Tus clases de { instrument } empiezan la semana que viene ♥☻♫</p>
        </div>
    );
}