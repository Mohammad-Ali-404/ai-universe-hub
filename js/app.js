const loadTools = async() =>{
    const url = `https://openapi.programming-hero.com/api/ai/tools`
   const res = await fetch(url);
   const data = await res.json();
   displayTools(data.data)
}

const displayTools = tools =>{
    console.log(tools)
    const toolsContainer = document.getElementById('tool-container');
    tools.tools.forEach(tool => {
        const toolDiv = document.createElement('div')
        toolDiv.classList.add('col')
        toolDiv.innerHTML =`
        <div class="card h-100">
        <img src="" class="card-img-top p-4" alt="...">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
            </div>
                <div class="card-footer">
                    <small class="text-muted">Last updated 3 mins ago</small>
                </div>
        </div>
        `
        toolsContainer.appendChild(toolDiv)
    });
}

loadTools();