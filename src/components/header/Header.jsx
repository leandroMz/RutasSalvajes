export const Header = () => {
    return (
        <div>
            <div>
                <div className="header-container">
                    <h1 className="header-title">TU PROXIMA AVENTURA EN VEHICULOS MOTORIADOS</h1>
                </div>
                <div className="form-container">
                    <div className="form-select">
                        <select>
                            <option value="" disabled selected>Selecciona ubicación</option>
                            {/* Agrega opciones del select aquí */}
                        </select>
                    </div>
                    <div className="form-input">
                        <input type="date" placeholder="Selecciona fecha" />
                    </div>
                    <div>
                        <button>Encontrar aventura</button>
                    </div>
                </div>
            </div>
        </div>
    )
}