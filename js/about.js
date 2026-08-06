import { observeElements } from "./common.js";

observeElements({ elements: document.querySelector("#intro") });
observeElements({ elements: document.querySelector("#team") });
observeElements({ elements: document.querySelector("#faq") });
observeElements({ elements: document.querySelector("#contact") });

const FAQS = [
    {
        question: "What is this website about?",
        answer: "An educational platform where you can discover space, astronomy, and the wonders of the universe.",
    },
    {
        question: "Who created this website?",
        answer: "A team of four web development students created this website as part of a school project.",
    },
    {
        question: "What can I learn from this website?",
        answer: "You can explore fascinating topics such as planets, stars, galaxies, and other incredible objects in space.",
    },
    {
        question: "Is this website suitable for children?",
        answer: "Yes! The content is family-friendly and designed for learners of all ages.",
    },
    {
        question: "Can I use this website for school projects?",
        answer: "Of course! Feel free to use the information here for educational purposes and school assignments.",
    },
    {
        question: "Does this website collect personal information?",
        answer: "No. This website does not collect, store, or ask for any personal information from visitors.",
    },
    {
        question: "What devices can I use to access this website?",
        answer: "You can visit the website on computers, tablets, and mobile devices.",
    },
    {
        question: "How can I share feedback?",
        answer: "We would love to hear from you! You can share your thoughts and suggestions through the feedback form on this page.",
    },
];

function renderFaqs() {
    const list = document.getElementById("faq-list");

    list.innerHTML = FAQS.map(
        (faq, i) => `
                <div class="border-border bg-surface shadow-elevated overflow-hidden rounded-sm border animate-target">
                    <h3>
                        <button
                            id="faq-trigger-${i + 1}"
                            data-accordion-trigger="${i + 1}"
                            aria-expanded="false"
                            aria-controls="ac-${i + 1}"
                            class="flex w-full flex-1 items-center justify-between px-4 py-3.5 text-left"
                        >
                            <span>${faq.question}</span>
                            <i
                                id="ai-${i + 1}"
                                class="bx bx-plus text-primary text-base transition-transform duration-300"
                                aria-hidden="true"
                            ></i>
                        </button>
                    </h3>
                    <div
                        id="ac-${i + 1}"
                        role="region"
                        aria-labelledby="faq-trigger-${i + 1}"
                        aria-hidden="true"
                        class="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                    >
                        <p class="text-muted px-4 pb-3 text-base">${faq.answer}</p>
                    </div>
                </div>`,
    ).join("");
}

function toggleAccordion(index) {
    const content = document.getElementById(`ac-${index}`);
    const icon = document.getElementById(`ai-${index}`);

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        content.setAttribute("aria-hidden", "true");
        icon.classList.remove("bx-minus");
        icon.classList.add("bx-plus");
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        content.removeAttribute("aria-hidden");
        icon.classList.remove("bx-plus");
        icon.classList.add("bx-minus");
    }
}

const ALERT_STYLES = {
    error: ["border-error-border", "bg-error-surface", "text-error"],
    success: ["border-success-border", "bg-success-surface", "text-success"],
};

let alertTimeout = null;

function showAlert(status, message) {
    const row = document.getElementById("form-alert-row");
    const alert = document.getElementById("form-alert");

    if (alertTimeout) {
        clearTimeout(alertTimeout);
        alertTimeout = null;
    }

    alert.classList.remove(...ALERT_STYLES.error, ...ALERT_STYLES.success);
    alert.classList.add(...ALERT_STYLES[status]);
    alert.textContent = message;

    if (!row.classList.contains("expanded")) {
        row.classList.add("expanded");
        alert.classList.add("alert-enter");
    }

    if (status === "success") {
        alertTimeout = setTimeout(() => {
            row.classList.remove("expanded");
            alertTimeout = null;
        }, 3000);
    }
}

function markInvalid(field) {
    field.setAttribute("aria-invalid", "true");
    field.focus();
}

function clearInvalid(field) {
    field.removeAttribute("aria-invalid");
}

function submitForm() {
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    const email = emailField.value.trim().toLowerCase();
    const message = messageField.value.trim();

    clearInvalid(emailField);
    clearInvalid(messageField);

    if (!email) {
        showAlert("error", "Error: Email field empty, unable to send message.");
        markInvalid(emailField);
        return;
    }

    if (!message) {
        showAlert(
            "error",
            "Error: Message field empty, unable to send message.",
        );
        markInvalid(messageField);
        return;
    }

    const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

    if (
        !emailRegex.test(email) ||
        email.startsWith(".") ||
        email.split("@")[0].endsWith(".") ||
        email.includes("..")
    ) {
        showAlert("error", "Error: You entered an invalid email.");
        markInvalid(emailField);
        return;
    }

    const toBackend = JSON.stringify({
        email,
        message,
    });

    console.log(toBackend);

    showAlert(
        "success",
        "Success: Your message has been sent. Thank you for your feedback!",
    );
}

document.addEventListener("DOMContentLoaded", () => {
    renderFaqs();

    document
        .getElementById("contact-form")
        .addEventListener("submit", (event) => {
            event.preventDefault();
            submitForm();
        });

    document.getElementById("email").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
        }
    });

    document.querySelectorAll("[data-accordion-trigger]").forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleAccordion(btn.dataset.accordionTrigger);
        });
    });
});
