// Console test 
const name = "Ada";
let labsCompleted = 6;
let isEnrolled = false;
labsCompleted = labsCompleted + 1;
console.log(`${name} has completed ${labsCompleted} labs.`);

// Like button stuff
const likeBtn = document.querySelector("#like-btn");
const likeCount = document.querySelector("#like-count");
const likeMessage = document.querySelector("#like-message");

const LikeCounter = {
    likes: 0,
    increment() {
        this.likes = this.likes + 1;
        this.render();
        this.updateLikeDisplay();
    },
    render() {
        likeCount.textContent = `${this.likes} likes`;
    },
    updateLikeDisplay() {
        likeCount.textContent = `${this.likes} likes`;
        if (this.likes >= 10) {
        likeMessage.textContent = "Wow, thanks for all the likes!";
        } else if (this.likes >= 5) {
        likeMessage.textContent = "Glad you like it!";
        } else {
        likeMessage.textContent = "";
        }
    }
}

if (likeBtn) {
    likeBtn.addEventListener("click", function() {
    LikeCounter.increment();
});
} else {
    console.warn("like-btn not found on this page");
}



// Dark mode stuff
const themeBtn = document.querySelector("#theme-btn");
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark");
});

// Make list
const goals = ["HTML", "CSS", "JavaScript"];
const goalsList = document.querySelector("#goals-list");
goals.forEach(function(goal) {
    const item = document.createElement("li");
    item.textContent = goal;
    goalsList.appendChild(item);
});