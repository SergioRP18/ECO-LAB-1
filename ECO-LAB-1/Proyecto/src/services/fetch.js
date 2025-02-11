export async function getDataFetch1() {
    // renderLoadingState();

    try {
        const response = await fetch ("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log('data',data);
        
        renderDataFetch(data.results);
    } catch(error) {
        renderErrorState();
    }
};

export async function getDataFetch2() {
    renderLoadingState();

    try {
        const response = await fetch ("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        renderDataFetch(data.data);
    } catch(error) {
        renderErrorState();
    }
};

export async function getDataFetch3() {
    renderLoadingState();

    try {
        const response = await fetch ("https://api.jikan.moe/v4/anime");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        renderDataFetch(data.data);
    } catch(error) {
        renderErrorState();
    }
};

const renderErrorState = () => {
    const error = document.querySelector("app-container");
    error.innerText = "Not Found";
    console.log("Not Found");
};


const renderLoadingState = () => {
    const loading = document.querySelector("app-container");
    loading.innerText = "Loading...";
    console.log("Loading...");
};


const renderDataFetch = (data) => {
    const dataInfo = document.querySelector("app-container");
    dataInfo.innerHTML = JSON.stringify(data, null, 2);

    const div = document.createElement("div");
    div.className = "item";
    div.innerHTML = ` <img src="${data?.results}" alt="Random Dog Image">`;
    container.appendChild(div);
}