# Round Robin CPU Scheduling Simulator

## Overview

This project is a web-based Round Robin CPU Scheduling Simulator developed using HTML, CSS, and JavaScript. It allows users to enter process IDs, burst times, and a time quantum value to simulate the Round Robin scheduling algorithm.

The simulator calculates:

* Waiting Time (WT)
* Turnaround Time (TAT)
* Average Waiting Time
* Average Turnaround Time
* Gantt Chart Execution Order

---

## Features

* User-friendly interface
* Dynamic Round Robin scheduling simulation
* Displays Gantt Chart
* Calculates Waiting Time for each process
* Calculates Turnaround Time for each process
* Computes Average Waiting Time
* Computes Average Turnaround Time
* Input validation for process data

---

## Technologies Used

* HTML5
* CSS3
* JavaScript

---

## Project Structure

```
RoundRobinScheduler/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## How to Run

1. Download or clone the repository.

```bash
git clone https://github.com/your-username/round-robin-scheduler.git
```

2. Open the project folder.

3. Double-click `index.html` or open it in any web browser.

4. Enter:

   * Process IDs (Example: P1 P2 P3 P4)
   * Burst Times (Example: 5 4 2 7)
   * Time Quantum (Example: 2)

5. Click **Run Simulation**.

6. View the scheduling results and Gantt Chart.

---

## Example Input

Processes:

```
P1 P2 P3 P4
```

Burst Times:

```
5 4 2 7
```

Time Quantum:

```
2
```

---

## Output

The simulator displays:

* Gantt Chart
* Waiting Time for each process
* Turnaround Time for each process
* Average Waiting Time
* Average Turnaround Time

---

## Round Robin Scheduling

Round Robin is a CPU scheduling algorithm in which each process is assigned a fixed time slice called a time quantum. Processes are executed cyclically until all processes complete execution.

### Advantages

* Fair CPU allocation
* Suitable for time-sharing systems
* Prevents process starvation

### Disadvantages

* Performance depends on quantum size
* Excessive context switching if quantum is too small

---

## Future Enhancements

* Arrival Time Support
* Animated Gantt Chart
* Process Priority Support
* Export Results to PDF
* Responsive Mobile Design

---

## Author

B.Varun

B.Tech Information Technology
