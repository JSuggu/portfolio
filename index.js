import { services } from "./services/services.js";

window.addEventListener("DOMContentLoaded", (e) => {
    services.changeTheme();
    services.contactRedirection();
    services.sendEmail();
});