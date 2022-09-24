let stundenplan = {
    fetch: function (id) {
        fetch("stundenplaene/" + id + "/stundenplan.json")
            .then(response => response.json())
            .then(this.init.bind(this));
    },

    initDays: function (template, json) {
        let headRow = template.querySelectorAll("thead tr")[0];
        for (const day of json.days) {
            let th = document.createElement("th");
            th.setAttribute("class", "day")
            th.append(day);
            headRow.append(th);
        }
    }, initHour: function (json, i, tr) {
        for (let j = 0; j < json.days.length; j++) {
            if (json.timetable.length > i && json.timetable[i].length > j) {
                let subject = json.timetable[i][j];
                if (!subject) {
                    // skip because of rowspan
                } else if (subject.title) {
                    let td = document.createElement("td");
                    let styleclass = subject.title.toLowerCase();
                    td.setAttribute("class", "subject " + styleclass);
                    td.append(subject.title);
                    if (subject.rowspan) {
                        td.setAttribute("rowspan", subject.rowspan);
                    }
                    tr.append(td);
                } else {
                    let td = document.createElement("td");
                    td.setAttribute("class", "break");
                    tr.append(td);
                }
            } else {
                let td = document.createElement("td");
                td.setAttribute("class", "break");
                tr.append(td);
            }
        }
    }, init: function (stundenplanJson) {
        for (const json of stundenplanJson) {
            let template = document.getElementById("template").cloneNode(true);
            template.id = json.id;
            template.querySelectorAll("h2")[0].textContent = json.name;

            this.initDays(template, json);

            let body = template.querySelectorAll("tbody")[0];
            for (let i = 0; i < json.times.length; i++) {
                let tr = document.createElement("tr");
                let tdStunde = document.createElement("td");
                tdStunde.setAttribute("class", "stunde");
                tdStunde.append("" + (i + 1));
                tr.append(tdStunde);

                let tdZeit = document.createElement("td");
                tdZeit.setAttribute("class", "zeit");
                tdZeit.append(json.times[i]);
                tr.append(tdZeit);

                this.initHour(json, i, tr);
                body.append(tr);
            }

            document.getElementById("stundenplaene").append(template);
        }
    }
}

//default export
export default stundenplan
