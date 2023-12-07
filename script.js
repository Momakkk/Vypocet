function calculateTime() {
    const startTimeInput = document.getElementById('startTime').value;
    const durationInput = parseInt(document.getElementById('duration').value, 10);
 
    const startTime = parseTime(startTimeInput);
    const endTime = new Date(startTime.getTime() + durationInput * 60000);
    const totalMinutes = calculateTotalMinutes(endTime);
 
    const formattedEndTime = formatTime(endTime);
 
    document.getElementById('result').innerText = formattedEndTime;
    document.getElementById('totalSumMinutesResult').innerText = totalMinutes; // Zobraz výsledek
}
 
function parseTime(timeString) {
    const [hours, minutes] = timeString.split(':').map(part => parseInt(part, 10));
    const date = new Date(2023, 0, 1, hours, minutes);
    return date;
}
 
function calculateTotalMinutes(date) {
    return date.getHours() * 60 + date.getMinutes();
}
 
function calculateSum() {
    const sumInput = document.getElementById('sumMinutes').value;
 
    const totalSumMinutes = evaluateSum(sumInput);
 
    document.getElementById('totalSumMinutesResult').innerText = totalSumMinutes;
}
 
function evaluateSum(input) {
    const minutesArray = input.split('+').map(item => parseInt(item.trim(), 10));
    const totalMinutes = minutesArray.reduce((sum, value) => sum + value, 0);
    return totalMinutes;
}
 
function formatTime(date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}