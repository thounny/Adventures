"use strict";

let categories = [
  "Adventures",
  "Arts & Crafts",
  "Local Sports",
  "Museums",
  "Wine Tastings",
  "Other",
];

let activities = [
  {
    category: "Adventures",
    id: "A101",
    name: "Valley Hot Air Balloons",
    description:
      "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
    location: "121 S. Main Street",
    price: 265.0,
  },
];

window.onload = function () {
  populateCategoryDropdown();
  document
    .getElementById("categoryDropdown")
    .addEventListener("change", handleCategoryChange);
};

function populateCategoryDropdown() {
  const dropdown = document.getElementById("categoryDropdown");

  // Add the default "Select one…" option
  let defaultOption = document.createElement("option");
  defaultOption.text = "Select one…";
  defaultOption.value = "";
  dropdown.add(defaultOption);

  // Populate dropdown with categories
  for (let category of categories) {
    let option = document.createElement("option");
    option.text = category;
    option.value = category;
    dropdown.add(option);
  }
}

function handleCategoryChange() {
  const selectedCategory = document.getElementById("categoryDropdown").value;
  const tableBody = document.getElementById("activitiesTableBody");

  // Clear previous table contents
  tableBody.innerHTML = "";

  // If "Select one" is chosen, show an informative message
  if (selectedCategory === "") {
    displayNoActivitiesMessage(
      "Please select a category to see available activities."
    );
    return;
  }

  // Filter activities by the selected category
  const filteredActivities = activities.filter(
    (activity) => activity.category === selectedCategory
  );

  // Display a message if no activities match the selected category
  if (filteredActivities.length === 0) {
    displayNoActivitiesMessage(
      `No activities available for ${selectedCategory}.`
    );
    return;
  }

  // Populate the table with the filtered activities
  for (let activity of filteredActivities) {
    let row = tableBody.insertRow();

    let cell1 = row.insertCell(0);
    cell1.textContent = activity.name;

    let cell2 = row.insertCell(1);
    cell2.textContent = activity.description;

    let cell3 = row.insertCell(2);
    cell3.textContent = activity.location;

    let cell4 = row.insertCell(3);
    cell4.textContent = `$${activity.price.toFixed(2)}`;
  }
}

function displayNoActivitiesMessage(message) {
  const tableBody = document.getElementById("activitiesTableBody");
  let row = tableBody.insertRow();
  let cell = row.insertCell(0);
  cell.colSpan = 4;
  cell.textContent = message;
  cell.className = "no-activities-message";
}
