// Toggle Dropdown Content
function toggleDropdown(button) {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

// Toggle Theme Functionality
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeButton = document.getElementById("themeButton");
    themeButton.innerHTML = document.body.classList.contains("dark-theme") ? "🌙" : "🌞";
}

// Welcome Message
const welcomeMessage = `
    <h1>Welcome to My Learning Junction</h1>
    <p>I am a learner and a nature lover. I love adrak wali chai ☕🍃. In this Learning Junction I write blogs, list read papers, and more. This place is mostly related to my current research topic. I have also added some papers which I really enjoyed reading.</p>
`;

// Display the selected blog content from an external file
async function showBlog(blogFileName) {
    document.getElementById("welcomeMessage").style.display = "none";
    try {
        const response = await fetch(blogFileName);
        const content = await response.text();
        document.getElementById("blogContent").innerHTML = content;
    } catch (error) {
        console.error("Error loading blog content:", error);
        document.getElementById("blogContent").innerHTML = "<p>Error loading blog content.</p>";
    }
}

// Display the welcome message by default
document.getElementById("blogContent").innerHTML = welcomeMessage;
