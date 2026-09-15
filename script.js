const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
const again = document.getElementById("again");
const votesEl = document.getElementById("votes");

let votes = Number(localStorage.getItem("awarenessVotes") || 0);
votesEl.textContent = votes.toLocaleString("he-IL");

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    votes += 1;
    localStorage.setItem("awarenessVotes", votes);

    votesEl.textContent = votes.toLocaleString("he-IL");
    result.classList.add("show");

    result.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  });
});

again.addEventListener("click", () => {
  result.classList.remove("show");

  document.getElementById("poll").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
