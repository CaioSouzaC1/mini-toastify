const CreateToast = (
  message,
  type = "info",
  time = 4000,
  position = "top-right"
) => {
  const toastify = document.querySelector("#toastify");
  const toastIcon = document.createElement("i");
  const toast = document.createElement("div");

  toastIcon.classList.add("fas");

  toast.textContent = message;
  toast.appendChild(toastIcon);
  if (type === "info") {
    toastIcon.classList.add("fa-info-circle");
  }
  if (type === "error") {
    toastIcon.classList.add("fa-times-circle");
  }
  if (type === "success") {
    toastIcon.classList.add("fa-check-circle");
  }
  if (type === "warning") {
    toastIcon.classList.add("fa-exclamation-triangle");
  }

  toast.classList.add(`non-${position}`);
  toast.classList.add(position);
  toast.classList.add(type);
  toastify.appendChild(toast);
  setTimeout(() => {
    toast.classList.remove(`non-${position}`);
  }, 1000);

  setTimeout(() => {
    toast.classList.add(`non-${position}`);
    setTimeout(() => {
      toastify.removeChild(toast);
    }, 1000);
  }, time + 1000);
};
