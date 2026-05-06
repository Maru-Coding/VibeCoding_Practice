const profile = {
  name: "김태헌",
  job: "SideOnAI 대표",
  tagline: "AI와 함께 놀고 있습니다. 같이 노실 분?",
  email: "th@sideonai.com",
  phoneDisplay: "010-1111-1111",
  phoneRaw: "01011111111",
  linkedin: "https://www.linkedin.com/",
  youtube: "https://www.youtube.com/@ai-study",
};

function applyProfile(data) {
  const setText = (id, value) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  };

  setText("name", data.name);
  setText("job", data.job);
  setText("tagline", data.tagline);

  const email = document.getElementById("email");
  if (email) {
    email.textContent = data.email;
    email.href = `mailto:${data.email}`;
  }

  const phone = document.getElementById("phone");
  if (phone) {
    phone.textContent = data.phoneDisplay;
    phone.href = `tel:${data.phoneRaw}`;
  }

  const linkedin = document.getElementById("linkedin");
  if (linkedin) {
    linkedin.href = data.linkedin;
  }

  const youtube = document.getElementById("youtube");
  if (youtube) {
    youtube.href = data.youtube;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  applyProfile(profile);
});
