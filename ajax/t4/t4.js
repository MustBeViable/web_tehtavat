const API_KEY = "reqres-free-v1";
const WRONG_KEY = "vaara_avain";

async function fetchData(url, options) {
  const data = await fetch(url, options);
  if (!data.ok) {
    throw new Error(`${data.status}: ${data.statusText}`);
  } else {
    return data.json();
  }
}

async function testSuccess() {
  try {
    const user = {
      name: "John Doe",
      job: "Developer",
    };
    const url = "https://reqres.in/api/users";
    const options = {
      method: "POST",
      headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

async function testWrongKey() {
  try {
    const user = {
      name: "John Doe",
      job: "Developer",
    };
    const url = "https://reqres.in/api/users";
    const options = {
      method: "POST",
      headers: { "x-api-key": WRONG_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

async function testUnauthorized() {
  try {
    const user = {
      name: "John Doe",
      job: "Developer",
    };
    const url = "https://reqres.in/api/users";
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.log("An error occurred:", error);
  }
}

async function run() {
  console.log("Successfull:")
  await testSuccess();
  console.log("Wrong key:")
  await testWrongKey();
  console.log("Unauthorized:")
  await testUnauthorized();
}

run();