/* eslint-disable react/prop-types */
function PlanetDataGrid ({planetData}) {
    return (
        <section id="planet-data-grid">
            <div className="data-grid-box">
                <h3 className="data-type">Rotation Time</h3>
                <p className="data">{planetData.rotation}</p>
            </div>

            <div className="data-grid-box">
                <h3 className="data-type">Revolution Time</h3>
                <p className="data">{planetData.revolution}</p>
            </div>

            <div className="data-grid-box">
                <h3 className="data-type">Radius</h3>
                <p className="data">{planetData.radius}</p>
            </div>

            <div className="data-grid-box">
                <h3 className="data-type">Average Temp.</h3>
                <p className="data">{planetData.temperature}</p>
            </div>
        </section>
    )
}
export default PlanetDataGrid;