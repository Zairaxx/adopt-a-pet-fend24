// Sample pet data
const pets = [
    {
      id: 1,
      name: 'Bella',
      type: 'Dog', // Added type of pet
      age: 3,
      rescueDate: '2023-09-15',
      breed: 'Labrador',
      color: 'Black'
    },
    {
      id: 2,
      name: 'Milo',
      type: 'Cat', // Added type of pet
      age: 2,
      rescueDate: '2024-01-10',
      breed: 'Siamese',
      color: 'Cream'
    },
    {
      id: 3,
      name: 'Tweety',
      type: 'Bird', // Added type of pet
      age: 1,
      rescueDate: '2024-03-22',
      breed: 'Canary',
      color: 'Yellow'
    }
  ];
  
  function renderPets() {
    const petList = document.getElementById('pet-list');
    petList.innerHTML = '';
  
    pets.forEach(pet => {
      const petDiv = document.createElement('div');
      petDiv.className = 'pet';
      petDiv.innerHTML = `
        <h3>${pet.name}</h3>
        <p><strong>Type:</strong> ${pet.type}</p> <!-- Display type of pet -->
        <p><strong>Age:</strong> ${pet.age} years</p>
        <p><strong>Rescued:</strong> ${pet.rescueDate}</p>
        <p><strong>Breed:</strong> ${pet.breed}</p>
        <p><strong>Color:</strong> ${pet.color}</p>
        <button onclick="editPet(${pet.id})"><i class="fas fa-edit"></i> Edit</button>
        <button onclick="deletePet(${pet.id})"><i class="fas fa-trash"></i> Delete</button>
      `;
      petList.appendChild(petDiv);
    });
  }
  
  function addPet(event) {
    event.preventDefault();
  
    const type = document.getElementById('pet-type').value;
    const name = document.getElementById('pet-name').value;
    const age = parseInt(document.getElementById('pet-age').value, 10);
    const rescueDate = document.getElementById('pet-rescue-date').value;
    const breed = document.getElementById('pet-breed').value;
    const color = document.getElementById('pet-color').value;
  
    const newPet = {
      id: pets.length + 1,
      type, // Add type of pet
      name,
      age,
      rescueDate,
      breed,
      color,
    };
  
    pets.push(newPet);
    renderPets();
  
    // Clear the form
    document.getElementById('pet-form').reset();
  }
  
  // Opens the modal (no real editing logic yet)
  function editPet(id) {
    const modal = document.getElementById('edit-modal');
    modal.style.display = 'block';
  
    // Find the pet element in the DOM
    const petDiv = document.querySelector(`.pet button[onclick="editPet(${id})"]`).parentElement;
  
    // Use DOM traversal to get the pet's data
    const type = petDiv.querySelector('p:nth-child(2)').textContent.replace('Type: ', '').trim();
    const name = petDiv.querySelector('h3').textContent.trim();
    const age = petDiv.querySelector('p:nth-child(3)').textContent.replace('Age: ', '').replace(' years', '').trim();
    const rescueDate = petDiv.querySelector('p:nth-child(4)').textContent.replace('Rescued: ', '').trim();
    const breed = petDiv.querySelector('p:nth-child(5)').textContent.replace('Breed: ', '').trim();
    const color = petDiv.querySelector('p:nth-child(6)').textContent.replace('Color: ', '').trim();
  
    // Pre-fill the modal fields
    document.getElementById('edit-type').value = type;
    document.getElementById('edit-name').value = name;
    document.getElementById('edit-age').value = age;
    document.getElementById('edit-rescue-date').value = rescueDate;
    document.getElementById('edit-breed').value = breed;
    document.getElementById('edit-color').value = color;
  
    console.log(`Open modal to edit pet with id: ${id}`);
  }
  
  // Placeholder - students will complete this
  function deletePet(id) {
    // Students will complete this
  }
  
  // Modal close logic
  function closeModal() {
    document.getElementById('edit-modal').style.display = 'none';
  }
  
  window.onclick = function (event) {
    const modal = document.getElementById('edit-modal');
    if (event.target == modal) {
      closeModal();
    }
  };
  
  document.getElementById('pet-form').addEventListener('submit', addPet);
  renderPets();
