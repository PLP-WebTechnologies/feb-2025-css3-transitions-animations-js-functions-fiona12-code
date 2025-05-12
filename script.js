// Function to store user preference in localStorage
function storePreference(isAnimated) {
  localStorage.setItem("animationEnabled", isAnimated);
}

// Function to retrieve the user preference from localStorage
function getPreference() {
  return localStorage.getItem("animationEnabled") === "true";
}

// Function to apply the animation preference to the element
function applyAnimationPreference() {
  const animatedElement = document.getElementById("animatedElement");
  const isAnimated = getPreference();

  if (isAnimated) {
    animatedElement.classList.add("animate");
  } else {
    animatedElement.classList.remove("animate");
  }
}

// Function to toggle the animation state
function toggleAnimation() {
  const isCurrentlyAnimated = getPreference();
  const newAnimationState = !isCurrentlyAnimated;

  storePreference(newAnimationState);
  applyAnimationPreference();
}

// Add event listener to toggle animation on button click
document
  .getElementById("toggleAnimation")
  .addEventListener("click", toggleAnimation);

// Apply animation preference on page load
window.onload = function () {
  applyAnimationPreference();
};
