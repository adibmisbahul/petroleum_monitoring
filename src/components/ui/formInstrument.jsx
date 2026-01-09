import { useState } from "react";
import Button from "./button";
import Input from "./input";

const FormAddInstrument = (props) => {
  const { close } = props;
  const [newTag, setNewTag] = useState();
  const [newDescription, setNewDescription] = useState();
  const [newType, setNewType] = useState();
  const [newLocation, setNewLocation] = useState();
  const [newStatus, setNewStatus] = useState();
  function addNewInstrument() {
    const data = { newTag, newDescription, newType, newLocation, newStatus };
    console.log(data);
  }
  return (
    <div
      className=""
      style={{
        position: "absolute",
        zIndex: "1",
        display: "flex",
        flexDirection: "column",
        gap: "1vw",
        width: "40vw",
        padding: "2vw",
        border: "solid 1px #20283c",
        borderRadius: "5px",
        backgroundColor: "#080c16",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>add new instrument</h3>
        <p
          onClick={close}
          style={{
            padding: "2px 8px 2px 8px",
            backgroundColor: "red",
            cursor: "pointer",
            borderRadius: "2px",
          }}
        >
          x
        </p>
      </div>

      <Input
        value={newTag}
        placeholder={" tag"}
        onChange={(e) => setNewTag(e.target.value)}
      />
      <Input
        value={newDescription}
        placeholder={"Description"}
        onChange={(e) => setNewDescription(e.target.value)}
      />
      <Input
        value={newType}
        placeholder={"type"}
        onChange={(e) => setNewType(e.target.value)}
      />
      <Input
        value={newLocation}
        placeholder={"location"}
        onChange={(e) => setNewLocation(e.target.value)}
      />
      <Input
        value={newStatus}
        placeholder={"status"}
        onChange={(e) => setNewStatus(e.target.value)}
      />
      <Button onClick={addNewInstrument} text={"Add Instrument"} />
    </div>
  );
};

export default FormAddInstrument;
