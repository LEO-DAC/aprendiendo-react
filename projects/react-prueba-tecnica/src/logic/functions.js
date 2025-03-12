
export function handleSubmit(FACTS_CAT) {
    fetch(FACTS_CAT)
    .then(response  => response.json())
    .then(data => {
        console.log("handleSbmit")
        console.log("data = "+ data.fact)
        return data.fact
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });

}


