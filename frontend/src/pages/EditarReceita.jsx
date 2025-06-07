import React from "react";
import { useParams } from "react-router-dom";

function EditarReceita() {
    const { id } = useParams();

    return(
        <h2>Editando Receita ID: {id}</h2>
    )
}
export default EditarReceita;