// Add your code here

// Format I
/*  const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify( {
        dogName: "Byron",
        breed: "Poodle",
    }),
 };

 fetch("http://localhost:3000/dogs", configurationObject); */

 // Format II
/* fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    }),
}); */

// Format III
/* const formData = {
    dogName: "Scooby Doo",
    dogBreed: "Great Dane",
};

const configurationObject = {
   method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(formData),
};

fetch("http://localhost:3000/dogs", configurationObject)
    .then(response => response.json())
    .then(object => console.log(object))
    .catch(function (occuredError) {
        alert("Bad things happend! WAAH!");
        console.error(occuredError.message);
    }); */

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(
            {
                name,
                email,
            }
        ),
    })
    .then(response => response.json())
    .then((data) => {
        const p = document.createElement('p');
        p.textContent = data.id;
        document.getElementsByTagName('body')[0].appendChild(p);
    })
    .catch((error) => {
        console.error(error.message);
        const p = document.createElement('p');
        p.textContent = error.message;
        document.getElementsByTagName('body')[0].appendChild(p);
    });
}

