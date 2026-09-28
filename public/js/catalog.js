import { getItems } from "./services/api.js";
// import { showToast } from "./ui/ui.js";   // <- útil para el catch

// TODO: Seleccionar el contenedor donde se mostrarán los items
// const catalogContainer = document.getElementById("...");

// Función principal para cargar los items desde la API
async function loadCatalog() {
    try {
        // 1. Pedir los items con getItems()
        // 2. Limpiar el contenedor del catálogo
        // 3. Si el array viene vacío, mostrar un mensaje de "catálogo vacío"
        // 4. Iterar sobre cada item y llamar a renderItem()
    } catch (err) {
        console.error("Error cargando catálogo:", err);
        // TODO: Mostrar el error en la UI (showToast o un mensaje en el contenedor)
    }
}

// Función para renderizar un item en el catálogo
function renderItem(item) {
    // TODO: Crear un elemento HTML (ej: article) y darle estilo con clases de Tailwind.
    // Estas clases combinan bien con el resto de la app:
    //   rounded-card border border-slate-200 bg-white p-4 shadow-sm hover:shadow-md
    // TODO: Asignar los datos del item (name, description).
    // TODO: Insertar el elemento en el contenedor.
}

// Inicializar el catálogo cuando cargue la página
loadCatalog();
