const API_KEY = "M3tr0p0l14!";

async function test() {
  const url = "https://reqres.in/api/users/1";
  try {
    const response = await fetch(url, {
      headers: { Authorization: `Bearer ${API_KEY}` },
    });
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

test();
