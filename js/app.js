const loadTools = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
   const res = await fetch(url);
   const data = await res.json();
   displayTools(data.data)
}

const displayTools = tools =>{

    const toolsContainer = document.getElementById('tool-container');
    
    // display all features
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
                    <p>${tool.published_in}</P>
                    </div>

                    <div>
                    <i class="fas fa-arrow-right text-danger" onclick="showDetails('${tools.id}')" style="font-size:25px; background-color: antiquewhite; border-radius: 50%;"></i>
                    
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
const showDetails = id =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}
//  start loader
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