import calendarweek from "./calendarweek.js"
import stundenplan from "./stundenplan.js";

calendarweek.init();
let id = new URLSearchParams(window.location.search).get("id");
stundenplan.fetch(id);
