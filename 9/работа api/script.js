async function getUsers() {
    try {
      const response = await fetch('https://randomuser.me/api/?results=3');
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
  
      const userData = document.getElementById('text-block');

      data.results.forEach(user => {
        console.log(user);
        const element = document.createElement('div');
        element.textContent = `${user.name.first} ${user.name.last} - ${user.email}`;
        userData.appendChild(element);
      });
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }
  
  getUsers();


  
  