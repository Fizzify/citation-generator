const inputSurname = document.getElementById("input-surname");
const inputInitial = document.getElementById("input-initial");
const inputDate = document.getElementById("input-date");
const inputArticleTitle = document.getElementById("input-article-title");
const inputWebsiteName = document.getElementById("input-website-name");
const inputUrl = document.getElementById("input-url");
const inputBtn = document.getElementById("input-btn");
const generatedCitation = document.getElementById("generated-citation");

inputBtn.addEventListener("click", () => {
  const inputSurnameValue = inputSurname.value;
  const inputInitialValue = inputInitial.value;
  const inputDateValue = inputDate.value;
  const inputArticleTitleValue = inputArticleTitle.value;
  const inputWebsiteNameValue = inputWebsiteName.value;
  const inputUrlValue = inputUrl.value;
  generatedCitation.textContent = `${inputSurnameValue}, ${inputInitialValue}. (${inputDateValue}). ${inputArticleTitleValue}. ${inputWebsiteNameValue}. ${inputUrlValue}`;
});
