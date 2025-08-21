// Get form fields and preview elements
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  summary: document.getElementById("summary"),
  education: document.getElementById("education"),
  skills: document.getElementById("skills"),
  experience: document.getElementById("experience")
};

const preview = {
  name: document.getElementById("pName"),
  email: document.getElementById("pEmail"),
  phone: document.getElementById("pPhone"),
  summary: document.getElementById("pSummary"),
  education: document.getElementById("pEducation"),
  skills: document.getElementById("pSkills"),
  experience: document.getElementById("pExperience")
};

// Update resume preview in real time
Object.keys(inputs).forEach(key => {
  inputs[key].addEventListener("input", () => {
    if (key === "skills") {
      preview.skills.innerHTML = "";
      inputs.skills.value.split(",").forEach(skill => {
        if (skill.trim() !== "") {
          let li = document.createElement("li");
          li.textContent = skill.trim();
          preview.skills.appendChild(li);
        }
      });
    } else {
      preview[key].textContent = inputs[key].value || "Not provided";
    }
  });
});

// Clear form function
function clearForm() {
  Object.keys(inputs).forEach(key => inputs[key].value = "");
  preview.name.textContent = "Your Name";
  preview.email.textContent = "example@mail.com";
  preview.phone.textContent = "+91 1234567890";
  preview.summary.textContent = "Short summary about you will appear here...";
  preview.education.textContent = "Your education will appear here...";
  preview.skills.innerHTML = "";
  preview.experience.textContent = "Your work experience will appear here...";
}
