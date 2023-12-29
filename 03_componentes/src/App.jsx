import ListaProgramas from "./components/ListaProgramas.jsx";
import ListadoCursos from "./components/ListadoCursos.jsx";


const App = function () {
    const empleado = {
        nombre: "José García",
        departamento: "IT",
        puesto: "Programador"
    };

    return (
        <div>
            <h1>Datos del empleado</h1>
            <p><b>Nombre: </b>{empleado.nombre}</p>
            <p><b>Departamento: </b>{empleado.departamento}</p>
            <p><b>Puesto: </b>{empleado.puesto}</p>
            <ListaProgramas/>
            <ListadoCursos/>
        </div>
    )
}

export default App;
