import React from "react";
import { Label, GrupoInput, Input, LeyendaError } from "../elements/Formulario";

const ComponenteInput = ({
  estado,
  setEstado,
  tipo,
  label,
  placeholder,
  name,
  leyendaE,
  expresionRegular,
  funcion,
}) => {
  const onChange = (e) => {
    setEstado({
      ...estado,
      campo: e.target.value,
    });
  };

  const validacion = () => {
    if (expresionRegular) {
      if (expresionRegular.test(estado.campo)) {
        setEstado({
          ...estado,
          valido: "true",
        });
      } else {
        setEstado({
          ...estado,
          valido: "false",
        });
      }
    }
    if (funcion) {
      funcion(estado, setEstado);
    }
  };

  return (
    <div>
      <Label htmlFor={name} valido={estado.valido}>
        {label}
      </Label>
      <GrupoInput>
        <Input
          type={tipo}
          placeholder={placeholder}
          id={name}
          value={estado.campo}
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
        />
      </GrupoInput>
      <LeyendaError valido={estado.valido}>{leyendaE}</LeyendaError>
    </div>
  );
};

export default ComponenteInput;
