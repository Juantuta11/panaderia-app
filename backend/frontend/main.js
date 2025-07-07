async function cargarProductos() {
  const res = await fetch('http://localhost:3000/productos');
  const productos = await res.json();

  const selector = document.getElementById('productoId');
  const lista = document.getElementById('productos');
  lista.innerHTML = ''; 
  selector.innerHTML = ''; 

  const productosDisponibles = productos.filter(prod => prod.stock > 0);

  productosDisponibles.forEach(prod => {
    const option = document.createElement('option');
    option.value = prod._id;
    option.textContent = `${prod.nombre} ($${prod.precio})`;
    selector.appendChild(option);

    const item = document.createElement('p');
    item.textContent = `${prod.nombre} — Precio: $${prod.precio} — Stock: ${prod.stock}`;
    lista.appendChild(item);
  });
}

async function generarGraficoResumen() {
  const res = await fetch('http://localhost:3000/ventas/resumen');
  const datos = await res.json();

  const nombres = datos.map(p => p.nombre);
  const cantidades = datos.map(p => p.totalVendido);

  const ctx = document.getElementById('graficoResumen').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: nombres,
      datasets: [{
        label: 'Ventas por Producto',
        data: cantidades,
        backgroundColor: [
          '#f5b98f', '#ffd9a0', '#fce7c7', '#d08c56', '#f9f2e8'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// ✅ Llamadas independientes fuera de la función
cargarResumenVentas();
generarGraficoResumen();
