import Student from "../student/student";

export default function Generation() {
  return (
    <>
      <h2>Generation</h2>
      <p>
        En <em>Generation</em> aprendí con pasión, Java Dev Jr. fue mi canción.
        Bootcamp brillante, conocimientos al alza,
        <strong>Generation MX</strong>, ¡mi ruta en casa!
      </p>
      <h4 id="subtitle">Participantes</h4>
      <Student
        id="p1"
        name="Tania"
        url="https://www.linkedin.com/in/taniagd/"
        isGraduate={true}
      />
      <Student
        id="p2"
        name="Jimena"
        url="www.linkedin.com/in/jimena-b-456405153"
        isGraduate={false}
      />
      <Student
        id="p3"
        name="Yael"
        url="https://www.linkedin.com/in/jesus-yael-quiroz-p%C3%A9rez-7b4001283/"
        isGraduate={false}
      />
      <Student
        id="p4"
        name="Antonio"
        url="https://www.linkedin.com/in/antonio-maldonado-pinzon-4aaa93221/"
        isGraduate={false}
      />
    </>
  );
}
