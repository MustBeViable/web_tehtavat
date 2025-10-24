const API_KEY = "reqres-free-v1";

async function test() {
  const url = "https://reqres.in/api/users/1";
  try {
    const response = await fetch(url, {
      headers: { 'x-api-key': API_KEY },
    });
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

test();
