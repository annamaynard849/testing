// scripts.js

// Modal logic
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close');
const signupForm = document.getElementById('signupForm');

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = signupForm.querySelectorAll('input');
  let values = {};
  inputs.forEach(input => {
    values[input.placeholder.toLowerCase()] = input.value;
  });
  console.log('Account created:', values);
  alert('Thank you for signing up. Our team will reach out to you shortly <3');
  modal.style.display = 'none';
  signupForm.reset();
});
