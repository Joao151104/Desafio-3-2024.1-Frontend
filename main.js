document.getElementById('estado').addEventListener('change', function() {
    const uf = this.value;
    if (uf) {
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const iframe = document.getElementById('municipiosFrame');
                const municipiosDocument = iframe.contentDocument || iframe.contentWindow.document;
                const municipiosList = municipiosDocument.getElementById('municipios');
                municipiosList.innerHTML = ''; 

                data.forEach(municipio => {
                    const listItem = municipiosDocument.createElement('li');
                    listItem.textContent = municipio.nome;
                    municipiosList.appendChild(listItem);
                });
            })
    } else {
        const iframe = document.getElementById('municipiosFrame');
        const municipiosDocument = iframe.contentDocument || iframe.contentWindow.document;
        municipiosDocument.getElementById('municipios').innerHTML = ''; 
    }
});
