const API_KEY = "reqres-free-v1";
const url = "https://reqres.in/api/unknown/23";
const url2 = "https://reqres.in/api/unknown";
data = {
  name: "morpheus",
  job: "leader",
};

async function test() {
  try {
    const response = await fetch(url, {
      headers: { "x-api-key": API_KEY },
    });
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText} @ ${url}`
      );
    }
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

async function testPost() {
  try {
    const response = await fetch(url2, {
      method: "POST",
      headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText} @ ${url}`
      );
    }
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

async function testPut() {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
      body: JSON.stringify({ job: "zion captain" })
    });
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText} @ ${url}`
      );
    }
    if (response.status === 204) {
      console.log(response.status + " " + response.statusText);
      return null;
    }
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}

async function testDelete() {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: { "x-api-key": API_KEY, "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(
        `HTTP ${response.status} ${response.statusText} @ ${url}`
      );
    }
    if (response.status === 204) {
      console.log(response.status + " " + response.statusText);
      return null;
    }
    const json = await response.json();
    console.log(json);
  } catch (e) {
    console.log(e.message);
  }
}
async function run() {
  await test();
  await testPost();
  await testPut();
  await testDelete();
}

run();
