const loadTools = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
   const res = await fetch(url);
   const data = await res.json();
   displayTools(data.data)
}

const displayTools = tools =>{

    const toolsContainer = document.getElementById('tool-container');
    // display 6 tools only
    const showAll = document.getElementById('show-all')

    if(tools.length > 6){
        features = features.slice(0, 6)
        showAll.classList.remove('d-none')
    }
    else{
        showAll.classList.add('d-none')
    }
    // display all features
    // start loader
    toggleSpinner(true);
    tools.tools.forEach(tool => {
        const toolDiv = document.createElement('div')
        toolDiv.classList.add('col')
        toolDiv.innerHTML =`
        <div class="card h-100">
        <img src="${tool.image}" class="card-img-top p-4" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">1. ${tool.features[0]? tool.features[0]: 'No Details'}</p>
                <p class="card-text">2. ${tool.features[1]? tool.features[1]: 'No Details'}</p>
                <p class="card-text">3. ${tool.features[2]? tool.features[2]: 'No Details'}</p>
            </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-between mt-4">
                        <div>
                            <h4>${tool.name}</h4>
                            <div class="d-flex">
                                <div><i class="fa-solid fa-calendar-days m-2"></i></div>
                                <p>${tool.published_in}</P>
                            </div>
                        </div>
                        <div>
                            <i class="fas fa-arrow-right text-danger" onclick="showDetails('${tools.id}')" data-bs-toggle="modal" data-bs-target="#showDetailModal" style="font-size:25px; background-color: antiquewhite; border-radius: 50%;"></i>
                            
                        </div>
                    </div>
                </div>
        </div>
        `
        toolsContainer.appendChild(toolDiv)
    });
    // stop loader 
    toggleSpinner(false)
}
const showDetails =async id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools/'${id}'`
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.data)
}
const displayDetails = details =>{
    console.log(details)
}
//  display loader 
const toggleSpinner = isLoading =>{
    const loaderSection = document.getElementById('loader')
    if(isLoading){
        loaderSection.classList.remove('d-none')
    }
    else{
        loaderSection.classList.add('d-none')
    }
}

loadTools();