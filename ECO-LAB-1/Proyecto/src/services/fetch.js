export async function getDataFetch1() {
    // renderLoadingState();

    try {
        const response = await fetch ("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log('data',data);
        
       
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
        console.log('data',data);
        
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
        console.log('data',data);
        
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


