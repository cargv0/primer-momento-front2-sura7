const CourseCard = ({ cursos }) => {
    return (
        <div>
            <p>ID: {info.id}</p>
            <h2>Titulo: {info.Titulo}</h2>
            <p>Docente: {info.Docente}</p>
            <p>Categoria: {info.Categoria}</p>
            <p>Intervalo: {info.Intervalo}</p>
            <p>Lecciones: {info.Lecciones}</p>
            <p>Rango: {info.Rango}</p>
            <p>Costo: {info.Costo}</p>
            <p>Puntuacion: {info.Puntuacion}</p>
            <p>Estudiante: {info.Estudiante}</p>
            <p>Informacion del curso: {info.InformacionDelCurso}</p>
        </div>
    )
}
export default CourseCard