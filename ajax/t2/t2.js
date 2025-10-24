async function test() {
    const url = 'https://reqres.in/api/users/1';
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
    } catch (e) {
        console.log(e.message);
    }
}

test();