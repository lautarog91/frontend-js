document.addEventListener('DOMContentLoaded', () => {
   let carrito = [];
   let precio = 0;

   let cards = document.querySelectorAll('.card');
   // console.log('cards', cards);

   cards.forEach(card => {

      let btnClic = card.querySelector('button');

      const productTitle = card.querySelector('h3').textContent;
      //const productPrice = card.querySelector('.precio span').textContent.slice(0,1);
      const productP = card.querySelector('p');
      const productPrice = productP ? productP.textContent.replace('Precio: $', '') : '0';

      btnClic.addEventListener('click', () => {
         // console.log(card);
         const product = {
            title: productTitle,
            price: productPrice,
            cantidad: 1
         };

         carrito.push(product);
         precio += parseFloat(product.price);

         localStorage.setItem('productos', JSON.stringify(carrito));
         localStorage.setItem('total', precio);

         document.querySelector('.count').innerText = carrito.length;
      });
   });
});