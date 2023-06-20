// ⚠️HORÁRIO RÁPIDO - CONFIRMADO ⚡️

// ⏰10:01
// ⏰10:08
// ⏰10:13
// ⏰10:17
// ⏰10:23
// ⏰10:28
// ⏰10:32
// ⏰10:37
// ⏰10:42
// ⏰10:48
// ⏰10:52
// ⏰10:57

// 🚨 MODO DO JOGO 🚨
// 05x modo NORMAL MANUAL
// 05x modo TURBO MANUAL

// 🤑🚀 Repita o processo dentro do minuto pagante ! 🤑🚀

const startTime = document.getElementById("start");
const endTime = document.getElementById("end");
const count = document.getElementById("count");
const generatorBtn = document.getElementById("generator-btn");
const results = document.getElementById("results");
const copyBtn = document.getElementById("copy-btn");

generatorBtn.addEventListener("click", () =>
  generateRandomTimes(startTime.value, endTime.value, count.value)
);

copyBtn.addEventListener('click', () => copyToClipboard(results.innerText.replace('<br />', '\n')))

function generateRandomTimes(startTime, endTime, count) {
  if (!startTime || !endTime || !count) return alert("Faltando dados");

  console.log(`start:${startTime}\nend:${endTime}\ncount:${count}\n`);

  startTime = startTime.trim();
  endTime = endTime.trim();
  count = parseInt(count, 10);

  const start = parseTime(startTime);
  const end = parseTime(endTime);

  if (!start || !end) return alert("Formato de hora inválido");

  const times = [];

  const timeDiff =
    (end.hour * 60 + end.minute - (start.hour * 60 + start.minute)) / count;

  for (let i = 0; i < count; i++) {
    const randomFactor = Math.random() * timeDiff;
    const minutes = Math.floor(
      start.hour * 60 + start.minute + i * timeDiff + randomFactor
    );
    const hours = Math.floor(minutes / 60) % 24;
    const minutesOfDay = minutes % 60;
    const formattedHours = String(hours).padStart(2, "0");
    const formattedMinutes = String(minutesOfDay).padStart(2, "0");
    times.push(`${formattedHours}:${formattedMinutes}`);
  }

  results.innerHTML = "⚠️HORÁRIO RÁPIDO - CONFIRMADO ⚡️<br>";

  times.forEach((time) => {
    results.innerHTML += `<br>⏰ ${time}`;
  });

  results.innerHTML +=
    "<br><br>🚨 MODO DO JOGO 🚨<br>05x modo NORMAL MANUAL<br>05x modo TURBO MANUAL<br><br> 🤑🚀 Repita o processo dentro do minuto pagante ! 🤑🚀<br>";

  return times;
}

function parseTime(time) {
  const pattern = /^(\d{1,2}):(\d{2})$/;
  const match = pattern.exec(time);
  if (match) {
    const hour = parseInt(match[1], 10);
    const minute = parseInt(match[2], 10);
    if (hour >= 0 && hour <= 23 && minute >= 0 && minute <= 59) {
      return { hour, minute };
    }
  }
  return null;
}

function copyToClipboard(value) {
  navigator.clipboard.writeText(value)
    .then(() => {
      console.log('Value copied to clipboard:', value);
      alert('Value copied to clipboard!');
    })
    .catch((error) => {
      console.error('Failed to copy value to clipboard:', error);
      alert('Failed to copy value to clipboard.');
    });
}
