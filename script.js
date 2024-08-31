const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');

// Animacao de abrir o menu lateral
menuBtn.addEventListener('click', () => {
  sideMenu.style.display = 'block';
})

// Animacao de fechar o menu lateral
closeBtn.addEventListener('click', () => {
  sideMenu.style.display = 'none';
})

// Trocar o tema da dashboard
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');
// Animacao do botao de trocar tema
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

// Preenchendo com pedidos a parte dos Recents Orders
Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
                      <td>${order.productName}</td>
                      <td>${order.productNumber}</td>
                      <td>${order.paymentStatus}</td>
                      <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'pending' ? 'warning' : 'primary'}">${order.shipping}</td>
                      <td class="primary">Details</td>
                      `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
})