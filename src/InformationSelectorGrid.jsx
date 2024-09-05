/* eslint-disable react/prop-types */
function InformationSelectorGrid({setSelectedInformation}){

    function handleClick(event){
        if(event.currentTarget.classList.contains("overview")){
            setSelectedInformation(() => {
                return "overview"
            })
        } else if(event.currentTarget.classList.contains("structure")){
            setSelectedInformation(() => {
                return "structure"
            })
        } else if(event.currentTarget.classList.contains("geology")){
            setSelectedInformation(() => {
                return "geology"
            })
        }
    }
    
    return (
        <div id="information-selector-grid">
            <div onClick={handleClick} className="information-selector-box overview">
                <p className="selector-number">01</p>
                <h2>Overview</h2>
            </div>

            <div onClick={handleClick} className="information-selector-box structure">
                <p className="selector-number">02</p>
                <h2>Internal Structure</h2>
            </div>

            <div onClick={handleClick} className="information-selector-box geology">
                <p className="selector-number">03</p>
                <h2>Surface Geology</h2>
            </div>
        </div>
    )
};

export default InformationSelectorGrid;