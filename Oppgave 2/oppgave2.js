const users = [
    { id: 0, name: "Trude", age: 77 },
    { id: 1, name: "Simen", age: 85 },
    { id: 2, name: "Lars", age: 99 },
    { id: 3, name: "Ali", age: 34 },
    { id: 4, name: "Finn", age: 60 },
    { id: 5, name: "Kåre", age: 70 },
    { id: 6, name: "Hanne", age: 20 },
    { id: 7, name: "Åse", age: 21 },
    { id: 8, name: "Anne", age: 6 },
    { id: 9, name: "Amanda", age: 31 },
    { id: 10, name: "Morgan", age: 87 }
  ];
  
// TODO: Hent HTML #id med getElementById -done
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const userUl = document.getElementById("users");

///////////////////////////Sammerberidet med Tore Pedersen//////////////////////////////////////////////////////////
  
const createTableUI = (users) => {
    userUl.innerHTML = null;
    userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
    for (const user of users) {
      userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
    }
};

const handleSearch = (inputSearch) => {
    // TODO: Hent ut verdien fra søke input feltet -done
    //Henter input Value fra search
    const searchNameValue = inputSearch.target.value.toLowerCase();
    console.log(searchNameValue);

    //Sjekker om lsiten inneholder navnet
    //const searchList = users.find(searchedName => searchedName.name.toLowerCase() === searchNameValue.toLowerCase());
    //console.log(searchList);

    // TODO: Bruk .find for å finne navnet til den brukeren som matcher søkeordet -done
    if (searchList = users.find(searchedName => searchedName.name.toLowerCase() === searchNameValue.toLowerCase())) {
        let userId = searchList;
        console.log(userId);
    // TODO: Oppdatere grensesnittet med createTableUI og resultatet av søket -done
        userUl.innerHTML = null;
        userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
        userUl.innerHTML += `<li><span>${userId.id}</span><span>${userId.name}</span><span>${userId.age}</span></li>`;
    }
    // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe -done
    else if (searchNameValue !== searchList) {
        userUl.innerHTML =  `<li>` + `Finner ingen personer ved det navnet.` + `</li>`;
    }
    // TODO: Hvis ingen søkeord vis default liste med brukere via createTableUI -done
    if (searchInput.value == 0 || searchInput.value == undefined || searchInput.value.trim()==``) {
        main();
    }  
  };
  
const handleFilter = () => {
    // TODO: Hent ut verdien fra filter input feltet -done
    const filterValue = filterInput.value;
    console.log(filterValue);
    const numberOfFilter = parseInt(filterValue);
    console.log(numberOfFilter);
    const checkNumber = Number.isNaN(numberOfFilter);
    console.log(checkNumber);

    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien -done
    const userAge = users.filter(agePerson => {
        return agePerson.age > filterValue;
    })
    console.log(userAge);

    //Sorter arryen fra lavest til høyest
    const sortByAge = users.sort(function(a, b) {
        return a.age - b.age;
    });
    console.log(sortByAge);

    //Finne siste i arrayen(aka høyest alder)
    const highestAge = sortByAge[sortByAge.length -1].age;
    console.log(highestAge);

    //Finne siste i arrayen(aka lavest alder)
    const lowestAge = sortByAge[0].age;
    console.log(lowestAge);

    userUl.innerHTML = null;

    //TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI 
    if(filterInput.value == null || typeof filterInput === 'string' || checkNumber === true){      
        userUl.innerHTML = null;
        main();
    }
    // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe -done
    else if (numberOfFilter >= highestAge) {
        userUl.innerHTML =  `<li>` + `Finner ingen personer som har høyere alder.` + `</li>`;
    }
    // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret -done
    else if(typeof numberOfFilter === 'number') {
        userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
        for (i = 0; i < userAge.length; i++) {
            userUl.innerHTML += 
            `<li>
            <span>` + userAge[i].id + `</span>
            <span>` + userAge[i].name + `</span>
            <span>` + userAge[i].age + `</span>
            </li>`
        }
    }
    else {
        main();
    }
  };
  
  const main = () => {
    createTableUI(users);
  };
  
  main();
  
// TODO: Lytt til tastatur klikk på søkefeltet, den skal trigge søkefunksjonen (handleSearch) -done
searchInput.addEventListener('input', handleSearch);
// TODO: Lytt til klikk på filter-knappen, den skal trigge filterfunksjonen (handleFilter) -done
filterButton.addEventListener('click', handleFilter);



//https://stackoverflow.com/questions/574941/best-way-to-track-onchange-as-you-type-in-input-type-text
//https://stackoverflow.com/questions/12462318/find-a-value-in-an-array-of-objects-in-javascript
//https://stackoverflow.com/questions/24718349/how-do-i-make-array-indexof-case-insensitive
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

/*
const handleFilter = (filterInput) => {
    // TODO: Hent ut verdien fra filter input feltet -done
    const filterValue = filterInput.target.value;
    console.log(filterValue);

    // TODO: Bruk .filter for å hente ut de brukeren  som har en alder høyere en filterverdien -done
    if (filterAge = users.filter(checkAge => checkAge.age > filterValue)) {
        let userAge = filterAge;
        console.log(userAge);

        // TODO: Oppdatere grensesnittet med createTableUI og resultatet av filteret
        userUl.innerHTML = null;
        for (index = 0; index < userAge.length; index++) {
            userUl.innerHTML += `<li><span>${index.id}</span><span>${index.name}</span><span>${index.age}</span></li>`;
        }
    }
    // TODO: Oppdatere grensesnittet med userUl.innerHTML og en passende tekst når vi ikke finner noe
    else if (filterValue < userAge > 1 || userAge < 100) {
        userUl.innerHTML =  `<li>` + `Finner ingen personer med høyere alder.` + `</li>`;
    }
    // TODO: Hvis ingen filter eller filteret ikke er et tall vis default liste med brukere via createTableUI -done
    if (filterInput.value == null || filterInput.value == undefined || filterInput.value.trim()==`` || typeof 'number') {
        main();
    }
  };
  
  */