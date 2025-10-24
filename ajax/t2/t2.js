const API_KEY = "reqres-free-v1";
data = {
  name: "morpheus",
  job: "leader",
};

async function test() {
  const url = "https://reqres.in/api/users";
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

test();
