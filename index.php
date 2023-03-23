<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>World Generator</title>
    <link rel="icon" type="image/x-icon" href="images/favicon.png" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/style.css">
    <?php include 'scripts/functions.php'; ?>
</head>

<body onload="setLanguage();">
    <main class="container text-center">
        <div class="row d-flex">
            <div class="col-11" style="margin-left: 5.2%;">
              <h1 class="mt-1 my-0 mx-2 " id="bubble-hover"></h1>
            </div>
            <div class="col-1 justify-content-end" style="margin-left: -5.2%;">
              <input type="image" class="btn img-responsive" style="border: none; margin-top: 10px; margin-left: 30%; border-radius: 40%;" src="images/lng.webp" width="100%" onclick="document.cookie = 'language=; expires=Thu, 01 Jan 1970 00:00:00 UTC'; document.location.reload()">  
            </div>
          </div>

        <div class="m-0 d-flex justify-content-center align-items-center">
            <dialog id="languageModal" class="col-6 rounded">
                <p class="fs-5 text-center">
                    <b>Choose the language</b><br />
                    Choose the language of the page.
                    <br /><b>Seleccione el idioma</b><br />
                    Elija el idioma en el que se muestra la página.
                </p>
                <div class="d-flex justify-content-center">
                    <input type="image" class="btn img-responsive" style="border: none" src="images/es.png" width="15%"
                        onclick="setLanguageCookie('es'); window.modeModal.showModal();">
                    <input type="image" class="btn img-responsive" style="border: none" src="images/en.png" width="15%"
                        onclick="setLanguageCookie('en'); window.modeModal.showModal();">
                </div>
            </dialog>
        </div>

        <form class="mt-3 text-white" id="form" style="display: none;">
            <!-- General Settings -->
            <div class="field">
                <label for="mapSize" id="mapSize">
                    <span lang="en">Map Size</span>
                    <span lang="es">Tamaño del Mapa</span>
                </label>
                <input type="number" id="inputMapSize" required min="16" max="128" value="64">
            </div>
            <div class="field">
                <label for="email" id="maxOccArea">
                    <span lang="en">Max Occupied Area</span>
                    <span lang="es">Area Ocupada Total</span>
                </label>
                <input type="number" id="inputMaxOccArea" required min="20" max="95" value="80">
            </div>

            <div class="row mt-4">
                <!-- Nature -->
                <div class="col-12 col-lg-4">
                    <h4>
                        <span lang="en">Nature</span>
                        <span lang="es">Naturaleza</span>
                    </h4>
                    <div class="field">
                        <label for="nMinZones" id="nMinZones">
                            <span lang="en">Min Zones</span>
                            <span lang="es">Min nº de Zonas</span>
                        </label>
                        <input type="number" id="inputNMinZones" required value="2">
                    </div>
                    <div class="field">
                        <label for="nMaxZones" id="nMaxZones">
                            <span lang="en">Max Zones</span>
                            <span lang="es">Max nº de Zonas</span>
                        </label>
                        <input type="number" id="inputNMaxZones" required value="8">
                    </div>
                    <div class="field">
                        <label for="nZoneMaxSize" id="nZoneMaxSize">
                            <span lang="en">Zone Max Size</span>
                            <span lang="es">Area Máxima por Zona</span>
                        </label>
                        <input type="number" id="inputNZoneMaxSize" required value="500">
                    </div>
                    <div class="field">
                        <label for="nTotalMaxSize" id="nTotalMaxSize">
                            <span lang="en">Total Max Size</span>
                            <span lang="es">Max nº de Parcelas</span>
                        </label>
                        <input type="number" id="inputNTotalMaxSize" required value="800">
                    </div>
                </div>

                <!-- Urban -->
                <div class="col-12 col-lg-4">
                    <h4>
                        <span lang="en">Urban</span>
                        <span lang="es">Urbano</span>
                    </h4>
                    <div class="field">
                        <label for="uMinZones" id="uMinZones">
                            <span lang="en">Min Zones</span>
                            <span lang="es">Min nº de Zonas</span>
                        </label>
                        <input type="number" id="inputUMinZones" required value="4">
                    </div>
                    <div class="field">
                        <label for="uMaxZones" id="uMaxZones">
                            <span lang="en">Max Zones</span>
                            <span lang="es">Max nº de Zonas</span>
                        </label>
                        <input type="number" id="inputUMaxZones" required value="6">
                    </div>
                    <div class="field">
                        <label for="uZoneMaxSize" id="uZoneMaxSize">
                            <span lang="en">Zone Max Size</span>
                            <span lang="es">Area Máxima por Zona</span>
                        </label>
                        <input type="number" id="inputUZoneMaxSize" required value="100">
                    </div>
                    <div class="field">
                        <label for="uTotalMaxSize" id="uTotalMaxSize">
                            <span lang="en">Total Max Size</span>
                            <span lang="es">Max nº de Parcelas</span>
                        </label>
                        <input type="number" id="inputUTotalMaxSize" required value="800">
                    </div>
                </div>

                <!-- Commercial -->
                <div class="col-12 col-lg-4">
                    <h4>
                        <span lang="en">Commercial</span>
                        <span lang="es">Comercial</span>
                    </h4>
                    <div class="field">
                        <label for="cMinZones" id="cMinZones">
                            <span lang="en">Min Zones</span>
                            <span lang="es">Min nº de Zonas</span>
                        </label>
                        <input type="number" id="inputCMinZones" required value="2">
                    </div>
                    <div class="field">
                        <label for="cMaxZones" id="cMaxZones">
                            <span lang="en">Max Zones</span>
                            <span lang="es">Max nº de Zonas</span>
                        </label>
                        <input type="number" id="inputCMaxZones" required value="8">
                    </div>
                    <div class="field">
                        <label for="cZoneMaxSize" id="cZoneMaxSize">
                            <span lang="en">Zone Max Size</span>
                            <span lang="es">Area Máxima por Zona</span>
                        </label>
                        <input type="number" id="inputCZoneMaxSize" required value="50">
                    </div>
                    <div class="field">
                        <label for="cTotalMaxSize" id="cTotalMaxSize">
                            <span lang="en">Total Max Size</span>
                            <span lang="es">Max nº de Parcelas</span>
                        </label>
                        <input type="number" id="inputCTotalMaxSize" required value="200">
                    </div>
                </div>
            </div>
        </form>
        
        <h1 class="mt-1 my-0 mx-2" id="waitMessage">
            <span lang="en">Please wait...</span>
            <span lang="es">Por favor, espere...</span>
        </h1>
        <div class="mt-4 mb-3" id="map">
        </div>

        <div class="d-flex justify-content-center">
            <button id="btnGenerate" onclick="redirect()">
                <span lang="en">Generate</span>
                <span lang="es">Generar</span>
            </button>
            
            <button style="margin-left: 40px; display: none;" id="btnSave" onclick="sendMap()">
                <span lang="en">Save</span>
                <span lang="es">Guardar</span>
            </button>
            
            <button style="margin-left: 40px; display: none;" id="btnBack" onclick="window.location.href='index.php'">
                <span lang="en">Edit Settings</span>
                <span lang="es">Cambiar configuración</span>
            </button>
        </div>
        
        <p class="mt-4" style="color: red" id="errorMessage"></p>

        <!-- Table -->
        <div class="row">
            <div class="col-12">
                <table id="table" class="table table-striped table-dark">
                    <thead>
                        <tr>
                            <th></th>
                            <th><span lang="en">Maps</span><span lang="es">Mapas</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php showMaps()?>
                    </tbody>
                </table>
            </div>
        </div>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="js/lang.js"></script>
    <script src="js/title.js"></script>
    <script src="js/script.js" defer></script>
</body>

</html>