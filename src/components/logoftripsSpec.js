const Fields = {
  dateField: [{ name: "Date of trip", type: "date" }],

  idField: [
    { name: "SS ID", type: "number" },
    { name: "FPS ID", type: "number" },
    { name: "Transporter ID", type: " number" }
  ],

  nameFields: [
    { name: "First Name", type: "text" },
    { name: "Middle Name", type: "text" },
    { name: "Last Name", type: "text" }
  ],

  phonenumberField: [
    { name: "Phone number 1", type: "number" },
    { name: "Phone number 2", type: "number" }
  ],

  routesandstopsandloadField: [
    { name: "Route undertaken", type: "text" },
    { name: "Stops made", type: "text" },
    { name: "Load carried", type: "text" }
  ],

  costField: [{ name: "Cost per km", type: "number" }]
};

export default Fields;
