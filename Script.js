function simulate() {

    let processInput =
        document.getElementById("processes").value.trim();

    let burstInput =
        document.getElementById("burstTimes").value.trim();

    let quantum =
        parseInt(document.getElementById("quantum").value);

    if(processInput === "" || burstInput === "" || isNaN(quantum)){
        alert("Please enter all inputs");
        return;
    }

    let processes = processInput.split(" ");
    let burstTimes = burstInput.split(" ").map(Number);

    if(processes.length !== burstTimes.length){
        alert("Number of Processes and Burst Times must be equal");
        return;
    }

    let n = processes.length;

    let remainingTime = [...burstTimes];
    let waitingTime = new Array(n).fill(0);
    let turnaroundTime = new Array(n).fill(0);

    let currentTime = 0;
    let completed = 0;

    let ganttChart = "";

    while(completed < n){

        let executed = false;

        for(let i = 0; i < n; i++){

            if(remainingTime[i] > 0){

                executed = true;

                ganttChart += "| " + processes[i] + " ";

                if(remainingTime[i] > quantum){

                    currentTime += quantum;
                    remainingTime[i] -= quantum;

                }else{

                    currentTime += remainingTime[i];

                    turnaroundTime[i] = currentTime;

                    waitingTime[i] =
                        turnaroundTime[i] - burstTimes[i];

                    remainingTime[i] = 0;
                    completed++;
                }
            }
        }

        if(!executed)
            break;
    }

    let totalWT = 0;
    let totalTAT = 0;

    let output = "";

    output += "ROUND ROBIN CPU SCHEDULING\n";
    output += "=======================================\n\n";

    output += "Gantt Chart:\n";
    output += ganttChart + "|\n\n";

    output += "Process\tBurst Time\tWaiting Time\tTurnaround Time\n";
    output += "-------------------------------------------------------------\n";

    for(let i = 0; i < n; i++){

        output +=
            processes[i] + "\t\t" +
            burstTimes[i] + "\t\t" +
            waitingTime[i] + "\t\t" +
            turnaroundTime[i] + "\n";

        totalWT += waitingTime[i];
        totalTAT += turnaroundTime[i];
    }

    output += "\n-------------------------------------------------------------\n";

    output += "\nAverage Waiting Time = "
            + (totalWT / n).toFixed(2);

    output += "\nAverage Turnaround Time = "
            + (totalTAT / n).toFixed(2);

    document.getElementById("output").innerText = output;
}