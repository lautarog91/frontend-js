function handleCart() {
   const CARRITO = JSON.parse(localStorage.getItem('productos')) || [];
   const TOTAL = localStorage.getItem('total') || 0;

   let carritoContainer = document.getElementById('item-products');

   if (CARRITO.length === 0) {
      carritoContainer.innerHTML = `
         <p>No hay productos en el carrito.</p>`;

      return;
   }
   
   let tabla = document.createElement('table');
   tabla.classList.add('table');

   let encabezado = `
               <thead>
                  <tr>
                     <th>Producto</th>
                     <th>Cantidad</th>
                     <th>Precio</th>
                  </tr>
               </thead>
               `;

   let cuerpo = '<tbody>';

   CARRITO.forEach( producto => {
      cuerpo += `
               <tr>
                  <td>${producto.title}</td>
                  <td>${producto.cantidad}</td>
                  <td>$${producto.price}</td>
               </tr>
            `;
   });

   cuerpo += '</tbody>';

   tabla.innerHTML = encabezado + cuerpo;

   carritoContainer.appendChild(tabla);

   let precioFinal = document.createElement('p')
   precioFinal.innerText = `Total a pagar: $${TOTAL}`;

   carritoContainer.appendChild(precioFinal);

   let finalizarCmpra = document.createElement('button');
   

}

function limpiarCarrito() {
   if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {

      localStorage.removeItem('productos');
      localStorage.removeItem('total');

      const carritoContainer = document.getElementById('item-products');
      carritoContainer.innerHTML = '';

      document.querySelector('.count').innerText = '0';
   }
}


document.addEventListener('DOMContentLoaded', handleCart);

window.limpiarCarrito = limpiarCarrito;