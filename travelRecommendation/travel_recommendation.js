function search() {
    const input = document.getElementById('keyword').value.toLowerCase();
    fetch('./travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const allKeys = Object.keys(data);
            const properties = allKeys.filter(key => typeof data[key] !== 'function');
            const string = " " + properties.join(" ");
            const condition = string.indexOf(input);
            if (condition == 1) {
                document.getElementById('right-content').innerHTML = '';
                for (let i = 0; i < 2; i++) {
                    const node = document.createElement("div");
                    node.className = 'item';
                    node.innerHTML = `<img src="${data.countries[0].cities[i].imageUrl}" alt="placeholder">
                                  <div class="detail">
                                      <h2>${data.countries[0].cities[i].name}</h2>
                                      <p>${data.countries[0].cities[i].description}</p>
                                      <div class="btnVisit">Visit</div>
                                  </div>`;
                    document.getElementById('right-content').appendChild(node);
                }
            } else if (condition == 10) {
                document.getElementById('right-content').innerHTML = '';
                for (let i = 0; i < 2; i++) {
                    const node = document.createElement("div");
                    node.className = 'item';
                    node.innerHTML = `<img src="${data.temples[i].imageUrl}" alt="placeholder">
                                  <div class="detail">
                                      <h2>${data.temples[i].name}</h2>
                                      <p>${data.temples[i].description}</p>
                                      <div class="btnVisit">Visit</div>
                                  </div>`;
                    document.getElementById('right-content').appendChild(node);
                }
            } else if (condition == 18) {
                document.getElementById('right-content').innerHTML = '';
                for (let i = 0; i < 2; i++) {
                    const node = document.createElement("div");
                    node.className = 'item';
                    node.innerHTML = `<img src="${data.beaches[i].imageUrl}" alt="placeholder">
                                  <div class="detail">
                                      <h2>${data.beaches[i].name}</h2>
                                      <p>${data.beaches[i].description}</p>
                                      <div class="btnVisit">Visit</div>
                                  </div>`;
                    document.getElementById('right-content').appendChild(node);
                }
            } else {
                document.getElementById('right-content').innerHTML = '';
            }
        })
        .catch(error => {
            console.log(`Error fetching JSON: ${error}`);
        })
}

function clear() {
    document.getElementById('right-content').innerHTML = '';
}

document.getElementById('btnSearch').addEventListener('click', search);
document.getElementById('btnClear').addEventListener('click', clear);