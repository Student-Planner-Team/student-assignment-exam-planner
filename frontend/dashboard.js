export default function Dashboard() {
  const studentName = "Kahina";

  const grades = [15, 14, 16, 18];

  return `
    <h1>Bienvenue ${studentName}</h1>
    <h2>Vos notes :</h2>
    <ul>
      ${grades.map(g => `<li>${g}</li>`).join("")}
    </ul>
  `;
}