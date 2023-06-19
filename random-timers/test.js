function generateRandomTimes(startTime, endTime, count) {
  const start = new Date(`2000-01-01 ${startTime}`);
  const end = new Date(`2000-01-01 ${endTime}`);
  const times = [];

  const timeDiff = (end - start) / count;

  for (let i = 0; i < count; i++) {
    const randomFactor = Math.random() * timeDiff;
    const time = new Date(start.getTime() + i * timeDiff + randomFactor);
    const hours = String(time.getHours()).padStart(2, '0');
    const minutes = String(time.getMinutes()).padStart(2, '0');
    times.push(`${hours}:${minutes}`);
  }

  return times;
}

// Exemplo de uso:
const startTime = '13:00';
const endTime = '14:00';
const count = 5;

const randomTimes = generateRandomTimes(startTime, endTime, count);
randomTimes.forEach((time) => console.log(`⏰ ${time}`));
