const profile = {
  name: "마루설아",
  job: "개발자 꿈나무 블로그",
  tagline: "안녕하세요!",
  email: "test@test.com",
  blog: "https://maruseol-a.tistory.com/",
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

  const blog = document.getElementById("blog");
  if (blog) {
    blog.href = data.blog;
  }

}

document.addEventListener("DOMContentLoaded", () => {
  applyProfile(profile);
});
