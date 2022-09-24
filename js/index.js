import stundenplan from "./stundenplan.js";

let id = new URLSearchParams(window.location.search).get("id");

stundenplan.fetch(id);
