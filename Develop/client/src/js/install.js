const butInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  //store the event for later use'
  window.deferredPrompt = event;
});
// remove the hidden attribute from the install button
butInstall.removeAttribute("hidden");
// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  // Show the install prompt
  promptEvent.prompt();
  // reset the deferred prompt variable, since
  // prompt() can only be called once.
  window.deferredPrompt = null;
  // Hide the install button
  butInstall.setAttribute("hidden", true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {});
//clear the deferredPrompt so it can be garbage collected
window.deferredPrompt = null;
