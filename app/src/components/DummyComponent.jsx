import React from "react";

export default function DummyComponent({ title }) {
  return (
    <div className="container border rounded shadow shadow-sm p-3">
      <p className="display-3 text-center">{title || `My Dummy Component`}</p>
      <hr />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
        tempora placeat dicta culpa accusantium beatae atque. Corporis itaque
        quia assumenda magni? Nam dolorem corrupti sed optio culpa, laborum
        reiciendis expedita.
      </p>
    </div>
  );
}
