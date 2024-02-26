//las funciones de tst se componende dos parametros el nombre del tst y el codigo de mi test

import { render, screen } from "@testing-library/react";
import App from "./App";
import { expect } from "vitest";

//metodo// primer parametro (nombre de mi test) // funcion anónima por tanto directamente comienza con arrowfunction de mi test
test("render App", () => {

    //llamamos al renderizado e importamos la funcion import { render } from "@testing-library/react" // y denominamos el componente que queremos renderizar
    render(<App/>)
//declaramos una constante de lo que queremos testear (screen busca dentro de pantalla) // /count is/i -> medinte esto no discrimina entre mayuscuas y minusculas //
    const countElement = screen.getByText(/count is/i)
    expect(countElement).toBeDefined();
})

