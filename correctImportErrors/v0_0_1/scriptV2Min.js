var invoicesHeadersDf,InvoicesLinesDf,dupInvoicesHeadersDf,dupInvoicesLinesDf,noDupsInvoicesHeadersDf,noDupsInvoicesLinesDf,InvoicesHeadersMinDf,InvoicesLinesMinDf,dataSetInvoiceHeaders,dataSetInvoiceLines,suppliersList,InvoicesList,fileInScope=document.getElementById("fileInScope"),readFilebutton=document.getElementById("readFilebutton"),tabsNavsAndAppContent=document.getElementById("tabsNavsAndAppContent"),appInProgress=document.getElementById("appInProgress"),tab5PaneContent=document.getElementById("tab5PaneContent"),tab5PaneContentInProgress=document.getElementById("tab5PaneContentInProgress"),supplierSelector=document.getElementById("supplierSelector"),invoiceSelector=document.getElementById("invoiceSelector"),existInvoicesDuplicates=!1;function formatAsCurrency(n){var t=new Array(2);if(n.includes(".")){let e=parseFloat(n).toFixed(2).toString().split(".");t[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),t[1]=e[1]}else t[0]=n.replace(/\B(?=(\d{3})+(?!\d))/g,","),t[1]=".00";return"$ "+t.join(".")}async function drawAdHocTable(n,e){var r=new google.visualization.DataTable,t=new Array,o=new Array;for(let e=0;e<n.ctypes.$index.length;e++){var a=n.ctypes.$index[e].toString(),i=n.ctypes.$data[e].toString(),i="boolean"==i?"boolean":"float32"==i?"number":"int32"==i?"number":"string";t.push(a),o.push(i),r.addColumn(i,a)}new Array,n.values.forEach(function(n){let t=new Array;for(let e=0;e<n.length;e++)"string"==o[e]&&((tmpStr=n[e].toString()).includes('"')?t.push(tmpStr.replace('"',"").replace('"',"")):t.push(tmpStr)),"number"==o[e]&&((tmpStr=n[e].toString()).includes(".")?t.push({v:parseFloat(tmpStr),f:formatAsCurrency(tmpStr)}):t.push({v:parseFloat(tmpStr),f:tmpStr})),"boolean"==o[e]&&t.push(n[e]);r.addRows([t])});new google.visualization.Table(document.getElementById(e)).draw(r,{showRowNumber:!0,width:"100%",height:"100%"})}async function addOptionstoSuppliersMenu(){for(let n=0;n<suppliersList.length;n++){var t=suppliersList[n].text;let e=document.createElement("option");e.value=suppliersList[n].value,e.innerHTML=t,supplierSelector.appendChild(e)}}function getInvoideData(n){var e,t,r=new Array,o=new Array,a=dataSetInvoiceHeaders.filter(e=>e.Numero_de_factura==n),i=a[0].Identificador_de_cabecera_de_factura;for(e in a[0])r.push(e);for(let e=0;e<a.length;e++){var s=a[e],c=new Array;for(let e=0;e<r.length;e++)c.push(s[r[e]]);o.push(c)}for(t in drawAdHocTable(subSetInvoiceHeadersDf=new dfd.DataFrame(o,{columns:invoiceHeadersMinColumns}),"tab5PaneContentInvoiceHeaders"),r=new Array,o=new Array,(a=dataSetInvoiceLines.filter(e=>e.Identificador_de_cabecera_de_factura==i))[0])r.push(t);for(let e=0;e<a.length;e++){s=a[e],c=new Array;for(let e=0;e<r.length;e++)c.push(s[r[e]]);o.push(c)}drawAdHocTable(subSetInvoiceLinesDf=new dfd.DataFrame(o,{columns:invoiceLinesMinColumns}),"tab5PaneContentInvoiceLines")}function getSupplierInvoices(n){InvoicesList=new Array;var t=dataSetInvoiceHeaders.filter(e=>e.Proveedor==n);for(let e=0;e<t.length;e++){var r=t[e].Numero_de_factura,o=t[e].Importe_de_factura.toFixed(2).toString();InvoicesList.push({text:r+" - "+formatAsCurrency(o),value:r})}for(;invoiceSelector.firstChild;)invoiceSelector.removeChild(invoiceSelector.firstChild);for(let n=0;n<InvoicesList.length;n++){let e=document.createElement("option");e.value=InvoicesList[n].value,e.innerHTML=InvoicesList[n].text,invoiceSelector.appendChild(e)}getInvoideData(InvoicesList[0].value)}async function readFileInScope(){console.log("running");const e=new FileReader;e.onload=e=>{e=e.target.result;splitHeadersAndLines(e).then(getDuplicatesSet().then(console.log("duplicates - done!")),getUniqueInvoices().then(console.log("unique records - done!")),getReducedDataSets().then(console.log("reports - done!")),tabsNavsAndAppContent.classList.replace("d-none","d-block"),appInProgress.classList.replace("d-block","d-none"),tab5PaneContent.classList.replace("d-none","d-block"),tab5PaneContentInProgress.classList.replace("d-block","d-none"))},e.onerror=e=>{e=e.target.error;console.error(e)},e.readAsText(selectedFile)}function searchSupplierInvoices(){var e=supplierSelector.value;console.log("updating for: ",e),getSupplierInvoices(e)}function searchInvoiceData(){var e=invoiceSelector.value;console.log("searching for invoice: ",e),getInvoideData(e)}function addEventListeners(){fileInScope.addEventListener("change",e=>{selectedFile=e.target.files[0],readFilebutton.disabled=!1}),readFilebutton.addEventListener("click",e=>{tabsNavsAndAppContent.classList.replace("d-block","d-none"),appInProgress.classList.replace("d-none","d-block"),readFileInScope()})}required_libraries=["https://cdn.jsdelivr.net/npm/danfojs@1.0.2/lib/bundle.min.js","https://cdn.jsdelivr.net/gh/ramiroromanacosta/celulaAuxApps@main/correctImportErrors/v0_0_1/columnsInScopeMin.js","https://cdn.jsdelivr.net/gh/ramiroromanacosta/celulaAuxApps@main/correctImportErrors/v0_0_1/custom_functionsMin.js"];const loadScript=function(r){return new Promise(function(e,n){const t=document.createElement("script");t.src=r,t.addEventListener("load",function(){e(!0)}),document.head.appendChild(t)})},waterfall=function(e){return e.reduce(function(e,n){return e.then(function(){return n.then(function(e){return!0})})},Promise.resolve([]))},loadScriptsInOrder=function(e){e=e.map(function(e){return loadScript(e)});return waterfall(e)};loadScriptsInOrder(required_libraries).then(function(){fileInScope.value="",readFilebutton.disabled=!0,addEventListeners()});